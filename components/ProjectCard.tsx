import Image from "next/image";
import React from "react";
import CodeToImage from "../public/assets/code-to-image-home.png";
import { HighlightGroup, HighlighterItem } from "./Highlighter";
import { Particles } from "./Particles";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";
import Demo from "./ui/Demo";
import { MotionValue, motion } from "framer-motion";

type ProjectCardProps = {
  key: number;
  projectId: number;
  projectName: string;
  githubLink: string;
  projectLink: string;
  projectImage: string;
  styleFnc: (index: number) => {
    x: string | MotionValue<string>;
  };
  techStack: {
    name: string;
    backgroundColour: string;
    borderColour: string;
    borderColourHover: string;
    icon: string;
  }[];
};

const ProjectCard = (projectProps: ProjectCardProps) => {
  const [isHovered, setIsHovered] = React.useState({
    github: false,
    site: false,
    card: false,
  });

  return (
    <motion.div style={projectProps.styleFnc(projectProps.projectId)}>
      {/* <div className='flex flex-col bg-[#ffffff] bg-opacity-[0.16] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl py-6 px-6 rounded-2xl'> */}
      <div
        className="flex flex-col sm:p-6 p-4 w-[340px] sm:w-[450px] h-full bg-zinc-900 sm:rounded-[15px] rounded-[12px] border-[1px] border-[#4c4c4cc5] hover:bg-white hover:bg-opacity-[0.15] hover:border-[#ffffff6e] duration-500 ease-in-out z-20 overflow-hidden hover:scale-105"
        onMouseEnter={() => setIsHovered({ ...isHovered, card: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, card: false })}
        style={{
          boxShadow: isHovered.card ? "0px 0px 20px 0px #ffffff6e" : "",
        }}
      >
        {/* Image of project */}
        <div className="flex">
          <Image
            src={projectProps.projectImage}
            alt="Picture of the author"
            width={400}
            height={400}
            className="sm:rounded-xl rounded-lg hover:scale-102 duration-500 ease-in-out"
          />
        </div>

        {/* Title of project , github link, link of site */}
        <div className="flex justify-between items-center mt-4">
          <div className=" bg-transparent">
            <Link
              href={projectProps.githubLink}
              className=" bg-transparent"
              target={"/"}
            >
              <FiGithub className="hover:scale-[1.2] text-white duration-500 ease-in-out sm:h-6 sm:w-6 h-4 w-4 hover:text-[#0CCE6B]" />
            </Link>
          </div>

          <div className="sm:text-[18px] text-[15px] font-bold">
            {projectProps.projectName}
          </div>

          <div>
            <Link href={projectProps.projectLink} target="/">
              <FiExternalLink className="hover:scale-[1.2] duration-500 ease-in-out sm:h-6 sm:w-6 h-4 w-4 text-white hover:text-[#0CCE6B]" />
            </Link>
          </div>
        </div>

        {/* <hr className="w-[200px] border-dashed h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/> */}
        <hr
          className={`border ${
            isHovered.card ? `border-gray-100` : `border-gray-400`
          } w-full my-2 duration-500 ease-in-out `}
        />
        {/* tech stack used  */}
        <div className="flex flex-wrap gap-2 justify-center mt-1">
          {projectProps.techStack.map((techStackItem, index) => {
            return (
              // <div className={`bg-[#21bad551] ${isHovered.card ? `border-[#088090]` :`border-[#024149]` } border-[2px] text-[15px] px-4 py-1 rounded-[18px] duration-300 ease-in-out`}
              <div
                className={`border-[2px] flex justify-center items-center gap-1 sm:text-[13px] text-[11px] px-4 py-1 rounded-[18px] duration-300 ease-in-out`}
                key={index}
                style={{
                  backgroundColor: techStackItem.backgroundColour,
                  borderColor: `${isHovered.card ? techStackItem.borderColourHover : techStackItem.borderColour}`,
                }}
              >
                <div>
                  <Image
                    src={techStackItem.icon}
                    alt="Picture of the author"
                    width={20}
                    height={20}
                    className="rounded-lg hover:scale-102 duration-500 ease-in-out sm:h-6 sm:w-6 h-4 w-4"
                  />
                </div>
                <div>{techStackItem.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
