import React from "react";

type IconProps = {
  icon: React.ReactNode;
  className?:string;
};

export const Icon: React.FC<IconProps> = ({ icon,className }) => <div className={`${className}`}>{icon}</div>;
