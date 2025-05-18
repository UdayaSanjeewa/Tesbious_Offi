import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import NavButton from "../atoms/Button";
import Logo from "../atoms/Image";
import NavLink from "../molecules/NavLink";
import NavDropdown from "../molecules/NavDropdown";

const serviceItems = [
  { label: "Digital Marketing", href: "/Our-Services/Digital-Marketing" },
  { label: "Web Development", href: "/Our-Services/Web-dev" },
  { label: "Software Solutions", href: "/Our-Services/Software-Solutions" },
  { label: "UX/UI Design", href: "/Our-Services/UX-UI" },
  { label: "Our Products", href: "/" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Nav */}
      <nav className="lg:pl-10 lg:pr-10 fixed rounded-[21px] w-4/5  mt-6 sm:mt-0 shadow-2xl sm:shadow-none sm:rounded-none sm:w-full h-[57px]  flex sm:flex-row lg:w-full items-center justify-between p-4 bg-white sm:bg-[#FFFFFF8C] top-0 z-50">
        <div className="flex items-center justify-center">
          <Logo src="/images/logo.png" alt="tesbious logo" width={46.48} height={41} />
          <p className="font-[600] text-[20px] sm:hidden ml-2">Tesbious</p>
        </div>

        <div className="sm:flex hidden sm:gap-0 md:gap-2 lg:gap-16 items-center">
          <NavLink label="HOME" href="/" />
          <NavLink label="ABOUT" href="/About-Us" />
          <NavDropdown label="SERVICES" items={serviceItems} href="/Our-Services" icon={<RiArrowDropDownLine size={30} />} />
          <NavLink label="PORTFOLIO" href="/Portfolio-Main" />
          <NavLink label="BLOG" href="/" />
          <NavButton
            classNameStyles="p-2 bg-[#111827] text-[10px] h-[36px] md:text-[14px] font-[600] text-white sm:w-[100px] md:w-[151px] md:h-[46px] rounded-[50px] hover:text-[#6329EC]"
            onClick={() => router.push("/contact-us")}
          >
            CONTACT US
          </NavButton>
        </div>

        {/* Mobile Toggle */}
        <div className="sm:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Animate Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-screen h-screen bg-white  rounded-[20px]  z-50 p-5 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center">
                <Logo src="/images/logo.png" alt="tesbious logo" width={46.48} height={41} />
                <p className="font-[600] text-[20px] ml-2">Tesbious</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6329EC]"
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:gap-6 text-[22px] font-[700]">
              <NavLink label="Home" href="/" />
              <NavLink label="About" href="/About-Us" />
              <NavDropdown
                label="Services"
                items={serviceItems}
                href="/Our-Services"
                icon={<RiArrowDropDownLine size={34}  />}
                mobile={true}
              />
              <NavLink label="Portfolio" href="/Portfolio-Main" />
              <NavLink label="Blog" href="/" />
              <NavButton
                classNameStyles="mt-6 p-2 bg-black text-white rounded-full w-fit px-6 text-[18px] font-bold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push("/Contact-Us");
                }}
              >
                Contact Us
              </NavButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
