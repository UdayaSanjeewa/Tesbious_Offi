import Stroke from "../../atoms/Stroke";
import { Paragraph } from "../../atoms/Typography";

function HeroSubTitle() {
  return (
    <div className="flex h-[78px] items-center sm:justify-center sm:m-[70px]">
      <div className="lg:flex hidden">
        {" "}
        <Stroke colour="#9747FF" width="120px" height="4px" />{" "}
      </div>
      <div className="sm:flex lg:hidden hidden">
        {" "}
        <Stroke colour="#9747FF" width="50px" height="4px" />{" "}
      </div>
      <p className="w-[14px] ml-10 mr-5 h-[14px] bg-[#6329EC] rounded-[40px] sm:hidden"></p>
      <Paragraph
        className="text-[20px] font-[400] lg:text-[50px] xl:text-[58px] lg:font-[600] sm:text-center sm:text-[30px] sm:p-5 xl:p-[80px] sm:text-white"
        text="Our Company Story"
      />
      <div className="sm:flex lg:hidden hidden">
        {" "}
        <Stroke colour="#9747FF" width="50px" height="4px" />{" "}
      </div>
      <div className="lg:flex hidden">
        {" "}
        <Stroke colour="#9747FF" width="120px" height="4px" />{" "}
      </div>
    </div>
  );
}

export default HeroSubTitle;
