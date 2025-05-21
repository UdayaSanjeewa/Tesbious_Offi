'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Comment = {
  name: string;
  title: string;
  image: string;
  message: string;
};

type CommentsCardMobileProps = {
  comments: Comment[];
};

export default function CommentsCardMobile({ comments }: CommentsCardMobileProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % comments.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [comments.length]);

  const current = comments[index];

  return (
    <div className="h-[270px] relative items-center  flex flex-col rounded-2xl">
      {/* Glow Layers */}
      <div
        className="w-[310px] absolute bg-white drop-shadow-2xl h-[70px] rounded-2xl"
        style={{ boxShadow: "0px 0px 84.4px 0px rgba(151, 71, 255, 0.12)" }}
      />
      <div className="h-[250px] mt-4 relative items-center flex flex-col rounded-2xl">
        <div
          className="w-[330px] absolute bg-white shadow-2xl drop-shadow-2xl h-[70px] rounded-2xl"
          style={{ boxShadow: "0px 0px 84.4px 0px rgba(151, 71, 255, 0.12)" }}
        />

        {/* Card Content */}
        <div
          className="relative bg-white mt-5 p-6 shadow-2xl drop-shadow-2xl rounded-2xl  w-[350px] h-[220px]"
          style={{ boxShadow: "0px 0px 84.4px 0px rgba(151, 71, 255, 0.12)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center w-[300px]  space-x-4 mb-4">
                <img src="/images/code.png" alt="Elon Musk" className="rounded-full h-[46px] w-[46]" />
                <div>
                  <h3 className="text-[14px] font-[600]">Elon Musk</h3>
                  <p className="text-[10px] font-[400]">Senior Shitposter</p>
                </div>
              </div>
              <p className="text-[13px] font-[400]">"These Cards Are Amazing, I Want To Use Them In My Project. Framer Motion Is A Godsend Ngl Tbh Fam 🙏"</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
