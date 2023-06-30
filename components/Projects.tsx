import React from 'react'
import ProjectCard from './ProjectCard'
import { projectCardData } from '@/utils/Constants'

const Projects = () => {

  return (
    <div className=' flex gap-6'>
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
  )
}

export default Projects
