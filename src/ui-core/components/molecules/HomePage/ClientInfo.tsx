import React from "react";
import { Paragraph } from "../../atoms/Typography";
import Badge from "../../atoms/Badge";

interface ClientInfoProps {
  name: string;
  location: string;
  BadgeNum: string;
  textColour:string;
}

const ClientInfo: React.FC<ClientInfoProps> = ({
  name,
  location,
  BadgeNum,
  textColour
}) => {
  return (
    <div className="flex items-center sm:gap-2 lg:gap-4 lg:mt-4">
      <Badge text={BadgeNum} />
      <div>
        <Paragraph className={`font-[600] sm:text-[10px] lg:text-[18px] xl:text-[25px] ${textColour}`} text={name} />
        <Paragraph
          className="text-[#B0ADAD] sm:text-[10px] lg:text-[15px] xl:text-[20px] font-[500]"
          text={location}
        />
      </div>
    </div>
  );
};

export default ClientInfo;
