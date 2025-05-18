import React from "react";

type TypographyProps = {
  text: string;
  className?: string;
};

export const Heading: React.FC<TypographyProps> = ({ text, className }) => (
  <h1 className={`${className}`}>{text}</h1>
);

export const Paragraph: React.FC<TypographyProps> = ({ text, className }) => (
  <p className={`${className}`}>{text}</p>
);
