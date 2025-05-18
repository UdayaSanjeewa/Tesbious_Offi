import React from 'react';

type ProjectCardMobileProps = {
  imageSrc: string;
  category: string;
  title: string;
  link: string;
};

const ProjectCardMobile: React.FC<ProjectCardMobileProps> = ({ imageSrc, category, title, link }) => {
  return (
    <a href={link} className="block rounded-xl shadow-md overflow-hidden relative">
      <div className="relative w-[320px] h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>
      <div className="absolute inset-0 flex gap-2 flex-col  text-white p-4 bg-black bg-opacity-40 rounded-xl"
       style={{
          background: 'linear-gradient(to bottom, #00000080 60%, #9747FF99 180%)',
        }}>
        <p className="text-[16px] font-[600]">{category}</p>
        <h3 className="text-[24px] font-[600] capitalize leading-7">{title}</h3>
      </div>
    </a>
  );
};

export default ProjectCardMobile;
