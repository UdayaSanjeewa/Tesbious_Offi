import React from "react";
import QuoteIcon from "../../atoms/QuoteIcon";
import { Paragraph } from "../../atoms/Typography";

interface TestimonialContentProps {
  quote: string;
  borderCol: string;
}

const ClientContent: React.FC<TestimonialContentProps> = ({
  quote,
  borderCol,
}) => {
  return (
    <div className="mb-[40px]">
      <QuoteIcon />
      <div className="lg:w-auto ">
        <Paragraph
          className={`text-[#7e7b7b]  text-[10px] border-l-1  border-[${borderCol}] xl:text-[25px] lg:text-[20px] lg:w-[550px] font-[500] italic xl:w-[594px]`}
          text={`“${quote}”`}
        />
      </div>
    </div>
  );
};

export default ClientContent;
