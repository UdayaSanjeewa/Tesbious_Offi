import React from "react";
import Image from "next/image";

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
            <Image src={src} alt={alt} width={width} height={height} className={`${className}`}/>
        </div>
  </div>;
};

export default PortfolioImage;
