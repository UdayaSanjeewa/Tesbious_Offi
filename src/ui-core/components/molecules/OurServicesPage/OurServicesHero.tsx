// src/components/organixls/ServiceHero/ServiceHero.tsx

import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: string;
}

const OurServicesHero: React.FC<ServiceHeroProps> = ({
  title,
  description,
  points,
  imageSrc,
}) => {
  return (
    <section className="py-16 px-4 ">
      <h1 className="text-[36px] xl:text-[80px] md:text-[50px] md:ml-10 font-[700] text-[#6C63FF] sm:ml-12 m-4 sm:m-0 mb-0  mt-10 xl:m-10 2xl:ml-[150px]">{title}</h1>

      <div className="flex flex-col sm:w-[500px] md:w-auto md:flex-row items-center md:justify-evenly sm:mt-10 md:mt-5 sm:gap-[50px] md:gap-5 lg:gap-0 2xl:gap-[150px] max-w-7xl mx-auto">
        <div className="hidden sm:flex">
          <div className="sm:w-[500px] lg:w-[450px] lg:h-[300px] md:w-[350px] md:h-[250px] sm:h-[300px] xl:w-[600px] 2xl:w-[666px] xl:h-[364px]">
            <Image
              src={imageSrc}
              alt={title}
              width={666}
              height={364}
              className="object-cover w-full h-full rounded-[15px]"
            />
          </div>
        </div>

        <div className="text-left m-4 sm:m-0 md:w-[400px]">
          <p className="text-gray-700 text-[13px] lg:text-[15px] mt-5 xl:mt-0 xl:w-[440px] 2xl:w-[542px] xl:text-[22px] font-[400] mb-6">{description}</p>

          <ul className="list-disc md:leading-6 md:ml-10 list-inside marker:text-[#6329EC] marker:text-[24px] xl:ml-[80px] xl:space-y-2">
            {points.map((point, index) => (
              <li key={index} className=" text-[14px] xl:text-[19px] text-black">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
