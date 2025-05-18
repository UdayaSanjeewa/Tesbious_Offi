import { useRouter } from "next/navigation";
import Button from "../../atoms/Button";
import OurServicesTitle from "../../molecules/HomePage/OurServicesTitle";
import ServiceSections from "../../molecules/HomePage/ServiceSection";
import MovingBallWithText from "../../molecules/HomePage/MovingBallWithText";
import ServiceSectionMobile from "../../molecules/HomePage/ServiceSectionMobile";

function OurServices() {
  const router = useRouter();

  return (
    <div className="h-[1350px] sm:h-[1000px] lg:h-[1100px] xl:h-[1301px]  bg-[#6C63FF2E]  sm:bg-[#111827] sm:p-10 lg:p-[80px]">
      <div className="flex items-center gap-3 pl-10 pt-10 sm:pl-0 sm:pt-0">
        <div className="md:w-[12px] md:h-[12px] lg:w-[14px] lg:h-[14px] w-[14px] h-[14px] sm: bg-[#7F00FF] rounded-[50px]"></div>
        <p className="text-black sm:text-white text-[20px] sm:text-[12px] md:text-[14px] lg:text-[20px] font-[500]">
          Our Services
        </p>
      </div>

      <div className="flex justify-between pl-10 sm:pl-0 items-center ">
        <div>
          <OurServicesTitle />
        </div>
        <div className="hidden sm:flex md:hidden">
          <MovingBallWithText
            xLength={85}
            arrowClass="text-white"
            routeLink="/Our-Services"
            text="View Services"
            textClass="text-white"
            arrSize={10}
          />
        </div>
        <div className="hidden md:flex lg:hidden">
          <MovingBallWithText
            xLength={105}
            arrowClass="text-white"
            routeLink="/Our-Services"
            text="View Services"
            textClass="text-white"
            arrSize={10}
          />
        </div>
        <div className="hidden lg:flex xl:hidden">
          <MovingBallWithText
            xLength={111}
            arrowClass="text-white"
            routeLink="/Our-Services"
            text="View Services"
            textClass="text-white"
            arrSize={14}
          />
        </div>
        <div className="hidden xl:flex">
          <MovingBallWithText
            xLength={150}
            arrowClass="text-white"
            routeLink="/Our-Services"
            text="View Services"
            textClass="text-white"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex flex-col items-center justify-center sm:h-[620px] xl:h-[900px] gap-20">
        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/Web-dev");
          }}
          number="01"
          title="Web Development"
          paragraph="Our team builds robust, scalable, and responsive websites tailored to your business needs, using the latest technologies and best practices."
        />
        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/Digital-Marketing");
          }}
          number="02"
          title="Digital Marketing"
          paragraph="We offer comprehensive digital marketing services, including SEO, social media marketing, and PPC, to help you reach and engage your target audience effectively."
        />
        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/Software-Solutions");
          }}
          number="03"
          title="Software Solutions"
          paragraph="From custom software development to enterprise solutions, we deliver software that enhances efficiency and drives business growth."
        />
      </div>

      {/* Mobile */}
      <div className="w-full sm:hidden items-center flex flex-col">
        <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Web-dev");
          }}
          number="01"
          title="Web Development"
          paragraph="Our team builds robust, scalable, and responsive websites tailored to your business needs, using the latest technologies and best practices."
        />
                <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Digital-Marketing");
          }}
          number="02"
          title="Digital Marketing"
          paragraph="We offer comprehensive digital marketing services, including SEO, social media marketing, and PPC, to help you reach and engage your target audience effectively."
        />
        <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Software-Solutions");
          }}
          number="03"
          title="Software Solutions"
          paragraph="From custom software development to enterprise solutions, we deliver software that enhances efficiency and drives business growth."
        />
      </div>

      <div className="sm:flex w-full sm:mt-10 xl:mt-0 hidden justify-center">
        <Button
          onClick={() => {
            router.push("/");
          }}
          classNameStyles="w-[235px] mt-[20px] h-[57px] rounded-[50px] text-white border-[1.5px] border-[#6C63FF] hover:bg-[#6C63FF] text-[22px] font-[500] text-center"
        >
          See More
        </Button>
      </div>
    </div>
  );
}

export default OurServices;
