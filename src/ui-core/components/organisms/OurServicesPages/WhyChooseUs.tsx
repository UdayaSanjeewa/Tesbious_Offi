// components/WhyChooseUs.tsx
import { FC } from "react";

interface Feature {
  icon: React.ReactNode;
  title: string;
}

interface WhyChooseUsProps {
  features: Feature[];
}

const WhyChooseUs: FC<WhyChooseUsProps> = ({ features }) => {
  return (
    <section className="flex flex-col items-center py-16 px-4">
      <h2 className="text-3xl font-bold sm:mb-10 text-center">Why Choose Us</h2>
      <div className="sm:bg-white rounded-2xl p-8 flex flex-col  sm:flex-row gap-8 md:gap-20 items-center sm:shadow-[0_0_60px_rgba(165,94,234,0.2)] justify-center w-full max-w-6xl mx-auto" >
        {features.map((feature, index) => (
          <div key={index} className="flex bg-white sm:bg-none justify-evenly items-center sm:gap-4 w-[340px] h-[70px] sm:h-auto sm:w-auto shadow-[0_0_60px_rgba(165,94,234,0.2)] sm:shadow-none"  >
            <div className="text-indigo-500  text-4xl">
              {feature.icon}
            </div>
            <h3 className="sm:text-lg w-[210px] sm:w-auto font-[400] text-[16px] sm:font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
