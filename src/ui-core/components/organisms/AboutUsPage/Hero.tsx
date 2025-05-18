import HeroLeftText from "../../molecules/AboutUsPage/HeroLeftText";
import HeroRightText from "../../molecules/AboutUsPage/HeroRightText";
import HeroSubTitle from "../../molecules/AboutUsPage/HeroSubTitle";
import HeroTitle from "../../molecules/AboutUsPage/HeroTitle";

function Hero() {
  return (
    <div>
      <div className="hidden sm:flex sm:ml-10 mt-[100px] mb-[100px] sm:mb-[50px] ml-[100px] xl:ml-[100px]">
        <HeroTitle />
      </div>

      <div className="w-full mt-[100px] sm:mt-0 xl:mt-[130px]  flex items-start justify-center">

      <div className="sm:w-[550px] sm:h-[650px] md:w-[650px] lg:w-[900px] xl:w-[1420px] xl:h-[627px] sm:rounded-[15px] sm:bg-[#111827]">
        <HeroSubTitle />
        <div className="flex flex-col ml-10 sm:ml-0 sm:flex-row sm:justify-evenly xl:mt-[110px]">
        <HeroLeftText />
        <HeroRightText />
        </div>
        
      </div>

      </div>

    </div>
  );
}

export default Hero;
