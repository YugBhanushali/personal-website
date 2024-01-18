import React, { useRef } from "react";
import SectionDivider from "./SectionDivider";
import Popover from "./ui/Popover";
import Tool from "./Tool";
import { toolsData } from "@/utils/Constants";
import { useScroll, useTransform, motion } from "framer-motion";

const Tools = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const toolsOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const sectionScale = useTransform(scrollYProgress, [0, 0.5], [1.4, 1]);

  return (
    <div ref={targetRef} className="flex flex-col items-center">
      <motion.div
        style={{ opacity, scale: sectionScale }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          stiffness: 100,
          spring: 0.5,
        }}
      >
        <SectionDivider
          sectionName="Tools"
          className="rounded-3xl hover:border-zinc-500 transition-all duration-300 ease-in-out my-[80px]"
        />
      </motion.div>

      <motion.div
        style={{ opacity: toolsOpacity }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {toolsData.map((tool, index) => (
          <motion.div>
            <Popover content={tool.name}>
              <Tool
                key={index}
                boxShadow={tool.boxShadow}
                image={tool.image}
                height={tool.height}
                width={tool.width}
              />
            </Popover>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
