import React, { MouseEventHandler } from "react";
import { Icon } from "../../atoms/Icon";
import { GoArrowUpRight } from "react-icons/go";
import { Paragraph } from "../../atoms/Typography";
import Button from "../../atoms/Button";
import { useState } from "react";
import { motion } from "framer-motion";

interface ServiceSectionProps {
  number: string;
  title: string;
  paragraph: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ServiceSections: React.FC<ServiceSectionProps> = ({
  number,
  title,
  paragraph,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Button onClick={onClick} classNameStyles="sm:w-[600px] lg:w-[900px] xl:w-[1218px] xl:h-[199px]">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-full flex group sm:gap-8 xl:gap-28  items-center"
      >
        <Paragraph
          text={number}
          className="xl:w-[145px] xl:h-[145px] text-white text-[80px] xl:text-[120px] group-hover:text-[#7F00FF] font-[800]"
        />
        <div className="w-[973px] border-b-[1px] text-left group-hover:border-b-[#7F00FF] sm:h-[150px] md:h-[160px] lg:h-[170px] xl:h-[199px] flex justify-between items-center">
          <div className="flex flex-col">
            <Paragraph
              text={title}
              className="xl:h-[38px] lg:text-[25px] sm:text-[20px] xl:text-[28px] font-[700] text-white group-hover:text-[#7F00FF]"
            />
            <Paragraph
              text={paragraph}
              className="sm:w-[400px] lg:w-[450px] xl:w-[477px] pt-[20px] xl:h-[90px] sm:text-[14px] xl:text-[16px] font-[500] text-white opacity-70"
            />
          </div>
          <motion.div
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: hovered ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-10 lg:hidden"
          >
            <Icon
              className="text-white group-hover:text-[#7F00FF]"
              icon={<GoArrowUpRight size={24} />}
            />
          </motion.div>
          <motion.div
            initial={{
              rotate: 0,
            }}
            animate={{
              rotate: hovered ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex mt-10"
          >
            <Icon
              className="text-white group-hover:text-[#7F00FF]"
              icon={<GoArrowUpRight size={30} />}
            />
          </motion.div>
        </div>
      </div>
    </Button>
  );
};

export default ServiceSections;
