import { useRouter } from "next/navigation";
import AnimatedButton from "../../atoms/AnimatedButton";
import Button from "../../atoms/Button";
import HeroImage from "../../molecules/HomePage/HeroImage";
import HeroSubTitle from "../../molecules/HomePage/HeroSubTitle";
import HeroTitle from "../../molecules/HomePage/HeroTitle";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="bg-black h-[768px] sm:h-auto w-full pl-6 sm:pl-0 sm:w-auto  sm:bg-white">
      <div className="sm:mt-0 mt-[250px]">
      <HeroTitle />
      </div>
      <div className="flex">
        <div className="z-10 absolute sm:mt-[30px] md:ml-0 lg:mt-[60px] lg:ml-10 mt-[20px] ml-[10px]">
          <HeroSubTitle />
        </div>
        <div className="absolute z-10 mt-[140px] lg:mt-[160px] xl:mt-[200px] sm:mt-[95px] md:mt-[100px] md:ml-0 ">
          <Button
            onClick={() => {
              router.push("/");
            }}
            classNameStyles="bg-[#9747FF] sm:bg-[#111827] w-[191px] h-[49px] lg:w-[191px] lg:h-[49px] lg:text-[18px] sm:w-[120px] sm:h-[30px] sm:text-[13px] mt-[30px] sm:mt-0  lg:ml-[30px] rounded-[40.99px] text-[18px] font-[600] text-white sm:hover:text-[#6329EC]"
          >
            <div className="flex items-center gap-3 justify-center">
            <div>Get Started</div>
            <div className="sm:hidden border border-white rounded-[36px]"> <ArrowUpRight size={15}/></div>
            </div>

            
          </Button>
        </div>
        <div className="w-full hidden sm:flex items-center justify-center">
        <div className="sm:w-[580px] md:w-[650px] lg:w-[950px] xl:w-full  z-0 justify-center sm:mt-6 lg:mt-10">
          <HeroImage />
        </div>
        </div>

        <div className="absolute hidden sm:flex z-10 lg:mt-[230px] sm:ml-[500px] sm:mt-[130px] md:ml-[570px] md:mt-[143px] lg:ml-[840px] xl:mt-[300px] xl:ml-[1100px]">
          <AnimatedButton href="/" className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
