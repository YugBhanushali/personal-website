import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { projectCardData } from '@/utils/Constants'
import SectionDivider from './SectionDivider'
import { Particles } from './Particles'
import { useScroll,motion, useTransform } from 'framer-motion'

const Projects = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress,
    [0.3, 0.5],
    [1, 2]
  );

  const opacity = useTransform(scrollYProgress,
    [0.2, 0.8],
    [1, 0.5]
  );

  return (
    <div ref={targetRef} id='projects' className='flex flex-col gap-6 items-center mt-[100px]'>
      <motion.div style={{scale,position:"sticky"}} className='flex'>
        <SectionDivider
          sectionName = 'Projects'
          className='rounded-[25px] hover:border-zinc-400 duration-300 ease-in mb-6'
        />
      </motion.div>
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
