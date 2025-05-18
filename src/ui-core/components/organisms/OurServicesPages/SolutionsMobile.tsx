import Image from "next/image";

interface SolutionMobileProps {
  services: string[];
  title: string;
  imageUrl: string;
}

const SolutionsMobile: React.FC<SolutionMobileProps> = ({
  services,
  title,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col ml-2 mr-2 bg-[#BBB4FC1A]/10">
      <div className="flex items-center ml-[5%] gap-2">
        <div className="w-[30px] flex items-center justify-center h-[30px] bg-[#6C63FF] rounded-full">
          <Image
            src={imageUrl}
            alt="icon"
            width={16}
            height={16}
            className="w-[16px] h-[16px] aspect-auto"
          />
        </div>
        <p className="text-[#6329EC] text-[23px] text-center mt-5 mb-5 font-[600]">
          {title}
        </p>
      </div>

      <div className="flex flex-col w-[320px] ml-5">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-[11px] h-[11px] rounded-full  shadow-2xl bg-white"></div>
            <p className="text-[20px] font-[400] text-[#1C1C1E] m-2 ml-[3%]">
              {service}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsMobile;
