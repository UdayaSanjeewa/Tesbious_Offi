import { motion } from "framer-motion";
import Image from "next/image";

const BeyondTheFuture = () => {
  return (
    <div className="overflow-hidden w-screen flex items-center text-white">
      <motion.div
        className="flex flex-nowrap gap-[50px] items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-row gap-[50px] items-center">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex flex-row gap-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] items-center"
              >
                <p className="ml-[50px]  font-[700] tracking-[5px] text-outline text-white font-lexend">
                  Beyond
                </p>
                <p className=" font-[700] tracking-[5px] text-outline text-white font-lexend">
                  The
                </p>
                <p className=" font-[700] tracking-[5px] text-outline text-white font-lexend">
                  Future
                </p>
                <Image
                  src="/images/planet.svg"
                  alt="planet"
                  width={80}
                  height={80}
                  className="opacity-90 mr-[50px]"
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BeyondTheFuture;
