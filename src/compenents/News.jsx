import { delay, motion } from 'framer-motion'
import React from 'react'

const News = () => {
  return (
    <div className='w-full bg-white'>
        <div className='flex flex-col items-center justify-between px-8 sm:px-28'>

       <div className="work w-full flex items-center justify-center gap-2 pt-20 sm:pt-[4rem]">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <p>In the media</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='text-[5.5rem] text-center leading-none sm:text-[10rem] pt-6 sm:py-30'>
            <motion.span 
              initial={{rotate: 20, y: "100%", opacity: 0}}
              whileInView={{rotate: 0, y: 0, opacity: 1}}
              transition={{ease: [0.22, 1, 0.36, 1]}}
              viewport={{once: true}}
              className='inline-block origin-left'> Spread</motion.span>
                </h1>
            <h1 className='text-[5.5rem] text-center leading-none sm:text-[10rem] pt-6 sm:py-30'>
            <motion.span 
              initial={{rotate: 20, y: "100%", opacity: 0}}
              whileInView={{rotate: 0, y: 0, opacity: 1}}
              transition={{ease: [0.22, 1, 0.36, 1], duration: 1}}
              viewport={{once: true}}
              className='inline-block origin-left'> the News</motion.span>
              </h1>
        </div>
        <div className='w-[70%] pt-8 flex flex-col items-center justify-center pb-20'>
            <p className='text-center text-xl'>Find out more about my work one these leading design and technology platform</p>
            <a href="https://dh-virid.vercel.app/" className='border-b-[1px] border-black sm:text-lg mt-10'>Scroll my portfolio</a>
        </div>
        </div>
    </div>
  )
}

export default News
