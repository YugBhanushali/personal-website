import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {GoStar} from 'react-icons/go'
import { motion, useScroll, useTransform } from 'framer-motion'
import {BiFile} from 'react-icons/bi'
import {HiOutlineDocumentDownload} from 'react-icons/hi'
import {MdPreview} from 'react-icons/md'

const GithubAndResume = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);
    const btnDivRef = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { scrollYProgress } = useScroll({
    target: btnDivRef,
    offset: ["start end", "end start"],
  })

    const opacity = useTransform(scrollYProgress,[0,0.2],[0,1])

    const scale = useTransform(scrollYProgress,[0,0.2],[0.6,1])

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={btnDivRef} className='flex flex-row gap-x-3 mt-10'>

        {/* website github link */}
    <motion.div
        style={{opacity,scale}}
    >
    <Link href="https://github.com/YugBhanushali/personal-website">
        <button
            className="bg-[#28282a97] gap-x-2 px-5 py-2 sm:w-[150px] w-[130px] border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out flex flex-row justify-center items-center"
        >
            <span>
                <GoStar />
            </span>
            <span>
                Github
            </span>
        </button>
    </Link>
    </motion.div>

    {/* resume link */}
    <motion.div
        style={{opacity,scale}}
        className="relative flex"
        ref={menuRef}
    >
        <button
            className="flex flex-row justify-center items-center gap-x-2 bg-[#28282a97] px-5 py-2 sm:w-[150px] w-[130px]  border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out"
            onClick={toggleMenu}
        >   
            <span>
                <BiFile size={15} className=''/>
            </span>
            <span>
                Resume
            </span>
        </button>
        {isMenuOpen && (
            <motion.div 
                initial={{opacity:0 , y:-10}}
                animate={{opacity:1 , y:0}}
                transition={{duration:0.3 , ease:'easeInOut',stiffness:200}}
                exit={{opacity:0}}
                className="absolute flex justify-center items-center flex-col top-[50px] left-0 w-[150px] bg-[black] border-[#343437] border-[1px] p-1 rounded-md z-10">
                    <a
                        href="/assets/resume/resume.pdf"
                        download="Yug_Bhanushali_Resume.pdf"
                        target='_blank'
                        rel="noreferrer"
                        className='w-full'
                    >
                        <button
                            className="flex flex-row justify-start items-center gap-x-2 px-5 py-2 text-white  w-full rounded-[4px] text-left hover:bg-[#27272A] hover:border-[#39393c]"
                        >
                            <span>
                                <HiOutlineDocumentDownload />
                            </span>
                            <span>
                                Download 
                            </span>
                        </button>
                    </a>

                    <button
                        className="flex flex-row justify-start items-center gap-x-2 menu-option px-5 py-2 text-white w-full rounded-[4px] text-left hover:bg-[#27272A] hover:border-[#39393c]"
                        onClick={() => {setIsMenuOpen(false),window.open('/assets/resume/resume.pdf', '_blank');}}
                    >
                        <span>
                            <MdPreview />
                        </span>
                        <span>
                            Preview
                        </span>
                    </button>
            </motion.div>
    )}
    </motion.div>
    </div>
  )
}

export default GithubAndResume
