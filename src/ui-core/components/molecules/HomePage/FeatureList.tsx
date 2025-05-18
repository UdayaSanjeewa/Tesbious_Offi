import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Advanced Web Development",
  "Result-Driven Digital Marketing",
  "Efficient Software Solutions",
];

export const FeatureList: React.FC = () => (
  <ul className="space-y-2">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center gap-5 ">
        <span className="text-[#6329EC] text-xl">
          <FaCheckCircle size={24} />
        </span>
        <span className="text-black md:text-[20px] font-[500]">{feature}</span>
      </li>
    ))}
  </ul>
);
