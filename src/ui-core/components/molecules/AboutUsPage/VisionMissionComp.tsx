import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  imageSrc: string;
  heading: string;
  title: string;
  paraOne: string;
  paraTwo: string;
};

type VisioionMissionCompProps = {
  data: Card[];
};

const VisioionMissionComp: React.FC<VisioionMissionCompProps> = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  const handleDotClick = (i: number) => {
    setDirection(i > index ? "right" : "left");
    setIndex(i);
  };

  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col items-center mt-10 mb-20 relative">
      <div className="w-[350px] h-[400px] overflow-hidden relative rounded-[20px] border border-black">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full top-0 left-0"
          >
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover opacity-[12%] bg-center"
                style={{ backgroundImage: `url(${data[index].imageSrc})` }}
              />
              <div className="absolute inset-0 m-4">
                <div className="flex items-center gap-2">
                  <div className="w-[14px] h-[14px] bg-[#6329EC] rounded-full" />
                  <p className="text-[20px] font-[400] font-sans">
                    {data[index].heading}
                  </p>
                </div>
                <p className="font-sans text-[31px] font-[600]">
                  {data[index].title}
                </p>
                <p className="font-sans mt-2 text-[12px] font-[400] text-[#1C1C1EBF]">
                  {data[index].paraOne}
                </p>
                <p className="font-sans mt-2 text-[12px] font-[400] text-[#1C1C1EBF]">
                  {data[index].paraTwo}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex space-x-2">
        {data.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => handleDotClick(i)}
            className={`w-[12px] h-[12px] rounded-full ${
              i === index ? "bg-[#9747FF]" : "border border-[#747474]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default VisioionMissionComp;
