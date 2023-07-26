"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../public/PW-logo.png";
import Image from "next/image";
import Link from "next/link";
import { position, transition,useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  // State to keep track of whether the logo is clicked or not
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [isLogoClickedMobile, setIsLogoClickedMobile] = useState(false);
  const [onTransitionEnd, setOnTransitionEnd] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)")[0];

  const handleTransitionEnd = () => {
    if (isLogoClicked) {
      setOnTransitionEnd(true);
    }
  };

  const handleAnimationStart = () => {
    if (!isLogoClicked) {
      setOnTransitionEnd(false);
    }
  };

  const handleScrollToDiv = (idOfDiv: string) => {
    const divElement = document.getElementById(idOfDiv);
    divElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const IconVariant = {
    intial:{
      rotate:0
    },
    open:{
      rotate:360,
      transition:{
        duration: 0.8
      }
    },
    close:{
      rotate : 0,
      transition:{
        duration: 0.8
      }
    },
  }

  const NavBarVarient = {
    opened: {
      top: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.6,
      },
    },
    closed: {
      top :-200,
      transition: {
        when: "afterChildren",
      }
    },
  };

  const NavBarChildVarient = {
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
      ease: "easeInOut",
    },
    closed: {
      opacity: 0,
      y: -200,
      transition: {
        duration: 0.3,
      },
      ease: "easeInOut",
    },
  };


  return (
    <>
      {isMobile ? (
        // Mobile
        <div
            id="home"
            className={`flex flex-col sticky top-0 items-center py-2 font-bold z-40 bg-gray-700 bg-opacity-[0.1] h-[60px] duration-800 ease-in backdrop-blur-md`}
        >
                {/* logo */}
                <div
                >
                  <motion.div
                    initial={false}
                    animate={isLogoClickedMobile ? "open" : "close"}
                    variants={IconVariant}
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={logo}
                      alt="Picture of the author"
                      width={50}
                      height={50}
                      onClick={() => {
                        setIsLogoClickedMobile(!isLogoClickedMobile);
                      }}
                    />
                  </motion.div>
                </div>

                {/* links */}
                <motion.div
                  initial={false}
                  animate={isLogoClickedMobile ? "opened" : "closed"}
                  variants={NavBarVarient}
                  className="flex relative flex-col justify-center items-center my-1 gap-y-3 w-full bg-[white] bg-opacity-[0.1] backdrop-blur-[50px] py-4"
                >   
                  <motion.div
                    variants={NavBarChildVarient}
                    style={{ cursor: "pointer" ,background:'transparent'}}
                    onClick={() => {
                      handleScrollToDiv("projects");
                      setIsLogoClickedMobile(!isLogoClickedMobile);
                    }}
                  >
                    Projects
                  </motion.div>

                  <motion.div
                    variants={NavBarChildVarient}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleScrollToDiv("about");
                      setIsLogoClickedMobile(!isLogoClickedMobile)
                    }}
                  >
                    About
                  </motion.div>

                  <motion.div
                    variants={NavBarChildVarient}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleScrollToDiv("contact");
                      setIsLogoClickedMobile(!isLogoClickedMobile)
                      
                    }}
                  >
                    Contact
                  </motion.div>
                </motion.div>
        </div>
      ) : (
        // Desktop
        <div
          id="home"
          className="flex sticky top-0 items-center justify-center bg-white bg-opacity-[0.02] backdrop-blur-[3px] py-2 z-30 gap-x-[70px] font-bold"
        >
          <div>
            <motion.div
              onAnimationStart={handleAnimationStart}
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: isLogoClicked ? 0 : 1,
                x: isLogoClicked ? 280 : 0, // Move to the left when logo is clicked
              }}
              transition={{ duration: 1 }}
              onAnimationComplete={handleTransitionEnd}
              style={{
                display: onTransitionEnd ? "none" : "block",
                cursor: "pointer",
              }}
              onClick={() => {
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: isLogoClicked ? 0 : 1,
                x: isLogoClicked ? 100 : 0, // Move to the left when logo is clicked
              }}
              transition={{ duration: 0.6 }}
              style={{
                display: onTransitionEnd ? "none" : "block",
                cursor: "pointer",
              }}
              onClick={() => {
                handleScrollToDiv("projects");
              }}
            >
              Projects
            </motion.div>
          </div>

          <motion.div
            onClick={() => {
              setIsLogoClicked(!isLogoClicked);
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: isLogoClicked ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={logo}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: isLogoClicked ? 0 : 1,
                x: isLogoClicked ? -100 : 0, // Move to the right when logo is clicked
              }}
              transition={{ duration: 0.6 }}
              style={{
                display: onTransitionEnd ? "none" : "block",
                cursor: "pointer",
              }}
              onClick={() => {
                handleScrollToDiv("about");
              }}
            >
              About
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{
                opacity: isLogoClicked ? 0 : 1,
                x: isLogoClicked ? -280 : 0, // Move to the right when logo is clicked
              }}
              transition={{ duration: 1 }}
              style={{
                display: onTransitionEnd ? "none" : "block",
                cursor: "pointer",
              }}
              onClick={() => {
                handleScrollToDiv("contact");
              }}
            >
              Contact
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
