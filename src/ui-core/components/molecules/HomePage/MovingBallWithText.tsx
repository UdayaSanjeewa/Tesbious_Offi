"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Icon } from "../../atoms/Icon";
import { useRouter } from "next/navigation";

interface MovingBallWithTextProps {
  text: string;
  routeLink:string;
  textClass?:string;
  xLength:number
  arrowClass?:string;
  arrSize?: number;
}



const MovingBallWithText: React.FC<MovingBallWithTextProps> = ({xLength,arrSize=20,routeLink,text,arrowClass,textClass}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()

  return (
    <button
      className={`relative flex items-center gap-2 xl:gap-4 sm:px-2 lg:px-4 xl:px-6 py-3 bg-transparent`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={()=>router.push(routeLink)}
    >
      <motion.div
        className="absolute left-0 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14 bg-[#6C63FF] rounded-full"
        initial={{ x: 0, scale: 1 }}
        animate={{
          x: isHovered ? xLength : 0,
          scale: isHovered ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <span className={`relative z-10  md:w-[100px] sm:text-[12px]  md:text-[14px] xl:text-[17px] xl:w-[130px] sm:w-[80px] ${textClass}`}>{text}</span>
      <Icon className={`z-10 relative ${arrowClass} transition-all duration-200`} icon={<FaArrowRight size = {arrSize}/>} />
    </button>
  );
}

export default MovingBallWithText;
