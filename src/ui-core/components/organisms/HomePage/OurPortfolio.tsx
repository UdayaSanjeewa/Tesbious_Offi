import React from "react";
import OurPortfolioTItle from "../../molecules/HomePage/OurPortfolioTItle";
import ProjectCard from "../../molecules/HomePage/ProjectCard";
import AutoSliderMobile from "../../molecules/HomePage/AutoSliderMobile";

function OurPortfolio() {
  const projects = [
    {
      imageSrc: "/images/projectImg.png",
      category: "Artificial Intelligence",
      title: "AI Multi Model Technology",
      link: "/",
    },
    {
      imageSrc: "/images/projectImg.png",
      category: "UI/UX",
      title: "Branding And Design",
      link: "/",
    },
    {
      imageSrc: "/images/projectImg.png",
      category: "Web",
      title: "Branding And Design",
      link: "/",
    },
  ];

  return (
    <div className="p-10 lg:p-[120px]">
      <div className="flex gap-3 items-center">
        <div className="w-[14px] h-[14px] bg-[#7F00FF] rounded-[50px]"></div>
        <p className="text-black text-[20px] font-[500]">Our Portfolio</p>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <OurPortfolioTItle />
        </div>
      </div>

      <div className="hidden sm:flex w-full justify-between sm:mt-[50px] lg:mt-[100px]">
        <ProjectCard
          imageSrc="/images/projectImg.png"
          category="Web"
          title="Enter Project Name"
          link="/"
        />{" "}
        <ProjectCard
          imageSrc="/images/projectImg.png"
          category="Web"
          title="Enter Project Name"
          link="/"
        />{" "}
        <ProjectCard
          imageSrc="/images/projectImg.png"
          category="Web"
          title="Enter Project Name"
          link="/"
        />{" "}
        <div className="hidden xl:flex">
          <ProjectCard
            imageSrc="/images/projectImg.png"
            category="Web"
            title="Enter Project Name"
            link="/"
          />
        </div>
      </div>

      <div className="flex sm:hidden justify-center items-center">
        <AutoSliderMobile projects={projects} />
      </div>
    </div>
  );
}

export default OurPortfolio;
