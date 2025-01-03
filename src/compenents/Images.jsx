import gsap, { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Images = () => {

    const firstElem = useRef(null);
    const secondElem = useRef(null);
    const thirdElem = useRef(null);
    const lastElem = useRef(null);

    useEffect(()=>{
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "15% center",
                scrub: true
            }
        });
        tl.to(firstElem.current, {
            x: "40%",
            ease: [0.33, 1, 0.68, 1]
        }, 'a')
        .to(secondElem.current, {
            x: "-20%",
            ease: [0.33, 1, 0.68, 1]
        }, 'a')
        .to(thirdElem.current, {
            x: "-60%",
            ease: [0.33, 1, 0.68, 1]
        }, 'a')
        .to(lastElem.current, {
            x: "50%",
            ease: [0.33, 1, 0.68, 1]
        }, 'a')
    })
  return (
    <div ref={parent} className='w-full h-[70vh] sm:h-[180vh] bg-white flex justify-center items-center overflow-hidden sm:pb-20'>
        <div className='w-[35.73vw] h-[60.26vw] sm:w-[26vw] sm:h-[44.375vw] relative'>
            <div ref={firstElem} className='absolute h-[23vw] left-[32vw] top-[6vw] w-[16vw] sm:h-[18vw] sm:w-[12vw] sm:left-[22vw] sm:top-[6vw]'>
                <img className='w-full h-full object-cover' src="/media/images/spreadimg1.webp" alt="" />
            </div>
            <div ref={secondElem} className='absolute w-[35.2vw] h-[20vw] top-[23vw] left-[-27vw] sm:h-[15vw] sm:w-[28vw] sm:left-[-24vw] sm:top-[15vw]'>
                <video autoPlay muted loop playsInline src="/media/videos/spreadvid1.mp4" className='w-full h-full object-cover'></video>
            </div>
            <div ref={thirdElem} className='absolute h-[24vw] left-[-30vw] top-[55vw] w-[35vw] sm:h-[17vw] sm:w-[26vw] sm:left-[-22vw] sm:top-[40vw]'>
                <img src="/media/images/spreadimg2.webp" className='w-full h-full object-cover' alt="" />
            </div>
            <div ref={lastElem} className='absolute h-[35.73vw] right-[-30vw] top-[55vw] w-[35.2vw] sm:h-[26vw] sm:w-[26vw] sm:left-[22vw] sm:top-[40vw]'>
                <video autoPlay muted loop playsInline src="/media/videos/spreadvid2.mp4" className='w-full h-full object-cover'></video>
            </div>
            <img className='w-full h-full object-cover' src="/media/images/spreadimgmain.webp" alt="" />
        </div>
    </div>
  )
}

export default Images
