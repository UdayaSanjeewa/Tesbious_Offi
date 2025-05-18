import React from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { RiSendPlaneFill } from "react-icons/ri";

const EmailBox: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="sm:text-[40px] lg:text-[50px] xl:text-[60px] font-[600] text-white text-center xl:w-[903px]">
        Stay Ahead With Our Top Notch Digital Services
      </h1>
      <div className="mt-4 flex items-center justify-between text-[24px] font-[500] pl-[40px] pr-[40px] text-[#3B393999] sm:w-[400px] md:w-[500px] lg:w-[700px] sm:h-[60px]  xl:w-[895px] xl:h-[85px] rounded-[20px] bg-white">
        <Input placeholder="Enter Your Email" className="outline-none w-full" />
        <Button onClick={() => {}} classNameStyles="text-[32px]">
          <RiSendPlaneFill />
        </Button>
      </div>
    </div>
  );
};

export default EmailBox;
