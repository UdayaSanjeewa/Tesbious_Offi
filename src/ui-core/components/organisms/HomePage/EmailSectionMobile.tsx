import { RiSendPlaneFill } from "react-icons/ri";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const EmailSectionMobile = () => {
  return (
    <div className="pl-10 h-[300px] pt-10">
      <p className="w-[285px] text-[32px] font-[600] mb-5">Stay Ahead with Our Top Notch Digital Services</p>
      <div className="flex w-[320px] h-[50px] rounded-[40px] border border-[#00000029]">
        <Input placeholder="Enter Your Email" className="ml-4 mt-1 h-[40px] w-full bg-[#b4b0fd14]" />
        <Button onClick={() => {}} classNameStyles="w-[60px] text-[#00000080]">
          <RiSendPlaneFill />
        </Button>
      </div>
    </div>
  );
};

export default EmailSectionMobile;
