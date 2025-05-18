import React from "react";
import EmailBox from "../../molecules/HomePage/EmailBox";

const EmailSection: React.FC = () => {
  return (
    <div className="items-center justify-center sm:w-full sm:mt-10 xl:mt-20 mb-20 flex flex-col gap-20">
      <div className="bg-[url('/images/emailBG.png')] bg-cover sm:w-[600px] md:w-[700px] md:h-[300px] lg:w-[950px] lg:h-[400px] xl:w-[1206px] xl:h-[464px] p-10 rounded-lg text-white">
        <EmailBox />
      </div>
    </div>
  );
};

export default EmailSection;
