import React from "react";

interface FooterLinksProps {
  title: string;
  links: { name: string; url: string }[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links}) => {
  return (
    <div>
      <h3 className={`text-gray-500 font-[600] text-[21px] mb-3 group-hover:text-[#6C63FF]`}>
        {title}
      </h3>
      <ul className="space-y-2 pt-[70px]">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-white flex flex-col pt-2 font-[500] text-[16px] transition-transform duration-[1000ms] hover:translate-x-8"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
