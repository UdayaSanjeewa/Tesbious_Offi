"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight} from "lucide-react";

interface AnimatedButtonProps {
  href: string;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ href, className }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className={`relative flex sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[103px] lg:h-[103px] xl:w-[120px] xl:h-[120px] rounded-full border-[#111827BF] text-white hover:border-hidden border-4 hover:bg-[#6D4AFE] transition-all duration-[1000ms] shadow-lg ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <div className="w-[20px] text-[13px] lg:mt-[30px] text-white sm:mt-[14px] sm:ml-[10px] md:mt-[20px] md:ml-[14px] xl:mt-[36px] lg:ml-[26px] xl:text-[17px]">
            <p>Our Work</p>
        </div>
    
      <motion.div
        initial={{ opacity: 1, scale: 1, rotate: 0, top: "50%", left: "50%" }}
        animate={{
          scale: hovered ? 1 : 1,
          rotate: hovered ? 45 : 0,
          top: hovered ? "50%" : "0%",
          left: hovered ? "80%" : "0%",
          right: hovered? "0%" : "0%", 
          bottom: hovered? "0%" : "0%",
          color: hovered? "#FFFFFFFF" : "#111827BF",
          x: hovered ? "-50%" : "0", 
          y: hovered ? "-50%" : "0", 
        }}
        transition={{ duration: 0.3 }}
        className="absolute flex items-center justify-center"
      > 
        <ArrowUpRight className="sm:h-7 sm:w-7  md:h-8 md:w-8  lg:h-9 lg:w-9   xl:w-10 xl:h-10" />
      </motion.div>

      
    </a>
  );
};

export default AnimatedButton;
