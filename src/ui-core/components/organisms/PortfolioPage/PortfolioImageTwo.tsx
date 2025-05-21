import React from "react";

interface portfolioImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

const PortfolioImageTwo = () => {
  return <div>
     <div className="flex items-center">
            <img src="/images/projectImgMobile.png" alt="ProjectImage" className="w-full h-full object-cover"/>
        </div>
  </div>;
};

export default PortfolioImageTwo;
