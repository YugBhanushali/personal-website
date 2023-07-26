"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";
import Loading from "./ui/Loading";
import SectionDivider from "./SectionDivider";
import { useMediaQuery } from "@chakra-ui/react";


const Contact = () => {

  const targetRef = React.useRef<HTMLDivElement | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)")[0];

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const scaleSection = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);

  const scaleForm = useTransform(scrollYProgress, [0, 0.5], [isMobile ? 1.1: 1.3, 1]);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSuccess(true);
          formRef?.current?.reset();
          setTimeout(() => {
            setIsSuccess(false);
          }, 4000);
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };
  return (
    <div ref={targetRef} id="contact" className="flex flex-col justify-center items-center mt-10">
      <motion.div
        style={{ opacity , scale: scaleSection}}
      >
        <SectionDivider 
          sectionName="Contact"
          className='rounded-[25px] hover:border-zinc-400 duration-300 ease-in mb-6'
        />
      </motion.div>

      <motion.div
        style={{ opacity , scale: scaleForm}}
      >
        <form
          className="flex flex-col items-center justify-center gap-y-3 mt-[100px]"
          onSubmit={onFormSubmit}
          ref={formRef}
        >
          <motion.input
            placeholder="Full Name"
            required
            type="text"
            id="name"
            className="bg-transparent px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px]"
            name="name"
          />

          <motion.input
            placeholder="Email"
            required
            type="email"
            id="email"
            className="bg-transparent px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px]"
            name="email"
          />

          <motion.input
            placeholder="Subject"
            required
            type="text"
            id="subject"
            className="bg-transparent px-5 py-2 w-[350px] border-[#27272A] border-[1.5px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px]"
            name="subject"
          />

          <motion.textarea
            placeholder="Feedback"
            required
            id="message"
            name="message"
            rows={5}
            className="bg-transparent px-5 py-2 w-[350px] border-[#27272A] border-[1px] rounded-md placeholder-gray-500 focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px]"
          ></motion.textarea>

          <motion.button
            type="submit"
            className="bg-[#28282a97] px-5 py-2 w-[350px] border-[#343437] border-[1px] rounded-md text-white focus:outline-[2px] focus:outline-[#27272A] focus:outline focus:outline-offset-[3px] hover:bg-[#27272A] hover:border-[#39393c] transition duration-300 ease-in-out"
          >
            {isLoading ? 
            <Loading/> : isSuccess ? "Sent!" : "Send"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
