import { motion } from 'framer-motion';
import { Power4 } from 'gsap';
import React from 'react'
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='fixed w-full z-[999]'>
    <div className='max-w-screen-2xl mx-auto px-8 sm:px-14 py-8 sm:py-12 flex items-center justify-between text-white'>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ease: Power4.easeInOut, duration: 1}}
      className='logo'>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="50pt"
          height="20pt"
          viewBox="0 0 197.000000 78.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,78.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M40 361 l0 -351 203 0 c218 0 276 9 365 54 61 32 125 98 154 161 19
42 23 67 23 156 0 98 -2 110 -30 164 -35 69 -92 117 -168 141 -41 14 -103 18
-299 22 l-248 4 0 -351z m380 206 c45 -22 64 -80 64 -192 1 -159 -40 -235
-125 -235 l-39 0 0 220 0 220 38 0 c20 0 48 -6 62 -13z"
            />
            <path
              d="M840 360 l0 -350 140 0 140 0 0 140 0 140 65 0 65 0 0 -140 0 -140
140 0 140 0 0 350 0 350 -140 0 -140 0 0 -140 0 -140 -65 0 -65 0 0 140 0 140
-140 0 -140 0 0 -350z"
            />
            <path
              d="M1701 364 c-47 -39 -42 -70 35 -204 36 -63 75 -123 86 -133 51 -43
138 -3 138 65 0 37 -117 251 -154 280 -30 25 -70 22 -105 -8z"
            />
            <path
              d="M1575 155 c-35 -34 -33 -78 4 -116 36 -36 79 -38 115 -7 40 35 43 78
11 116 -35 42 -93 45 -130 7z"
            />
          </g>
        </svg>
      </motion.div>
      <motion.span 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ease: Power4.easeInOut, duration: .7}}
      className='sm:hidden text-2xl'>
      <IoMenuOutline />
      </motion.span>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ease: Power4.easeInOut, duration: .7}}
      className='hidden sm:flex gap-9'>
        {[
          {
            anchorText: "Work",
            url: "https://github.com/divanshsingh?tab=repositories"
          },
          {
            anchorText: "Experience",
            url: "https://www.linkedin.com/in/divansh-singh-16053b258/"
          },
          {
            anchorText: "Blogs",
            url: "https://medium.com/@divanshsingh1612"
          },
          {
            anchorText: "Contact",
            url: "mailto:divanshsingh1612@gmail.com"
          }].map((item, index)=> {
          return <motion.a 
          href={item.url}
          key={index} 
          className='text-sm font-helvetica relative cursor-pointer' 
          whileHover="hover"
          >{item.anchorText}
          <motion.span 
          className='block absolute h-[1px] bg-white bottom-0 left-0'
          variants={{
            hover: {width: "100%"}
          }}
          />
          </motion.a>})}
      </motion.div>
    </div>
    </div>
  )
}

export default Navbar
