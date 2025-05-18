'use client'
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Paragraph } from "../../atoms/Typography";

interface StatCardMobileProps {
  number: string;
  label: string;
}

const StatCardMobile:React.FC<StatCardMobileProps> = ({ number, label }) => {

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
        <div className="flex flex-col ml-10 h-[130px]">
                <div ref={ref} >
                  <Paragraph
                    className="text-[64px] font-400 font-sans"
                    text={`${displayedNumber}+`}/>
                </div>
                <div>
                    <p className="text-[24px] font-400 font-sans">{label}</p>
                </div>

        </div>
     );
}
 
export default StatCardMobile;