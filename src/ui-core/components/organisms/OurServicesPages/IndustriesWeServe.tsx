import {
  FaShieldAlt,
  FaGraduationCap,
  FaMoneyBillWave,
  FaStore,
  FaTruck,
  FaPlane,
} from "react-icons/fa";

interface Industry {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface IndustriesWeServeProps {
  description: string;
  industries: Industry[];
}

const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({
  description,
  industries,
}) => {
  return (
    <section className="py-16 px-4 text-white">
      <div className="sm:w-[600px] md:w-[700px] lg:w-[750px] xl:w-[1000px]  2xl:w-[1400px] flex flex-col items-center sm:items-start sm:pb-10 sm:h-auto  h-[960px] 2xl:h-[652px] bg-[#111827] mx-auto rounded-[15px]">
        <h2 className="text-3xl font-bold sm:pl-10 xl:pl-[50px] pt-[50px] mb-6">
          Industries We Serve.
        </h2>
        <p className="text-white p-5 pt-0 sm:pl-10 xl:p-0 pb-0 xl:pl-[50px] xl:w-[990px]">
          {description}
        </p>

        <div className="flex bg-white w-[300px] items-center rounded-[15px] sm:w-full sm:h-auto sm:bg-[#111827] justify-evenly mt-[30px] xl:mt-[80px] flex-wrap sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-[14px]  sm:w-[190px] w-[300px] h-[100px] sm:h-[265px] sm:p-6 text-black flex flex-row sm:flex-col items-center xl:text-center"
            >
              <div className="text-[#111827] ml-5 sm:ml-0 sm:text-black">
                {industry.icon}
              </div>

              <div className="w-[250px] sm:w-auto pl-10 sm:pl-0">
                <h3 className="text-[12px] font-[600] text-center sm:text-[17px] sm:font-[400] sm:h-[40px] sm:mt-5 capitalize sm:mb-2">
                  {industry.title}
                </h3>
                <p className="sm:text-[11px] text-[10px] font-[400] text-[#1C1C1E99]/60  sm:font-[400] sm:text-gray-600">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
