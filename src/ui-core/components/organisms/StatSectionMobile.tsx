import React from "react";
import StatCardMobile from "../molecules/HomePage/StatCardMobile";

const StatSectionMobile: React.FC = () => {
  return (
    <div className="flex flex-col ">
        <StatCardMobile number="25+" label="Projects Completed" />
        <StatCardMobile number="4+" label="Years of Experience" />
        <StatCardMobile number="20+" label="Satisfied Clients" />
    </div>
  );
};

export default StatSectionMobile;
