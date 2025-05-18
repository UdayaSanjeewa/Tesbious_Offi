import { Paragraph } from "../../atoms/Typography";

function HeroRightText() {
  return (
    <div className="text-gray-500 text-[13px] font-[400] w-3/4 mt-5 sm:text-[15px] sm:mt-0 lg:text-[18px] capitalize sm:w-[300px] lg:w-[500px] lg:mr-[20px] xl:w-[669px] flex flex-col gap-10 sm:gap-5">
      <Paragraph text="At Tesbious Technologies, we transform businesses through expert web development, strategic digital marketing, and innovative software solutions. Our team focuses on creating scalable, secure, and user-friendly websites while delivering impactful marketing strategies to drive growth." />
      <Paragraph text="With a commitment to excellence and tailored solutions, we empower your business to thrive in the ever-evolving digital landscape. Let us help you achieve your goals and build a strong online presence." />
    </div>
  );
}

export default HeroRightText;
