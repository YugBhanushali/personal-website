import React from 'react'
import SectionDivider from './SectionDivider'
import { socialLinks } from '@/utils/Constants'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import { useScroll, useTransform,motion } from 'framer-motion'

//make a icon component which takes the app name and return the react-icons component
type IconDivProps = {
    boxShadow: string,
    isHovered: boolean,
    setIsHovered: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode,
    socialLink: string
}

const IconDiv = ({boxShadow,isHovered,setIsHovered,children,socialLink}:IconDivProps) => {
    return(
        <Link
            href={socialLink}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                className='sm:p-6 p-4 justify-center items-center sm:rounded-3xl rounded-2xl bg-white bg-opacity-[0.1] backdrop-blur-[3px] hover:bg-white hover:bg-opacity-[0.16] transition-all duration-300 ease-in-out'
                style={{
                    // boxShadow: isHovered ? `${boxShadow}` : "",
                    outline: isHovered ? "1.5px solid #ffffff55" : "1.5px solid #4c4c4cc5",
                    cursor:"pointer"
                }}
            >
                {children}
            </div>
        </Link>
    )
}

const Icon = ({name,id,socialLink}:{name:string,id:number,socialLink:string}) => {
    const [isHovered, setIsHovered] = React.useState(false)
    if(name === "Twitter"){
        return(
            <IconDiv
                boxShadow={isHovered ? '0 0 20px 5px #1da0f2aa' : 'none'}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                socialLink={socialLink}
            >
                <BsTwitter  
                    className={`sm:text-[40px] text-[30px] ${isHovered ? `text-[#1da0f2]` : `text-[#1da0f2aa]`} transition-all duration-500 ease-in-out`}
                />
            </IconDiv>
        )
    }
    else if(name === "Github"){
        return(
            <IconDiv
                boxShadow={isHovered ? '0 0 20px 5px #fff' : 'none'}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                socialLink={socialLink}
            >
                <BsGithub
                    className={`sm:text-[40px] text-[30px] ${isHovered ? `text-[#fff]` : `text-[#ffffffaa]`} transition-all duration-500 ease-in-out}`}
                />
            </IconDiv>
        )
    }
    else if(name === "LinkedIn"){
        return(
            <IconDiv
                boxShadow={isHovered ? '0 0 20px 5px #0A66C2' : 'none'}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                socialLink={socialLink}
            >
            <BsLinkedin
                className={`sm:text-[40px] text-[30px] ${isHovered ? `text-[#0A66C2]` : `text-[#0A66C2aa]`} transition-all duration-500 ease-in-out`}
            />
            </IconDiv>
        )
    }
}

const Socials = () => {
    const targetRef = React.useRef<HTMLDivElement>(null)
    const isMobile = window.innerWidth < 768

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const opacity = useTransform(scrollYProgress,[0, 0.3], [0, 1])

    const scale = useTransform(scrollYProgress,[0, isMobile ? 0.3:0.5], [1.5, 1])

    const iconScale = useTransform(scrollYProgress,[0, 0.5], [1.3, 1])
  return (
    <div ref={targetRef} className='flex flex-col justify-center items-center'>
        <motion.div
            style={{opacity,scale}}
        >
            <SectionDivider
                sectionName="Socials"
                className='rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px]'
            />
        </motion.div>

        <div className='flex flex-row gap-x-4 items-center justify-center'>
            {socialLinks.map((social, index) => {
                return(
                    <motion.div
                        key={index}
                        style={{scale:iconScale,opacity}}
                    >
                         <Icon name={social.name} id={index} socialLink={social.link} />
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default Socials
