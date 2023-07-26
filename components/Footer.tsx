import React from 'react'
import { Abril_Fatface, Andika, Arvo, Lato } from 'next/font/google'
import Link from 'next/link'
import { useScroll, useTransform,motion } from 'framer-motion'
import { useMediaQuery } from '@chakra-ui/react'

const arvo = Lato({
    display: 'swap',
    subsets: ["latin"],
    weight: ["400", "900"],
})

const Footer = () => {

  const targetRef = React.useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")[0];
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const yTranslate = useTransform(scrollYProgress,[0, isMobile ? 0.02 : 0.2], [ isMobile ? "-60px" : "-100px","0px"])

  const opacity = useTransform(scrollYProgress,[0, isMobile ? 0 : 0.1], [0, 1])

  return (
    <div ref={targetRef} className={`flex flex-col justify-center items-center mt-10 mb-2`}>
      <motion.div
          style={{y: yTranslate,opacity}}
      >
          <p
              className='text-transparent flex sm:flex-row flex-col sm:gap-6 justify-center items-center sm:text-[80px] text-[40px] font-bold border-1 border-white bg-clip-text bg-gradient-to-r from-[#7700ff] to-[#6f0066]  duration-300 ease-in-out'
          >
              <span>
                  Yug
              </span>
              <span>
                  Bhanushali
              </span>
          </p>
      </motion.div>

      <motion.div
          style={{y: yTranslate,opacity}}
      >
        <p className='text-[#ffffffa1] flex hover:text-gray-100 duration-500 ease-in-out sm:text-[15px] text-[13px]'>
            All rights reserved. © {new Date().getFullYear()}
        </p>
      </motion.div>
    </div>
  )
}

export default Footer
