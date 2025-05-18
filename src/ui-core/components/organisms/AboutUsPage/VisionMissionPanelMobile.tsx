import VisioionMissionComp from "../../molecules/AboutUsPage/VisionMissionComp";

const data = [
    {
        title:"Shaping a Smarter Digital Future for Businesses Worldwide",
        paraOne:"At Tesbious Technologies, we transform businesses through expert web development, strategic digital marketing, and innovative software solutions. Our team focuses on creating scalable, secure, and user-friendly websites while delivering impactful marketing strategies to drive growth.",
        paraTwo:"With a commitment to excellence and tailored solutions, we empower your business to thrive in the ever-evolving digital landscape. Let us help you achieve your goals and build a strong online presence.",
        heading:"Our Vision",
        imageSrc:"images/Frame2.png",
    },
    {
        title:"Shaping a Smarter Digital Future for Businesses Worldwide",
        paraOne:"At Tesbious Technologies, we transform businesses through expert web development, strategic digital marketing, and innovative software solutions. Our team focuses on creating scalable, secure, and user-friendly websites while delivering impactful marketing strategies to drive growth.",
        paraTwo:"With a commitment to excellence and tailored solutions, we empower your business to thrive in the ever-evolving digital landscape. Let us help you achieve your goals and build a strong online presence.",
        heading:"Our Mission",
        imageSrc:"images/Frame3.png",
    },
]


const VisionMissionPanelMobile = () => {
  return (
    <div>
      <VisioionMissionComp data={data}/>
    </div>
  );
};

export default VisionMissionPanelMobile;
