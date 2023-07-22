import { tecnologiesData } from '@/utils/Constants';
import Image from 'next/image';
import React from 'react'

const Tech = (tech:{boxShadow:string, image:string}) => {
    const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <div className='flex'>
          <div 
              className="flex justify-center items-center flex-col hover:-translate-y-3 hover:scale-[1.05] sm:p-4 w-[80px] h-[80px] p-2 bg-zinc-900 sm:rounded-[15px] rounded-[12px] duration-500 ease-in-out cursor-pointer"
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
                  width={40}
                  height={40}
                  className='duration-500 ease-in-out hover:scale-105'
              />
          </div>
      </div>
    </>
  )
}

export default Tech
