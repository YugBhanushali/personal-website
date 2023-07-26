import { tecnologiesData } from '@/utils/Constants';
import { useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'

const Tech = (tech:{boxShadow:string, image:string}) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const test = typeof window !== 'undefined' ? window.innerWidth : 0;

    const isMobileView = test < 768;
  return (
    <>
      <div className='flex'>
          <div 
              className="flex justify-center items-center flex-col sm:hover:-translate-y-3  hover:-translate-y-1  hover:scale-[1.03] sm:p-4 sm:w-[80px] sm:h-[80px] w-[70px] h-[70px] p-2 bg-zinc-900 sm:rounded-[15px] rounded-[12px] duration-500 ease-in-out cursor-pointer"
              style={{
                  boxShadow: isHovered ? `${tech.boxShadow}` : "",
                  outline: false ? "1.5px solid #22d3eef0" : "1.5px solid #4c4c4cc5",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
              <Image
                  src={tech.image}
                  alt='Picture of the author'
                  width={isMobileView ? 30 : 40}
                  height={isMobileView ? 30 : 40}
                  className='duration-500 ease-in-out hover:scale-105'
              />
          </div>
      </div>
    </>
  )
}

export default Tech
