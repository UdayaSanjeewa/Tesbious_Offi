import Image from "next/image";

type ToolItem = {
  name: string;
  icon: string;
};

type SectionItem = {
  title: string;
  points: string[];
};

interface ToolsTechnologiesProps {
  tools: ToolItem[];
  sections: SectionItem[];
}

export default function ToolsTechnologies({
  tools,
  sections,
}: ToolsTechnologiesProps) {
  return (
    <section className="sm:py-16 w-[350px] xl:px-4  sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1300px] sm:mx-auto">
      <h2 className="text-[20px] sm:text-[30px] md:text-[60px] font-[600] text-center mb-12">
        Tools & Technologies We Use.
      </h2>

      <div className="grid grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 xl:gap-10 mb-16">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:shadow-2xl rounded-[6.35px] sm:w-[100px] w-[60px] h-[60px] sm:h-[100px]"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              width={30}
              height={20}
              className="h-[70px]"
            />
            <p className="text-[12px] hidden sm:flex font-[500]">{tool.name}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="md:grid ml-[30px] sm:flex md:ml-0 sm:flex-col sm:items-center md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="sm:p-6 bg-white 2xl:w-[380px] 2xl:h-[390px] sm:shadow-xl rounded-2xl"
            >
              <h3 className="text-[26px] font-[600] mb-4">{section.title}</h3>
              <ul className="flex flex-col justify-evenly items-start text-[18px] font-[400] h-[290px]">
                {section.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex sm:items-center sm:justify-center w-[300px] sm:w-auto"
                  >
                    <span className="text-blue-500 text-[25px] font-[700] mr-3">
                      •
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
