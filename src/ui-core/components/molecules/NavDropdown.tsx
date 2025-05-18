import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  label: string;
  href?: string;
  items: DropdownItem[];
  icon?: React.ReactNode;
  mobile?: boolean;
}

const NavDropdown: React.FC<DropdownProps> = ({
  label,
  href,
  items,
  icon,
  mobile = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div
      className={`relative ${mobile ? "w-full" : ""}`}
      onMouseEnter={!mobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setIsOpen(false) : undefined}
    >
      {/* Trigger Button */}
      <button
  className={`flex items-center gap-1 ${
    mobile
      ? `w-full text-left text-[30px] font-[700] ${
          isOpen ? "text-[#6329EC]" : "text-black"
        }`
      : "p-2 text-[#413F3F] text-[14px] font-[600] hover:text-[#6329EC]"
  }`}
>
  <a href={href}> {label}</a>
  <div onClick={mobile ? toggleDropdown : undefined}>{icon}</div>
</button>

      {/* Desktop Dropdown with AnimatePresence */}
      {!mobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="desktop-dropdown"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-[220px] bg-white border border-t-[#6329EC] border-t-4 rounded-xl shadow-lg z-40"
            >
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-black text-[14px] font-[600] hover:text-[#6329EC]"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Mobile Dropdown with AnimatePresence */}
      {mobile && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-1 ml-4 flex flex-col gap-2 text-[16px] font-[500] overflow-hidden"
            >
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={closeDropdown}
                  className="text-black hover:text-[#6329EC] px-2 py-1"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavDropdown;
