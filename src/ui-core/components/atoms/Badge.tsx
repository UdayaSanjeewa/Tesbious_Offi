import React from "react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="sm:w-[30px] lg:text-[20px] sm:h-[30px] sm:text-[12px] lg:w-[50px] lg:h-[50px] xl:w-[76px] xl:h-[76px] bg-[#BFBAE8] rounded-[38px] flex items-center justify-center text-[#000000] xl:text-[30px] font-[700]">
      {text}
    </div>
  );
};

export default Badge;
