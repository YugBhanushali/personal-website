import React, { useRef } from 'react'
import SectionDivider from './SectionDivider'
import Tech from './Tech'
import { tecnologiesData } from '@/utils/Constants'
import PopOver from './ui/Popover'
import { useScroll,motion, useTransform } from 'framer-motion'

const Techs = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const isMobile = window.innerWidth < 768;
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress,
    [0, 0.5],
    [0, 1]
  );

  const xTechLeft = useTransform(scrollYProgress,
    [0, 0.4],
    ["-200px", "0px"]
  );

  const xTechRight = useTransform(scrollYProgress,
    [0, 0.4],
    ["200px", "-0px"]
  );

  const scaleTech = useTransform(scrollYProgress,
    [0, 0.4],
    [isMobile ? 1 : 1.8,1]
  );

  const xTranslate =(index:number)=> {
    const x = isMobile ? "" : index < 5  ? xTechLeft : xTechRight;
    return {x}
  }

  const scaleSection = useTransform(scrollYProgress,
    [0, 0.4],
    [1.4,1]
  );


    
  return (
    <div ref={targetRef} className='flex flex-col items-center '>
      <motion.div
        style={{opacity,scale:scaleSection}}
      >
        <SectionDivider 
          sectionName="Technologies"
          className='rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px]' 
        />
      </motion.div>

      <div className='flex flex-wrap justify-center items-center gap-4 '>
        {
          tecnologiesData.map((tech, index) => {
            console.log(index);
            return(
              <PopOver content={tech.name}>
                <motion.div
                  style={{scale:scaleTech,...xTranslate(index),opacity}}
                >
                  <Tech 
                    key={index}
                    boxShadow={tech.boxShadow}
                    image={tech.image}
                  />
                </motion.div>
              </PopOver>
            )
          })
        }
      </div>
    </div>
  )
}

export default Techs
