import React from 'react'
import ProjectCard from './ProjectCard'
import { projectCardData } from '@/utils/Constants'
import SectionDivider from './SectionDivider'
import { Particles } from './Particles'

const Projects = () => {

  return (
    <div id='projects' className='flex flex-col gap-6 items-center mt-[100px]'>
      <div className='flex'>
        <SectionDivider
          sectionName = 'Projects'
          className='rounded-[25px] hover:border-zinc-400 duration-300 ease-in mb-6'
        />
      </div>
      <div className='flex flex-wrap sm:gap-8 gap-6 justify-center '>
        {projectCardData.map((project, index) => (
          <ProjectCard
            key={index}
            projectId={project.projectId}
            projectName={project.projectName}
            githubLink={project.githubLink}
            projectLink={project.projectLink}
            projectImage={project.projectImage}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
