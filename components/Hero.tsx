"use client";
import { DevelperStatus, HeroTitle } from "@/utils/Constants";
import React, { useEffect } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import StatusCircle from "./StatusCircle";
import { Particles } from "./Particles";

const Hero = () => {
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  //changes the status of the Developer
  const { title, colour, boxShadow } = DevelperStatus("Active");

  const opacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.9], [1, 0.5]);

  // make a function which return
  function getNum(num: number) {
    return num * 0.14;
  }

  return (
    <div
      ref={targetRef}
      className="flex flex-col justify-center items-center mt-[150px]"
    >
      <motion.div
        style={{ opacity, scale }}
        className="flex flex-col justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.3, ease: "easeInOut" }}
          className=" flex flex-col items-center justify-center"
        >
          <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-1 px-4 rounded-[20px] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
            <div className="flex justify-center items-center gap-2">
              {/* status */}
              <div className="flex justify-center">
                <StatusCircle currentStatus="Active" />
              </div>

              {/* status type */}
              <div className="text-[13px] sm:text-[15px]">{title}</div>
            </div>
          </div>
        </motion.div>

        {/* title */}
        <div className="mt-[50px] sm:w-[500px] w-[300px] sm:text-[22px] text-[19px] justify-center text-center">
          <motion.div className="flex flex-wrap items-center justify-center">
            {HeroTitle.map((title, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: getNum(index),
                    ease: "easeInOut",
                    stiffness: 100,
                    spring: 0.5,
                  }}
                >
                  <div className="sm:mx-1 mx-[2px] sm:px-3 px-2 rounded-[20px] border-[1.5px] border-transparent cursor-pointer hover:bg-white hover:bg-opacity-[0.16] transition-all duration-300 ease-in-out hover:scale-110 hover:border-[#515151] hover:border-[1.5px]">
                    {title}
                  </div>
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
