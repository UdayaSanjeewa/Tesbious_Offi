'use client'

import { motion } from "framer-motion";
import React, { MouseEventHandler, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Icon } from "../../atoms/Icon";

interface PortfolioContactUs {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PortfolioContactUs = ({
  onClick,
}: PortfolioContactUs) => {
  
      const [isHovered, setIsHovered] = useState(false);

     
      
    
  return (
    <div className="flex flex-col items-center justify-center text-center">
  <h1 className="mb-4 lg:text-[60px] font-semibold">We’d be interested in learning more <br /> about your project.</h1>
  
  <button
  onClick={onClick}
  className="hidden sm:flex items-center gap-4 px-6 py-3 text-white bg-transparent group relative"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <motion.div
    className="absolute left-0 w-14 h-14 bg-[#6C63FF] rounded-full"
    initial={{ x: 0, scale: 1 }}
    animate={{
      x: isHovered ? 133 : 0,
      scale: isHovered ? 0.6 : 1,
    }}
    transition={{ type: "spring", stiffness: 150, damping: 15 }}
  />
  <span className="relative z-10 text-black text-[20px] font-medium">Contact Us</span>
  <Icon
    className="z-10 relative text-black group-hover:text-white group-hover:translate-x-2 transition-all duration-300"
    icon={<FaArrowRight />}
  />
</button>
<button
      className="sm:hidden text-[20px] font-semibold text-white bg-black rounded-full px-7 py-2 transition-colors duration-300"
      onClick={onClick}
    >
      Contact
    </button>

</div>

  )
}

export default PortfolioContactUs
