import React, { useRef } from "react";
import Location from "./Location";
import Music from "./Music";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "@chakra-ui/react";

const LocationAndMusic = () => {
  const test = typeof window !== "undefined" ? window.innerWidth : 0;

  const isMobileView = test < 768;
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, isMobileView ? 0.2 : 0.5],
    [0, 1],
  );

  const scale = useTransform(
    scrollYProgress,
    [0, isMobileView ? 0.3 : 0.5],
    [isMobileView ? 1.1 : 1.5, 0.9],
  );

  return (
    <div
      ref={targetRef}
      id="about"
      className="flex sm:flex-row flex-col items-center justify-center sm:gap-8 gap-0 mt-[100px]"
    >
      <motion.div style={{ opacity, scale }}>
        <Location />
      </motion.div>

      <motion.div style={{ opacity, scale }} className="sm:mr-5 mr-0">
        <Music />
      </motion.div>
    </div>
  );
};

export default LocationAndMusic;
