import React from "react";
import { Heading } from "../../atoms/Typography";

function OurPortfolioTItle() {
  return (
    <div className="pt-[20px] lg:pb-[60px]">
      <Heading
        text="Some Recent Project We Successfully Done"
        className="sm:text-[35px] md:text-[48px] lg:text-[60px] text-[28px] h-[120px] lg:w-[742px] lg:h-[162px] font-[600] text-black"
      />
    </div>
  );
}

export default OurPortfolioTItle;
