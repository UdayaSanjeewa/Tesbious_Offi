"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCardMobile from "./ProjectCardMobile";

type Project = {
  imageSrc: string;
  category: string;
  title: string;
  link: string;
};

type AutoSliderProps = {
  projects: Project[];
};

const directions = [
  { x: "-3%", y: "-3%" }, // top-left
  { x: "3%", y: "3%" }, // top-right
  { x: "3%", y: "-3%" }, // bottom-right
  { x: "-3%", y: "3%" }, // bottom-left
];

const AutoSliderMobile: React.FC<AutoSliderProps> = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const [directionIndex, setDirectionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
      setDirectionIndex((prev) => (prev + 1) % directions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="relative h-[450px] overflow-hidden">
      <div className="w-[320px] h-[400px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{
              opacity: 0.5,
              x: directions[directionIndex].x,
              y: directions[directionIndex].y,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute w-full h-full"
          >
            <ProjectCardMobile {...projects[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="absolute mt-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`w-[12px] h-[12px] rounded-full ${
              i === index ? "bg-[#9747FF]" : "border border-[#747474]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSliderMobile;
