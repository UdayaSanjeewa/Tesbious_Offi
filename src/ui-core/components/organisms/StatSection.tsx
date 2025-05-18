import React from "react";
import StatCard from "../molecules/HomePage/StatCard";

const StatSection: React.FC = () => {
  return (
    <div className="items-center justify-center xl:mt-20 xl:mb-20 flex flex-col w-full  xl:gap-20">
      <div className="flex justify-between w-full sm:p-5 md:p-8 xl:p-0 xl:w-[1112px] xl:h-[183px]">
        <StatCard number="25+" label="Projects Completed" />
        <StatCard number="4+" label="Years of Experience" />
        <StatCard number="20+" label="Satisfied Clients" />
      </div>
    </div>
  );
};

export default StatSection;
