import Image from "next/image";
import React from "react";

const AvatarStatic = () => {
  return (
    <img src="/images/man.jpeg" alt="man" className="sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[370px] xl:w-[401px] xl:h-[558px] object-cover rounded-[12px] shadow-xl" />
  );
};

export default AvatarStatic;
