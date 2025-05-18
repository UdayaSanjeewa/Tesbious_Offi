interface Step {
  number: string;
  title: string;
  description: string;
}

interface WorkingProcessProps {
  title: string;
  description: string;
  steps: Step[];
}

const WorkingProcess: React.FC<WorkingProcessProps> = ({
  description,
  steps,
  title,
}) => {
  return (
    <div>
      <section className="bg-[#111827] hidden sm:flex sm:h-[550px] xl:h-[962px] lg:h-[760px] text-[#E6E6E680] sm:px-5 sm:py-5  xl:py-20 xl:px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="sm:text-[30px] xl:text-[60px] font-[600] lg:text-[40px] text-white xl:mb-6">
            {title}
          </h2>
          <p className="xl:text-[20px] sm:text-[14px] font-[400] lg:text-[18px] xl:w-[732px]">
            {description}
          </p>

          {/* Zig-Zag Horizontal Steps */}
          <div className="flex items-center justify-center sm:mt-[150px] xl:gap-24 sm:gap-5 md:gap-6 relative lg:gap-10 lg:mt-[180px] xl:mt-[200px]">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Position the circle */}
                <div
                  className={`flex flex-col items-center ${
                    index % 2 === 0
                      ? "sm:translate-y-[40px] md:translate-y-[55px] xl:translate-y-[60px]"
                      : "sm:translate-y-[-100px] md:translate-y-[-120px] xl:translate-y-[-140px]"
                  }`}
                >
                  {/* Circle */}
                  <div className="sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] rounded-full border-[2px] hover:bg-[#6C63FF] group transition duration-200 hover:text-white border-gray-400 flex flex-col justify-center items-center">
                    <span className="xl:text-[35px] text-outline-gray group-hover:text-white font-[700] sm:text-[18px] lg:text-[25px] text-[#111827]">
                      {step.number}
                    </span>
                    <span className="font-bold sm:text-[14px] lg:text-[25px] xl:text-[25px] xl:w-[200px] text-center mt-2">
                      {step.title}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 sm:text-[12px] sm:max-w-[145px] md:max-w-[160px] xl:max-w-[200px] lg:text-[17px] text-center">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute sm:right-[-53px] sm:top-[30px] md:top-[42px] lg:top-[70px] lg:right-[-70px]  md:right-[-60px] xl:right-[-130px] xl:top-[70px] transform -translate-y-1/2">
                    <div
                      className={`sm:w-[86px] md:w-[100px] lg:w-[100px] xl:w-[165px] h-0.5 bg-gray-400 ${
                        index % 2 === 0 ? "-rotate-45" : "rotate-45"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* mobile */}
      <div className="sm:hidden flex flex-col gap-2 items-center ">
        <p className="text-center text-[32px] font-[600]">Our Working Process</p>
        <p className="text-[13px] font-[400] w-[320px]">We follow a 4-step process in digital marketing to deliver impactful campaigns and measurable results.</p>
      </div>
      <div className="sm:hidden text-white h-[700px] w-full items-center flex flex-col justify-evenly">
        <div className="w-[340px] rounded-[21px] h-[144px] hover:bg-[#9747FF] transition duration-200 bg-[#1C0B33]">
          <div className="flex text-[20px] m-4 mt-6 gap-2 font-[600]">
            <p>{steps[0].number}.</p>
            <p>{steps[0].title}</p>
          </div>
          <p className="text-[15px] m-4 text-white/75 font-[400]">
            {steps[0].description}
          </p>
        </div>
        <div className="w-[340px] rounded-[21px] h-[144px] hover:bg-[#9747FF] transition duration-200 bg-[#2F1155]">
          <div className="flex text-[20px] m-4 mt-6 gap-2 font-[600]">
            <p>{steps[1].number}.</p>
            <p>{steps[1].title}</p>
          </div>
          <p className="text-[15px] m-4 text-white/75 font-[400]">
            {steps[1].description}
          </p>
        </div>
        <div className="w-[340px] rounded-[21px] h-[144px] hover:bg-[#9747FF] transition duration-200 bg-[#4F2981]">
          <div className="flex text-[20px] m-4 mt-6 gap-2 font-[600]">
            <p>{steps[2].number}.</p>
            <p>{steps[2].title}</p>
          </div>
          <p className="text-[15px] m-4 text-white/75 font-[400]">
            {steps[2].description}
          </p>
        </div>
        <div className="w-[340px] rounded-[21px] h-[144px] hover:bg-[#9747FF] transition duration-200 bg-[#8241D8]">
          <div className="flex text-[20px] m-4 mt-6 gap-2 font-[600]">
            <p>{steps[3].number}.</p>
            <p>{steps[3].title}</p>
          </div>
          <p className="text-[15px] m-4 text-white/75 font-[400]">
            {steps[3].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
