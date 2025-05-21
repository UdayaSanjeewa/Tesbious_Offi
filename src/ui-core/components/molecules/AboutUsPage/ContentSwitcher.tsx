import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../atoms/Button";
import Stroke from "../../atoms/Stroke";
import ContentSwitcherOneLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherOneLogo";
import ContentSwitcherTwoLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherTwoLogo";
import ContentSwitcherThreeLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherThreeLogo";
import ContentSwitcherFourLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherFourLogo";
import ContentSwitcherFiveLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherFiveLogo";
import ContentSwitcherSixLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherSixLogo";
import ContentSwitcherSevenLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherSevenLogo";
import ContentSwitcherEightLogo from "../../organisms/HomePage/AboutUs/ContentSwitcherEightLogo";

interface ContentProps {
  heading: string;
  type: string;
  image: string;
  paraOne: string;
  paraTwo: string;
}

interface ContentSwitcherProps {
  contentData: ContentProps[];
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({ contentData }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleSwitch = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + 1) % contentData.length);
  };

  return (
    <div className="overflow-hidden relative h-[300px] md:h-[450px] lg:h-[550px] w-full xl:h-[827px] ">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          className="absolute flex w-screen h-full"
          style={{
            backgroundImage: `url(${contentData[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
          transition={{ type: "tween", duration: 0.6 }}
        >
          <div className="xl:w-[652px] xl:pl-[5%] 2xl:ml-[150px]  md:pt-10 xl:pt-0 pl-[5%] 2xl:pl-0 xl:mt-[100px] capitalize flex flex-col gap-2">
            <h4 className="text-black sm:text-[10px] pt-5 xl:pt-0 md:text-[13px] lg:text-[15px] xl:text-[20px] font-[500] flex items-center gap-2 xl:gap-4">
              <div className="lg:flex sm:hidden">
                <Stroke colour="#4631ED" height="12px" width="12px"></Stroke>
              </div>
              <div className="lg:hidden">
                <Stroke colour="#4631ED" height="8px" width="8px"></Stroke>
              </div>
              {/* title */}
              {contentData[index].type}
            </h4>
            <div>
              <h2 className="xl:text-[50px] lg:text-[30px] lg:mt-5 lg:w-[500px] md:text-[25px] md:w-[400px] text-[18px] w-[300px] font-[600] text-black xl:w-[560px]">
                {/* heading */}
                {contentData[index].heading}
              </h2>
              <div className="text-gray-700 text-[10px] lg:text-[15px] w-[300px] lg:w-[500px] xl:w-auto md:w-[400px] md:text-[12px] xl:text-[19px] font-[400]">
                <p className="mt-4 ">{contentData[index].paraOne}</p>
                <p className="mt-2 ">{contentData[index].paraTwo}</p>
              </div>
            </div>
            <div className="lg:mt-[50px] flex items-center">
              <div className="hidden xl:flex gap-3">
                <Stroke colour="#4631ED" height="12px" width="12px"></Stroke>
                <Stroke colour="#4631ED" height="12px" width="45px"></Stroke>
              </div>
              <div className="flex md:hidden gap-2">
                <Stroke colour="#4631ED" height="8px" width="8px"></Stroke>
                <Stroke colour="#4631ED" height="8px" width="35px"></Stroke>
              </div>
              <div className="md:flex mt-[10px]  hidden xl:hidden gap-2">
                <Stroke colour="#4631ED" height="8px" width="8px"></Stroke>
                <Stroke colour="#4631ED" height="8px" width="35px"></Stroke>
              </div>
              <div className="hidden xl:flex ml-[200px] xl:gap-10">
                <Button onClick={() => handleSwitch(-1)}>
                  <ContentSwitcherOneLogo />
                </Button>
                <Button onClick={() => handleSwitch(1)}>
                  <ContentSwitcherTwoLogo />
                </Button>
              </div>

              <div className="sm:flex pl-20 md:hidden gap-2">
                <Button onClick={() => handleSwitch(-1)}>
                  <ContentSwitcherThreeLogo />
                </Button>
                <Button onClick={() => handleSwitch(1)}>
                  <ContentSwitcherFourLogo />
                </Button>
              </div>
              <div className="pl-20 md:flex mt-[10px] sm:hidden lg:hidden gap-2">
                <Button onClick={() => handleSwitch(-1)}>
                  <ContentSwitcherFiveLogo />
                </Button>
                <Button onClick={() => handleSwitch(1)}>
                  <ContentSwitcherSixLogo />
                </Button>
              </div>
              <div className="pl-40 lg:flex mt-[10px] sm:hidden xl:hidden gap-2">
                <Button onClick={() => handleSwitch(-1)}>
                  <ContentSwitcherSevenLogo />
                </Button>
                <Button onClick={() => handleSwitch(1)}>
                  <ContentSwitcherEightLogo />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContentSwitcher;
