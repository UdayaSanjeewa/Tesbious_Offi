import React from "react";
import GlowBox from "../../atoms/GlowBox";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  titleStyles?: string;
  iconStyles?: string;
  descriptionStyles?: string;
  titleAndIconStyles?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  titleStyles,
  iconStyles,
  titleAndIconStyles,
  descriptionStyles,
  description,
  icon,
  className,
}) => {
  return (
    <GlowBox className={`${className}`}>
      <div className={`flex flex-col-reverse items-start sm:items-center gap-2 sm:flex-row ${titleAndIconStyles}`}>

        <h3 className={` ${titleStyles}`}>{title}</h3>
        <div className={`${iconStyles} `}>{icon}</div>
      </div>
      <p className={`${descriptionStyles}`}>{description}</p>
    </GlowBox>
  );
};

export default FeatureCard;
