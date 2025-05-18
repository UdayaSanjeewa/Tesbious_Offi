import React from "react";

interface GlowBoxProps {
  children: React.ReactNode;
  className?: string;
}

const GlowBox: React.FC<GlowBoxProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`relative xl:p-6 p-6 sm:p-5 bg-[#111827] text-white rounded-[32px] border-[2.5px] border-solid border-[rgba(108,99,255,0.5)]
      shadow-[inset_0px_0px_20px_-1px_rgba(108,99,255,0.5)] 
      hover:shadow-[0px_0px_50px_10px_rgba(108,99,255,0.9)] ${className}`}
    >
      {children}
    </div>
  );
};

export default GlowBox;
