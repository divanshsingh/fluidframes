import { motion } from "framer-motion";
import gsap from "gsap/all";
import React, { useState } from "react";

const Work = () => {
  const [elems, setElems] = useState([
    {
      heading: "Amaterasu -",
      subheading: "Frontier Health Innovation",
      videoUrl:
        "/media/videos/workvideo1.mp4",
    },
    {
      heading: "Columbia Pictures -",
      subheading: "Celebrating a Century of Cinema",
      videoUrl:
        "/media/videos/workvideo2.mp4",
    },
    {
      heading: "Cambium -",
      subheading: "Pioneer Substainble Solutions",
      videoUrl:
        "/media/videos/workvideo3.mp4",
    },
    {
      heading: "Studio D -",
      subheading: "Urban and Landscape Design",
      videoUrl:
        "/media/videos/workvideo4.mp4",
    },
  ]);
  return (
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-8 sm:px-[12rem] py-24">
        <div className="featured flex gap-4">
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
          <p>Featured Projects</p>
        </div>
        <div className="work sm:flex overflow-hidden">
          <motion.h1
              initial={{rotate: 20, y: "100%", opacity: 0}}
              whileInView={{rotate: 0, y: 0, opacity: 1}}
          transition={{ease: [0.22, 1, 0.36, 1], duration: .8}}
          viewport={{once: true}}
          className="text-7xl sm:text-[16rem] py-6 sm:py-30">Work</motion.h1>
          <p className="text-lg sm:pt-[22rem] sm:text-2xl">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years. <br />
            <span className="text-sm sm:pt-[22rem] sm:text-sm">
            Disclaimer: These are not rela projects, just for designing purpose.
              </span>
          </p>
        </div>
        <div className="elems mt-10 sm:flex sm:flex-wrap gap-[10rem]">
        {elems.map((elem, index)=>{
          return <div key={index} className={`elem w-full mb-10 ${index === 1 || index === 2 ? 'sm:mt-[25rem]' : ''} ${index === 1 || index === 2 ? 'sm:w-[37%]' : 'sm:w-[48%]'}`}>
<div
  className={`video w-full h-[104vw] overflow-hidden ${index === 1 || index === 2 ? 'sm:h-[32vw]' : 'sm:h-[50vw]'}`}
>
  <video
    muted
    loop
    className="w-full h-full object-cover block pointer-events-none sm:pointer-events-auto hover:opacity-100 cursor-pointer"
    src={elem.videoUrl}
    onMouseEnter={(e)=> e.currentTarget.play()}
    onMouseLeave={(e)=> e.currentTarget.pause()}
  ></video>
</div>
            <div className="elem-texts">
              <motion.span 
              initial={{rotate: 20, y: "100%", opacity: 0}}
              whileInView={{rotate: 0, y: 0, opacity: 1}}
              transition={{ease: [0.22, 1, 0.36, 1], duration: 1}}
              className="mt-2 flex gap-2 origin-left">
              <h3 className="font-semibold">{elem.heading}</h3>
              <p className="text-[#666666]">{elem.subheading}</p>
              </motion.span>
            </div>
          </div>
        })}
        </div>
      </div>
    </div>
  );
};

export default Work;
