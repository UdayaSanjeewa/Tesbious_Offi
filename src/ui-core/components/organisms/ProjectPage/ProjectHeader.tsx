import React from "react";

interface ProjectHeader {
  name: string;
  client: string;
  service1: string;
  service2?: string;
  service3?: string;
  duration: string;
}

const ProjectHeader = ({
  name,
  client,
  service1,
  service2 = "",
  service3 = "",
  duration,
}: ProjectHeader) => {
  return (
    <div>
      <div className="md:mt-[10%]">
        <h1 className="text-[32px] sm:text-[50px] font-semibold ml-[7%] mt-[50%] sm:mt-0">{name}</h1>
      </div>
      <div className="grid sm:grid-cols-3 gap-7 sm:mt-[10%] ml-[10%] my-[10%]">
        <div>
          <p className="text-[20px] text-[#1C1C1E99] font-medium sm:mb-3">
            Client
          </p>
          <p className="text-[25px] text-[#1C1C1E] font-medium">{client}</p>
        </div>
        <div>
          <p className="text-[20px] text-[#1C1C1E99] font-medium sm:mb-3">
            Service
          </p>
          <p className="text-[25px] text-[#1C1C1E] font-medium">{service1}</p>
          <p className="text-[25px] text-[#1C1C1E] font-medium">{service2}</p>
          <p className="text-[25px] text-[#1C1C1E] font-medium">{service3}</p>
        </div>
        <div>
          <p className="text-[20px] text-[#1C1C1E99] font-medium sm:mb-3">
            Duration
          </p>
          <p className="text-[25px] text-[#1C1C1E] font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
