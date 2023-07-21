'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../public/PW-logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // State to keep track of whether the logo is clicked or not
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [onTransitionEnd, setOnTransitionEnd] = useState(false);

  // Click handler for the logo image
  const handleLogoClick = () => {
    setIsLogoClicked(!isLogoClicked);
  };

  const handleTransitionEnd = () => {
    if(isLogoClicked){
      setOnTransitionEnd(true);
    }
  }

  const handleAnimationStart = () => {
    if(!isLogoClicked){
      setOnTransitionEnd(false);
    }
  }

  return (
    <div className='flex sticky top-0 items-center justify-center bg-white bg-opacity-[0.02] backdrop-blur-[3px] py-2 z-30 gap-x-[70px] font-bold'>
      <div>
        <Link href='/'>
          <motion.div
            onAnimationStart={handleAnimationStart}
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: isLogoClicked ? 0 : 1,
              x: isLogoClicked ? 280 : 0, // Move to the left when logo is clicked
            }}
            transition={{ duration: 1 }}
            onAnimationComplete={handleTransitionEnd}
            style={{ display: onTransitionEnd ? "none" :"block"}}
          >
            Home
          </motion.div>
        </Link>
      </div>

      <div>
        <Link href='#projects'>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: isLogoClicked ? 0 : 1,
              x: isLogoClicked ? 100 : 0, // Move to the left when logo is clicked
            }}
            transition={{ duration: 0.6 }}
            style={{ display: onTransitionEnd ? "none" :"block"}}
          >
            Projects
          </motion.div>
        </Link>
      </div>

      <motion.div
        onClick={handleLogoClick}
        initial={{ rotate: 0 }}
        animate={{ rotate: isLogoClicked ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ cursor: 'pointer' }}
      >
        <Image src={logo} alt='Picture of the author' width={50} height={50} />
      </motion.div>

      <div>
        <Link href='/about'>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: isLogoClicked ? 0 : 1,
              x: isLogoClicked ? -100 : 0, // Move to the right when logo is clicked
            }}
            transition={{ duration: 0.6 }}
            style={{ display: onTransitionEnd ? "none" :"block"}}
          >
            About
          </motion.div>
        </Link>
      </div>

      <div>
        <Link href='/contact'>
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            animate={{
              opacity: isLogoClicked ? 0 : 1,
              x: isLogoClicked ? -280 : 0, // Move to the right when logo is clicked
            }}
            transition={{ duration: 1 }}
            style={{ display: onTransitionEnd ? "none" :"block"}}
          >
            Contact
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
