import React from "react";
import { Heading, Paragraph } from "../../atoms/Typography";
import { FeatureList } from "../../molecules/HomePage/FeatureList";
import Button from "../../atoms/Button";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Logo from "../../atoms/Image";
import { ArrowUpRight } from "lucide-react";
import LogoStatic from "./StaticSections/LogoStatic";
import LogoStaticTwo from "./StaticSections/LogoStaticTwo";

export const AboutUs: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex  mt-8  sm:mt-0 sm:items-center h-[900px] sm:h-[800px] lg:h-[1000px] sm:w-full justify-center">
        <div className="hidden sm:flex sm:mr-[20px] xl:mr-[200px]">
          {/* <Logo
            src="/images/coffeee.jpg"
            alt="Coffeeee"
            height={568}
            width={530}
            className="sm:w-[280px] md:w-[310px] lg:w-[400px]"
          /> */}
          <LogoStatic />
        </div>

        <div>
          <div className="flex  flex-col gap-10 sm:gap-5 lg:gap-10">
            <div className="lg:w-[555px] ml-5 sm:ml-0 w-[300px] md:w-[350px] flex sm:grid justify-center lg:h-[108px]">
              <Heading
                text="Accelerate Your Business With Tesbious Technologies"
                className="text-black text-[34px] sm:text-[30px] lg:text-[40px] font-[600]"
              />
            </div>
            <div className="sm:hidden flex w-full justify-center">
              {/* <Logo
                src="/images/projectImg.png"
                alt="Coffeeee"
                height={207}
                width={351}
                className="rounded-[15px]"
              /> */}
              <LogoStaticTwo />
            </div>

            <div className="lg:w-[555px] ml-5 sm:ml-0 sm:w-[280px] md:w-[340px] lg:h-[104px]">
              <Paragraph
                text="We Drive Business Growth Through Digital Innovation. Specializing in Web Development, Digital Marketing, And Software Solutions, We Deliver Tailored Strategies To Empower Your Success In A Competitive Digital World."
                className="font-[400] lg:text-[18px] opacity-60"
              />
            </div>
            <div className="ml-5 sm:ml-0">
              <FeatureList />
            </div>
            <div>
              <Button
                onClick={() => {
                  router.push("/");
                }}
                classNameStyles="mt-4 flex text-[18px] items-center gap-4 text-[#6329EC] font-[500]"
              >
                <div className="hidden sm:flex justify-center items-center gap-3">
                  Get Quote For Project <FaArrowRight size={18} />
                </div>
                <div className="sm:hidden ml-5 sm:ml-0 text-black border border-black w-[237px] h-[45px]  pt-2 rounded-[40.99px] text-[17px] font-[400]">
                  <div className="flex items-center gap-3 justify-center">
                    <div>Get Quote For Project</div>
                    <div className="sm:hidden border border-black rounded-[36px]">
                      {" "}
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
