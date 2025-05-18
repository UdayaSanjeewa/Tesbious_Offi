import React from "react";
import FeatureCard from "../../molecules/HomePage/FeatureCard";
import { RiTerminalBoxLine } from "react-icons/ri";
import {
  FaRocket,
  FaCode,
  FaChartBar,
  FaHandshake,
  FaTrophy,
} from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="h-auto  2xl:h-[913px] sm:h-[530px] lg:h-[720px] xl:h-[800px] bg-[#111827] w-full flex items-center flex-col">
      <div className="flex items-center justify-center sm:justify-start 2xl:h-[240px] h-[240px]  sm:h-[180px] lg:h-[280px] lg:w-[890px] sm:w-[580px] md:w-[710px] xl:w-[1060px] 2xl:w-[1390px] ">
        <p className="text-[36px] w-[325px] 2xl:text-[45px] font-[600] sm:w-[500px] md:w-[550px] lg:w-[600px] 2xl:w-[633px] text-white">
          Grow Your Business Digitally With Tesbious
        </p>
      </div>

      <div className="w-full  sm:h-[300px] 2xl:h-[550px] flex items-center justify-center">
        <div className="flex flex-col  sm:flex-row sm:w-[600px] md:w-[710px] lg:w-[890px] 2xl:w-[1390px]  xl:w-[1060px]   2xl:h-[592px] justify-between">
          <div className="flex flex-col  justify-between">
            <div className="flex flex-col sm:flex-row sm:w-[460px] md:w-[550px] lg:w-[700px] xl:w-[810px] sm:h-[150px] md:h-[190px] lg:h-[250px] xl:h-[275px] 2xl:w-[1030px] justify-between">
              {/* Website that convert */}
              <FeatureCard
                className="w-[363px] mt-5 sm:ml-0 sm:mt-0 sm:m-0 2xl:m-0 h-[304px]  sm:w-[150px] sm:h-[145px] md:w-[185px] md:h-[180px] lg:w-[240px] lg:h-[235px] xl:w-[270px] xl:h-[265px] 2xl:w-[325px] 2xl:h-[323px] text-[rgba(255, 255, 255, 0.80)] flex flex-col 2xl:justify-around "
                titleStyles="text-[28px] lg:text-[22px] pl-5 sm:pl-0 sm:text-[13px] md:text-[17px] lg:text-[20px] 2xl:text-[28px] 2xl:w-[208px] 2xl:h-[82px] font-[600]"
                iconStyles="w-full flex pl-5 sm:w-[20px] sm:h-[10px] md:w-[40px]  2xl:w-full sm:pl-0 sm:items-center sm:justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                descriptionStyles="pt-2 sm:pt-1 2xl:pt-0 lg:w-[200px] sm:text-[8px] md:text-[10px] md:w-[140px] lg:text-[14px] lg:pt-4 md:text-[13px] 2xl:text-[14px] text-[14px] pl-5 sm:pl-0 sm:w-[120px] 2xl:w-[246px] w-[246px] h-[54px] font-[500] opacity-60"
                titleAndIconStyles="flex flex-col 2xl:gap-5"
                title="Websites That Convert"
                description="We Create Responsive, High-Performance Websites That Engage Customers And Boost Conversions."
                icon={<FaCode size={60} />}
              />

              {/* Fueling Business Growth */}
              <FeatureCard
                className="w-[363px] mt-5 sm:ml-0 sm:mt-0  sm:m-0 h-[304px] sm:w-[300px] sm:h-[145px] md:h-[180px] md:w-[350px] pl-10 sm:pl 2xl:pl-20  2xl:w-[671px] 2xl:h-[323px] xl:h-[265px] xl:w-[525px]  lg:h-[235px] lg:w-[450px] text-[rgba(255, 255, 255, 0.80)] flex flex-col 2xl:justify-around"
                titleStyles="text-[28px] lg:text-[30px]  sm:text-[18px] md:text-[22px] xl:text-[35px] 2xl:text-[45px] 2xl:w-[400px] 2xl:h-[122px] font-[600]"
                iconStyles="flex w-[60px] sm:w-[40px] lg:w-[50px] 2xl:w-auto items-center justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                descriptionStyles="text-[14px] pt-2 sm:pt-2 md:pt-4 sm:text-[8px] md:text-[12px] lg:text-[14px] 2xl:text-[18px] 2xl:w-[491px] 2xl:h-[48px] font-[500] opacity-60"
                titleAndIconStyles="flex sm:gap-5"
                title="Fueling Business Growth"
                description="Our digital strategies drive growth, helping businesses scale faster with smarter solutions."
                icon={<FaRocket size={60} />}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between">
              {/* Proven Success Stories */}
              <FeatureCard
                className="w-[363px] mt-5 sm:ml-0 sm:mt-0  sm:m-0 h-[304px] xl:w-[430px] pl-10 sm:p-0 sm:pl-2 lg:pl-3 sm:w-[250px] sm:h-[120px] md:h-[150px] lg:h-[170px] lg:w-[390px]  md:w-[310px] 2xl:w-[555px] 2xl:h-[209px] text-[rgba(255, 255, 255, 0.80)] flex flex-col 2xl:justify-around"
                titleStyles="text-[28px] lg:text-[28px] sm:text-[15px] md:text-[21px] 2xl:text-[30px] 2xl:w-[339px] 2xl:h-[41px] font-[600]"
                iconStyles="flex items-center sm:w-[20px] lg:w-[50px] md:w-[30px] justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                descriptionStyles="text-[14px] sm:text-[9px] md:text-[11px] md:mt-1 2xl:pt-0 pt-2 sm:pt-0  2xl:text-[15px] 2xl:w-[376px] 2xl:h-[40px] font-[500] opacity-60"
                titleAndIconStyles="flex 2xl:gap-20 sm:gap-5"
                title="Proven Success Stories"
                description="Trusted by top brands, our innovative solutions drive real results—your success is our goal."
                icon={<FaTrophy size={60} />}
              />

              {/* Partners in Your Growth */}
              <FeatureCard
                className="pl-10 w-[363px] mt-5 sm:ml-0 sm:mt-0  sm:m-0 h-[304px] xl:w-[368px] sm:w-[205px] md:w-[230px] md:h-[150px] sm:h-[120px] 2xl:w-[441px] 2xl:h-[209px] lg:h-[170px] lg:w-[300px] text-[rgba(255, 255, 255, 0.80)] flex flex-col 2xl:justify-around"
                titleStyles="text-[28px] sm:text-[13px] lg:text-[20px] 2xl:text-[24px] sm:w-[209px] 2xl:h-[64px] font-[600]"
                iconStyles="flex items-center sm:w-[40px] xl:w-[60px] sm:h-[10px] justify-center drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                descriptionStyles="text-[14px] lg:text-[12px] pt-2 sm:pt-0 md:pt-3 2xl:pt-0 sm:text-[10px]  2xl:text-[15px] 2xl:w-[376px] 2xl:h-[40px] font-[500] opacity-60"
                titleAndIconStyles="flex 2xl:gap-20 "
                title="Partners in Your Growth"
                description="Ongoing support and maintenance to keep your digital presence secure and strong."
                icon={<FaHandshake size={60} />}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            {/* "Marketing With Measurable Impact" */}
            <FeatureCard
              className="pl-10 lg:w-[180px] 2xl:w-[325px] lg:h-[150px] xl:w-[240px] xl:h-[165px] sm:p-[0px] sm:pl-2 sm:pr-2 sm:pt-5 sm:pb-2 md:pb-5 lg:pl-3 2xl:p-6 sm:h-[95px] sm:w-[130px] md:h-[120px] md:w-[150px] mt-5 sm:ml-0 sm:mt-0  sm:m-0 2xl:h-[209px] w-[363px] h-[304px] text-[rgba(255, 255, 255, 0.80)] flex flex-col justify-around"
              titleStyles="text-[28px] sm:text-[6px] lg:text-[14px] md:text-[10px] 2xl:text-[18px] sm:w-[185px] 2xl:h-[48px] font-[600]"
              iconStyles="flex items-center justify-center sm:w-[20px] lg:w-[40px] sm:h-[20px] 2xl:w-[60px] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              descriptionStyles="text-[14px] pt-2 lg:text-[10px] sm:pt-2 2xl:pt-0 2xl:text-[15px] md:text-[7px] sm:text-[6px] 2xl:w-full sm:w-[100px] lg:w-[155px] 2xl:h-[30px] font-[500] opacity-60"
              titleAndIconStyles="flex 2xl:gap-5"
              title="Marketing With Measurable Impact"
              description="Data-driven campaigns that maximize ROI and grow your brand visibility."
              icon={<FaChartBar size={60} />}
            />

            {/* Custom Software That Works */}
            <FeatureCard
              className="pl-10 2xl:w-[325px] lg:w-[180px] 2xl:h-[323px] lg:h-[260px] xl:h-[270px] xl:w-[240px]  sm:h-[170px] sm:w-[130px] md:h-[210px] md:w-[150px]  w-[363px] h-[304px] mt-5 sm:ml-0 sm:mt-0  sm:m-0 mb-16 sm:mb-0  text-[rgba(255, 255, 255, 0.80)] flex flex-col 2xl:justify-around"
              titleStyles="text-[28px] lg:text-[18px] 2xl:text-[28px] sm:text-[12px] sm:w-[256px] sm:h-[74px] font-[600]"
              iconStyles="flex items-center justify-center sm:w-[20px] sm:h-[10px] md:w-[35px] 2xl:w-[60px] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              descriptionStyles="text-[14px] pt-2 sm:pt-2 lg:pt-10 lg:text-[12px] 2xl:pt-0 md:text-[10px] sm:text-[8px] sm:w-[90px] lg:w-[150px] 2xl:text-[15px] 2xl:w-full sm:w-[215px]  sm:h-[51px] font-[500] opacity-60"
              titleAndIconStyles="flex flex-col sm:gap-5"
              title="Custom Software That Works"
              description="We build secure, scalable software to streamline operations and boost efficiency."
              icon={<RiTerminalBoxLine size={60} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
