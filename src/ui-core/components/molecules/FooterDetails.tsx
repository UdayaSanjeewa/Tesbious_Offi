import Logo from "../atoms/Image";
import { Paragraph } from "../atoms/Typography";
import { FaPhone } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const FooterDetails = () => {
  return (
    <div className="w-[296px] h-[114px]">
      <div className="flex items-center gap-16">
        <Logo src="/images/logo.png" className="w-[64px] h-[59px]" />
        <Paragraph
          text="Tesbious"
          className="text-white text-[35px] font-[600] "
        />
      </div>

      <div className="mt-10 flex gap-10 flex-col">
        <div className="flex text-gray-500 items-center gap-4">
          <div className="text-[20px]">
            <FaPhone />
          </div>
          <Paragraph
            text="+94 77 955 5563"
            className="text-[16px] font-[600]"
          />
        </div>

        <div className="flex text-gray-500 items-center gap-4">
          <div className="text-[20px]">
            <IoMailSharp />
          </div>
          <Paragraph
            text="info@tesbious.com"
            className="text-[16px] font-[600]"
          />
        </div>
      </div>
      <div className="mt-10">
        <Paragraph
          text="Ready to transform your online presence? Give your project to us and feel the difference! With our expertise in web design and development, we’ll create a stunning, mobile-friendly website tailored to your needs."
          className="text-[14px] w-[296px] font-[300] text-gray-500"
        />
      </div>
    </div>
  );
};

export default FooterDetails;
