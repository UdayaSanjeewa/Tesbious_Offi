import FooterDetails from "../molecules/FooterDetails";
import FooterLinks from "../molecules/FooterLinks";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  const products = [
    { name: "Product 1", url: "#" },
    { name: "Product 2", url: "#" },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/About-Us" },
    { name: "Services", url: "/Our-Services" },
    { name: "Portfolio", url: "#" },
    { name: "Contact", url: "#" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
  ];

  return (
    <>
      <div className=" w-screen bg-[#111827]  hidden md:grid grid-cols-5   h-[470px] text-white">
        {/* Footer Details */}
        <div className="md:scale-75 xl:scale-100 col-span-2 w-[320px] xl:w-[432px] border-b sm:border-b-0 sm:border-r-[1.5px] border-[#4A5151] p-4 xl:p-6 xl:pl-12 xl:m-10">
          <FooterDetails />
        </div>

        {/* Footer Links */}
        <div className="flex md:scale-90 col-span-3 xl:scale-100">
          {/* Products */}
          <div className="group relative lg:w-[250px] xl:w-[350px] p-6 xl:pl-10 pt-10">
            <div className="absolute inset-0 z-0 bg-gradient-to-b  from-[#0C101A] via-[#1a273d] to-[#111827] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10">
              <FooterLinks title="PRODUCTS" links={products} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="group relative lg:w-[250px] xl:w-[350px] p-6 pl-10 pt-10">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C101A] via-[#1a273d] to-[#111827] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10">
              <FooterLinks title="QUICK LINKS" links={quickLinks} />
            </div>
          </div>

          {/* Social */}
          <div className="group relative lg:w-[250px] xl:scale-100 xl:w-[350px] p-6 pl-10 pt-10">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0C101A] via-[#1a273d] to-[#111827] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10">
              <FooterLinks title="SOCIAL" links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Copyright + Icons) */}
      <div className="w-full md:hidden  bg-[#0F172A] text-center p-4 text-[10px] font-[400] text-gray-400 flex  items-center justify-between  sm:flex-row sm:items-center sm:justify-between px-6">
        <p className="pl-4">© 2024 Tesbious. All Rights Reserved.</p>
        <div className="flex gap-2 justify-center">
          {/* Replace with actual social icon components or use a loop */}
          <a>
            <FaSquareXTwitter size={20} />
          </a>
          <a>
            <FaLinkedin size={20} />
          </a>
          <a>
            <FaFacebookSquare size={20} />
          </a>
          <a>
            <AiFillInstagram size={20} />
          </a>
          <a>
            <FaBehanceSquare size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
