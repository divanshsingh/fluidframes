import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[70vh] sm:h-[100vh] bg-black">
      <div className="w-full h-full flex flex-col px-8 sm:px-28 text-[#8f8277]">
        <div className="w-full lg:w-[30%] h-[70%] sm:h-[70vh] pt-[4.5rem] pb-[1rem]">
          <h1 className="text-7xl sm:text-9xl mb-8 text-[#E0CCBB]">
            Our <br />
            Story
          </h1>
          <p className="text-2xl mb-4">
            The story behind this website is to learn and show case my animation skills.
          </p>
          <a className="border-b-[1px] border-[#8f8277] sm:text-lg text-[#E0CCBB]" href="https://exoape.com/">
            Reference From
          </a>
        </div>
        <div className="w-full h-[30%] sm:h-[30%] flex gap-20 border-t-[1px] border-[#8f8277] pb-[2rem] pt-[1rem]">
          <div className="flex flex-col items-center justify-between">
            {["Work", "Studio", "News", "Contact"].map((item, index)=>{
           return <motion.a 
           className="relative"
           key={index} href="#" 
           whileHover="hover"
           >{item}
           <motion.span 
           className='block h-[1px] bg-[#8f8277] absolute bottom-0 left-0'
           variants={{
            hover: {width: "100%"}
          }}
          transition={{ease: [0.22, 1, 0.36, 1], duration: .8}}
           />
           </motion.a>
            })}
          </div>
          <div className="flex flex-col items-center justify-between">
          {["Medium", "Github", "Twitter", "Instagram"].map((item, index)=>{
           return <motion.a 
           key={index} 
           href="#"
           className="relative"
           whileHover="hover"
           >{item}
           <motion.span 
           className="block h-[1px] bg-[#8f8277] absolute bottom-0 left-0"
           variants={{
            hover: {width: "100%"},
            afterHover: {transform: "translateX(100%)"}
           }}
           />
           </motion.a>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
