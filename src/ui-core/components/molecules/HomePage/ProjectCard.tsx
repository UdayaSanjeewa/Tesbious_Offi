import React from "react";
import Logo from "../../atoms/Image";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  imageSrc: string;
  category: string;
  title: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  link,
  imageSrc,
  category,
  title,
}) => {
  const router = useRouter();
  return (
    <div className="w-[170px] h-[220px] md:w-[200px] md:h-[270px] lg:w-[250px] lg:h-[320px] 2xl:w-[289px] 2xl:h-[414px] bg-slate-300 rounded-[26px] overflow-hidden relative group cursor-pointer">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Logo
          src={imageSrc}
          width={1500}
          height={1000}
          className="w-[170px] h-[220px] md:w-[200px] md:h-[270px] lg:w-[250px] lg:h-[320px] 2xl:w-[289px] 2xl:h-[414px] object-cover"
        />
      </div>

      {/* Custom Gradient Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, #00000050 70%, #9747FF99 180%)",
        }}
      >

      {/* Gradient Overlay - Visible on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3B3939CC] opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>

      {/* Category Text */}
      <p className="absolute text-[10px] md:text-[12px] mt-5 ml-4 lg:mt-0 lg:ml-0 lg:top-8 lg:left-7 text-white lg:text-[14px] font-[600]">
        {category}
      </p>

      {/* Project Name */}
      <p className="absolute text-[14px] md:text-[17px] mt-10 ml-4 lg:mt-0 lg:ml-0 lg:top-16 lg:left-7 text-white lg:text-[20px] font-[600] leading-[1.2] w-[131px]">
        {title}
      </p>

      {/* "See Project" Button - Slides Up on Hover */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <button
          onClick={() => router.push(link)}
          className="flex lg:text-[15px] md:text-[12px] sm:text-[10px] justify-between items-center gap-2 sm:w-[130px] md:w-[150px] lg:w-[207px] lg:h-[46px] text-center px-6 py-2 bg-white text-black font-semibold rounded-full shadow-lg"
        >
          <p>See Project</p>
          <div className="text-[#6C63FF] sm:hidden lg:flex">
            <GoArrowRight size={31} />
          </div>
          <div className="text-[#6C63FF] sm:flex lg:hidden">
            <GoArrowRight size={15} />
          </div>
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProjectCard;
