const HeroTItle = () => {
  return (
    <div>
      <div className="text-[64px] w-full leading-[1] sm:leading-[1.1] sm:text-[45px] sm:justify-center sm:gap-4 md:text-[50px] lg:text-[75px] xl:text-[100px] font-[700] flex flex-col sm:flex-row md:gap-8">
        <p className="text-[#6C63FF] sm:text-[#6329ECD9]">Tesbious</p>
        <p className="text-white sm:text-black">Global</p>
        <p className="text-white sm:text-black">Solutions</p>
      </div>
      <div className="md:text-[26px] lg:text-[40px] xl:text-[50px] sm:text-[23px] hidden sm:flex sm:justify-center font-[600] text-center">
        <p>Empowering Your Journey To Digital Excellence</p>
      </div>
    </div>
  );
};

export default HeroTItle;
