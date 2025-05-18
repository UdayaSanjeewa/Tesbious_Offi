// PortfolioProjectCard.tsx

import React, { MouseEventHandler, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Icon } from "../atoms/Icon";
import PortfolioImage from "../atoms/PortfolioImage";
import { motion } from "framer-motion";
import Button from "../atoms/Button";
import { div } from "framer-motion/client";


// Define motion variants
const fadeSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeOnly = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface PortfolioProjectCardProps {
  imageSrc: string;
  topic: string;
  paragraph: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PortfolioProjectCard = ({
  imageSrc,
  paragraph,
  topic,
  onClick,
}: PortfolioProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);


  const [seeMoreClicked, setSeeMoreClicked] = useState(false);

  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block">
        <Button onClick={onClick}>
          <div className="bg-[#111827] rounded-[26px]  group cursor-pointer">
            <div className="sm:relative sm:inset-0">
              <PortfolioImage src={imageSrc} className="mx-4 my-3 w-full" />
            </div>

            <div className="flex flex-row">
              <div className="ml-[5%]">
                <h1 className="text-white text-[30px] font-bold group-hover:text-[#6D4AFE] transition-all duration-300 text-left">
                  {topic}
                </h1>
                <p className="text-[#FFFFFFBF] text-[14px] font-medium mt-4 mb-10 text-left">
                  {paragraph}
                </p>
              </div>
              <div
                className="flex items-center gap-4 px-6 py-3 text-white bg-transparent opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 mt-[12%]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Icon
                  className="bg-[#6C63FF] rounded-full p-5"
                  icon={<FaArrowRight />}
                />
              </div>
            </div>
          </div>
        </Button>
      </div>
      
{/* MOBILE */}
      <motion.div className="relative w-full sm:hidden block">
    {/* Overlay (fades in with opacity) */}
    <motion.div
      className="absolute inset-0 [background-color:#00000033] z-10"
      variants={fadeOnly} // Uses fade animation only
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    />

    {/* Animated Text (Slides up) */}
    <motion.div
      className="absolute top-[40%] left-4 z-20 text-white ml-8 mr-20"
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h1 className="text-[35px] font-bold">{topic}</h1>
      <p className="text-[12px] font-medium mt-2">{paragraph}</p>
    </motion.div>

    {/* Button (fades in later, with delay) */}
    <motion.div
      className="absolute top-[55%] left-4 z-20 ml-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
    >
       <button
            className={`rounded-full px-6 py-2 font-medium text-[14px] mt-[85%] transition-colors duration-300 ${
              seeMoreClicked ? 'bg-[#6C63FF] text-white' : 'bg-white text-black'
            }`}
             onClick={onClick}
          >
            See More
          </button>
    </motion.div>

    {/* Background Image */}
    <PortfolioImage
      src="/images/projectImgMobile.png"
      className="w-full h-full object-cover"
    />
  </motion.div>
    </div>
  );
};

export default PortfolioProjectCard;
