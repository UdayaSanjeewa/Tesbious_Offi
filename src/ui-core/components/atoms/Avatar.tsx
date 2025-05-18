import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={401}
      height={558}
      className={`${className}`}
    />
  );
};

export default Avatar;
