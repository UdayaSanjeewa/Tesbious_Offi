import React from "react";

interface InputProps {
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder,className }) => {
  return (
    <input
      type="email"
      placeholder={placeholder}
      className={`${className} focus:outline-none focus:ring-0`}
    />
  );
};

export default Input;
