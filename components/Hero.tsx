import { DevelperStatus, HeroTitle } from "@/utils/Constants";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {

  //changes the status of the Developer
  const { title, colour, boxShadow } = DevelperStatus("Active");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-fit justify-center bg-[#ffffff] bg-opacity-[0.16] py-1 px-4 rounded-[20px] border-[1.5px] border-[#515151] backdrop-filter backdrop-blur-2xl">
        <div className="flex justify-center items-center gap-2">
          {/* status */}
          <div className="flex justify-center">
            <div
              className={`h-2 w-2 rounded-full filter `}
              style={{
                boxShadow: `0px 0px 7px 4px ${boxShadow}`,
                backgroundColor: `${colour}`,
              }}
            />
          </div>

          {/* status type */}
          <div className="text-[13px] sm:text-[15px]">{title}</div>
        </div>
      </div>

      {/* title */}
      <div className="mt-[50px] sm:w-[500px] w-[300px] sm:text-[22px] text-[19px] justify-center text-center">
        <div className="flex flex-wrap items-center justify-center">
          {HeroTitle.map((title, index) => (
            <motion.span
              className="sm:mx-1 mx-[2px] sm:px-3 px-2 rounded-[20px] border-[1.5px] border-transparent cursor-pointer hover:bg-white hover:bg-opacity-[0.16] transition-all duration-300 ease-in-out hover:scale-110 hover:border-[#515151] hover:border-[1.5px]"
              key={index}
            >
              {title}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
