import React from 'react'
import SectionDivider from './SectionDivider'
import Popover from './ui/Popover'
import Tool from './Tool'
import { toolsData } from '@/utils/Constants'

const Tools = () => {
  return (
    <div className='flex flex-col items-center'>
      <SectionDivider
        sectionName="Tools"
        className='rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px]' 
      />

      <div className='flex flex-wrap gap-4'>
        {
          toolsData.map((tool, index) => (
            // <Popover content={tool.name}>
              <Tool
                key={index}
                boxShadow={tool.boxShadow}
                image={tool.image}
                height={tool.height}
                width={tool.width}
              />
            // </Popover>
          ))
        }
      </div>
    </div>
  )
}

export default Tools
