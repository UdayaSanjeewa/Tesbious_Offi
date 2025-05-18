import React from "react";

interface portfolioImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const PortfolioImage = ({src, alt="ProjectImage", width = 412, height = 260, className}:portfolioImage) => {
  return <div>
     <div className="flex items-center">
            <img src={src} alt={alt} className={`${className} h-[${height}] w-[${width}]`}/>
        </div>
  </div>;
};

export default PortfolioImage;
