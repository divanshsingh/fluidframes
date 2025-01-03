import { motion } from 'framer-motion'
import { Power4 } from 'gsap'
import React from 'react'

const Landing = () => {
  return (
    <div className='relative w-full h-[150vh] sm:h-[250vh]'>
      <div className='picture w-full h-full overflow-hidden'>
        <img data-scroll data-scroll-speed="-1" className='w-full h-full object-cover' src="/media/images/herobanner.jpg" alt="exoape" />
      </div>
      <div className='w-full absolute top-0 px-8 sm:px-28'>
      <div className='landing-text max-w-screen-2xl mx-auto h-full'>
      </div>
        <div className='landing-top-para font-light text-lg sm:text-2xl text-white sm:mt-[27.5rem] mt-[20rem]'>
          {[
            "Global digital design studio specializing",
            "in impactful designs delivering seamless",
            "functionality and crafting scalable",
            "solutions."
          ].map((item, index)=>{
            return <p key={index} className='overflow-hidden'>
            <motion.span 
            initial={{rotate: 20, y: "100%", opacity: 0}}
            animate={{rotate: 0, y: 0, opacity: 1}}
            transition={{ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: index*.1}}
            className='origin-left inline-block'>
            {item}
              </motion.span> 
            </p>
          })}
        </div>
        <div className='landing-headings text-white font-hatton font-bold mt-7 sm:mt-24 sm:mb-24'>
          {[
            "Design", "Functionality", "Scalibility"
          ].map((item, index)=>{
            return <h1 key={index} className='text-6xl sm:text-[14vw] overflow-hidden leading-[1.15]'>
              <motion.span 
              initial={{rotate: 20, y: "100%", opacity: 0}}
              animate={{rotate: 0, y: 0, opacity: 1}}
              transition={{ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: index*.1}}
              className='inline-block origin-left'>
              {item}
                </motion.span>
              </h1>
          })}
        </div>
        <div className='landing-bottom-para font-light text-lg sm:text-2xl text-white sm:w-[30rem]'>
            <p className='mt-20 mb-6 sm:mt-30 sm:mb-20'>
            We empower experience-focused companies to excel by bringing their brand and product's essence to life in the digital space. Memorable journeys begin with a click.
            </p>
            <a href="https://github.com/divanshsingh?tab=repositories" className='border-b-[1px] border-white sm:text-lg mt-10 hover:border-none'>The Repos</a>
        </div>
      </div>
    </div>
  )
}

export default Landing
