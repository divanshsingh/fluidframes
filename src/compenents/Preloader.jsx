import { motion } from 'framer-motion'
import { Power4 } from 'gsap'
import gsap from 'gsap/all'
import React, { useEffect, useState } from 'react'

const Preloader = ({setShowPeloader}) => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        let currentCount = 0;
        const loadingInterval = setInterval(() => {
            if(currentCount < 100){
                currentCount += 1
                setCount(currentCount)
            } else {
                clearInterval(loadingInterval)
                reveal()
            }
        }, 20);

        const reveal = ()=>{
            const tl = gsap.timeline({
                onComplete: ()=>{
                    setShowPeloader(false)
                }
            })

            tl.to(".loadingNumber", {
                opacity: 0,
                duration: 0.5,
                delay: 0.3

            }).to(".preLoader", {
                // y: "-100%",
                duration: 0.6,
                opacity: 0,
                ease: Power4
            })
        }
        return () => clearInterval(loadingInterval);
    }, [setShowPeloader])
  return (
    <div className='preLoader w-full h-screen bg-[#586572]' 
    >
        <div className='w-full h-full sm:relative flex flex-col-reverse justify-center items-center'>
            <div className="loadingText sm:absolute bottom-0 left-4">
                <h1 className='text-[#DDDDD5] font-walkway tracking-wider sm:text-[10vw] text-[11vw] font-bold'>CODESMITH</h1>
            </div>
            <div className='loadingNumber sm:absolute bottom-[12rem] left-[3rem]'>
      <h1 className='text-black font-walkway sm:text-7xl text-4xl font-bold'>{`${count}%`}</h1>
            </div>
        </div>
    </div>
  )
}

export default Preloader
