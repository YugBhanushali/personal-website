import React from 'react'
import SectionDivider from './SectionDivider'
import Tech from './Tech'
import { tecnologiesData } from '@/utils/Constants'
import Popover from './ui/Popover'

const Techs = () => {
    
  return (
    <div className='flex flex-col items-center'>
      <SectionDivider 
        sectionName="Technologies"
        className='rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px]' 
      />

      <div className='flex flex-wrap gap-4'>
        {
          tecnologiesData.map((tech, index) => (
            <Popover content={tech.name}>
              <Tech 
                key={index}
                boxShadow={tech.boxShadow}
                image={tech.image}
              />
            </Popover>
          ))
        }
      </div>
    </div>
  )
}

export default Techs
