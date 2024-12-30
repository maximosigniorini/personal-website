"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Photo = () => {

  const [isHovered, setIsHovered] = useState(false);  

  return (
    <div className="w-full h-full relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: 'easeIn' } }}>

        {/* image */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: 'easeInOut' } }}

          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
            
          <Image
            src={isHovered ? "/assets/hover.png" : "/assets/profile.png"}
            priority
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="profile"
            className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            fill="transparent"
            stroke="#F9ED69"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="0 1570"
            initial={{ strokeDashoffset: 1570 }}
            animate={{ strokeDashoffset: [1570, 0], rotate: [0, 360] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              strokeDasharray: "1600",
              pathLength: 1,
            }}
          />
        </motion.svg>


      </motion.div>
    </div>
  )
}

export default Photo