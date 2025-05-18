import { ArrowUpRight } from "lucide-react";
import { MouseEventHandler } from "react";

interface ServiceSectionMobileProps {
  number: string;
  title: string;
  paragraph: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ServiceSectionMobile: React.FC<ServiceSectionMobileProps> = ({
  number,
  title,
  paragraph,
  onClick,
}) => {
  return (
    <div className="w-[320px] flex flex-col justify-evenly group mt-10 h-[310px] rounded-[32px] hover:bg-[#7F00FF] hover:border-[#7F00FF] hover:text-white bg-white border-[1px] border-black">
      <div className="flex items-center w-full justify-center gap-10">
        <p className="text-[60px] flex justify-center font-[800]">{number}</p>
        <p className="w-[150px] leading-6 text-[25px] font-[700]">{title}</p>
      </div>
      <div className="ml-8 w-[260px]">
        <p>{paragraph}</p>
      </div>
      <button
        onClick={onClick}
        className="text-black border group-hover:text-white group-hover:border-white border-black w-[123px] h-[36px]  ml-8  rounded-[40.99px] text-[13px] font-[600]"
      >
        <div className="flex items-center gap-3 justify-center">
          <div>See more</div>
          <div className="group-hover:border-white border border-black rounded-[36px]">
            <ArrowUpRight size={15} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default ServiceSectionMobile;
