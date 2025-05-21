import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Paragraph } from "../../atoms/Typography";
import StatCardLogo from "../../organisms/HomePage/StaticSections/StatCardLogo";

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const numericValue = parseInt(number.replace(/\D/g, ""), 10); 

  useEffect(() => {
    if (inView) {
      let current = 0;
      const duration = 800; 
      const frameRate = 60;
      const totalFrames = duration / frameRate;
      const increment = numericValue / totalFrames;

      const counter = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(counter);
        }
        setDisplayedNumber(Math.floor(current));
      }, frameRate);
    }
  }, [inView, numericValue]);

  return (
    <div ref={ref} className="text-center flex flex-col leading-[1.2]">
      <Paragraph
        className="xl:text-[100px] md:text-[80px] text-[65px] font-[800] text-outline text-white"
        text={`${displayedNumber}+`}
      />
      <div className="flex items-center justify-center flex-col">
        <Paragraph
          className="text-[#413F3FBF] md:text-[25px] font-[400] text-[20px] xl:text-[28px]"
          text={label}
        />
        <StatCardLogo />
      </div>
    </div>
  );
};

export default StatCard;
