import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { projectCardData } from '@/utils/Constants'
import SectionDivider from './SectionDivider'
import { Particles } from './Particles'
import { useScroll,motion, useTransform, MotionValue } from 'framer-motion'
import { useMediaQuery } from '@chakra-ui/react'

const Projects = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)")[0];
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress,
    [0.3, 0.5],
    [1, 1.6]
  );

  const SectionOpacity = useTransform(scrollYProgress,
    [0, 0.08],
    [0, 1]
  );

  const cardOpacity = useTransform(scrollYProgress,
    [0, isMobile ? 0.2 : 0.3],
    [isMobile ? 0 : 0, 1]
  );

  const cardGap = useTransform(scrollYProgress,
    [0, 0.6],
    ["80px","30px"]
  );

  const cardScale = useTransform(scrollYProgress,
    [0, 0.4],
    [isMobile ? 1 : 1.8,1]
  );

  const xOdd = useTransform(scrollYProgress,
    [0, 0.4],
    ["-900px", "0px"]
  );

  const xEven = useTransform(scrollYProgress,
    [0, 0.4],
    ["900px", "-0px"]
  );

  const xTranslate =(index:number)=> {
    const x = isMobile ? "" : index % 2=== 0 ? xOdd : xEven;
    return {x}
  }

  return (
    <div ref={targetRef} id={"projects"} className='flex flex-col gap-6 items-center mt-[100px]'>
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:4.5, stiffness:100, ease:"easeInOut"}}
        style={{scale,position:"sticky"}} 
        className='flex'
      >
        <SectionDivider
          sectionName = 'Projects'
          className='rounded-[25px] hover:border-zinc-400 duration-300 ease-in mb-6'
        />
      </motion.div>
      <motion.div 
        className='flex flex-wrap sm:gap-8 gap-6 justify-center'
        style={{opacity:cardOpacity,scale:cardScale}}
      >
        {projectCardData.map((project, index) => (
              <ProjectCard
                key={index}
                styleFnc={xTranslate}
                projectId={project.projectId+1}
                projectName={project.projectName}
                githubLink={project.githubLink}
                projectLink={project.projectLink}
                projectImage={project.projectImage}
                techStack={project.techStack}
              />
        ))}
      </motion.div>
    </div>
  )
}

export default Projects
