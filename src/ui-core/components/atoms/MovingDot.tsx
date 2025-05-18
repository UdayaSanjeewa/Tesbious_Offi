"use client";

import { motion } from "framer-motion";
import React from "react";

const MovingDot = () => {
  return (
    <div className="flex w-full items-center justify-center z-10 absolute">
    <div className="flex items-center justify-center h-[100px] w-[100px] bg-white  rounded-[100px]">
      <div className="relative flex gap-6 p-4 bg-transparent">
        <div className="w-[32px] h-[51px] rounded-full border-2 border-[#0D1717BF] flex items-center justify-center relative">
          <motion.div
            className="w-2 h-2 rounded-full bg-[#0D1717BF]"
            animate={{
              y: [0, -10, 10, 0], // Moves up and down in sequence
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovingDot;
