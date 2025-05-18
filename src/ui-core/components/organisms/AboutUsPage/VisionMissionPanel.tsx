// components/organisms/VisionMissionPanel.tsx
import React from "react";
import ContentSwitcher from "../../molecules/AboutUsPage/ContentSwitcher";


const contentData = [
  {
    heading: "Shaping A Smarter Digital Future For Businesses Worldwide",
    type: "Our Vision",
    image: "images/vision.svg",
    paraOne: `At Tesbious Technologies, we transform businesses through expert web development,
          strategic digital marketing, and innovative software solutions. Our team focuses
          on creating scalable, secure, and user-friendly websites while delivering impactful
          marketing strategies to drive growth.`,
    paraTwo: `With a commitment to excellence and tailored solutions, we empower your business
          to thrive in the ever-evolving digital landscape. Let us help you achieve your goals
          and build a strong online presence.`,
  },
  {
    heading: "Driving Innovation And Growth For Your Success",
    type: "Our Mission",
    image: "images/mission.svg",
    paraOne: `At Tesbious Technologies, we transform businesses through expert web development,
    strategic digital marketing, and innovative software solutions. Our team focuses
    on creating scalable, secure, and user-friendly websites while delivering impactful
    marketing strategies to drive growth.`,
    paraTwo: `With a commitment to excellence and tailored solutions, we empower your business
    to thrive in the ever-evolving digital landscape. Let us help you achieve your goals
    and build a strong online presence.`,
  },
];

const VisionMissionPanel: React.FC = () => (
  <section className="mt-[40px] mb-[50px] lg:mb-[80px] xl:mb-[150px] xl:mt-[100px]">
    <ContentSwitcher contentData={contentData}/>
  </section>
);

export default VisionMissionPanel;
