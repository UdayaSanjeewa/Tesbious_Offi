import React from "react";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => (
  <a
    href={href}
    className="sm:p-2 text-[30px]  sm:text-[#413F3F] sm:text-[14px] sm:font-[600] hover:text-[#6329EC]"
  >
    {label}
  </a>
);

export default NavLink;
