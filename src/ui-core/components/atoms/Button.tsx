import React, { MouseEventHandler, ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  classNameStyles?: string;
}

const Button: React.FC<NavButtonProps> = ({ children, onClick,classNameStyles }) => {
  return (
    <button
      className={`${classNameStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
