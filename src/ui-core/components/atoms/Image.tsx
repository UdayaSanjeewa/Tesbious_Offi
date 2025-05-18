import React from "react";
import Image from "next/image";

interface LogoProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    className? : string;
}

const Logo: React.FC<LogoProps> = ({ src, alt = "Logo", width = 100, height = 50 ,className}) => (
    <div className="flex items-center">
        <Image src={src} alt={alt} width={width} height={height} className={`${className}`}/>
    </div>
);

export default Logo;
