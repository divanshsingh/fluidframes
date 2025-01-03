import { Power4 } from 'gsap'
import gsap, { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Playreel = () => {
  const parent = useRef(null)
  const video = useRef(null)
  const playreel = useRef(null)
  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        start: "top 0",
        pin: true,
        scrub: 1,
      }
    })
    tl.to(video.current, {
      width: "100%",
      height: "100%",
      ease: [0.33, 1, 0.68, 1],
    }, "a")
    .to(playreel.current, {
      gap: "2rem",
      ease: [0.33, 1, 0.68, 1]
    }, "a")
  }, [])
  return (
    <div ref={parent} className='w-full h-screen overflow-hidden relative bg-black'>
        <div ref={video} className='w-48 sm:w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-video absolute'>
        <video autoPlay muted loop className='w-full h-full object-cover scale-[1.1]' src="/media/videos/playreelvideo.mp4"></video>
        </div>
        <div className='w-full h-full absolute bg-black opacity-50'></div>
        <div className='overlay absolute flex flex-col justify-between w-full h-full px-8 sm:px-28 text-white sm:text-[#DDDDD5]'>
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
          <p>Work in motion</p>
        </div>
            <h1 ref={playreel} className='playreel w-full flex items-center justify-center gap-[7rem] sm:gap-[40rem] font-[280] sm:font-[350]'>
                <div className='text-[4rem] sm:text-[10rem]'>Play</div>
                <div className='text-[4rem] sm:text-[10rem]'>Reel</div>
            </h1>
            <div className='w-full sm:w-[25%] sm:mx-auto bottom-24 text-[0.9rem] pb-20 sm:pb-10'>
                <p className='text-center'>Our work is best experienced in motion. Don't forget to be creative.</p>
            </div>
        </div>
    </div>
  )
}

export default Playreel
