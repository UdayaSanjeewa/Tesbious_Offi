import ServiceSections from "../../molecules/HomePage/ServiceSection";
import { useRouter } from "next/navigation";
import ServiceSectionMobile from "../../molecules/HomePage/ServiceSectionMobile";

const ServicesSection = () => {
  const router = useRouter();

  return (
    <div>
      <div className="hidden sm:flex flex-col items-center justify-center h-[1211px] gap-20 bg-[#111827]">
        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/Web-dev");
          }}
          number="01"
          title="Web Development"
          paragraph="Our team builds robust, scalable, and responsive websites tailored to your business needs, using the latest technologies and best practices."
        />
        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/Digital-Marketing");
          }}
          number="02"
          title="Digital Marketing"
          paragraph="We offer comprehensive digital marketing services, including SEO, social media marketing, and PPC, to help you reach and engage your target audience effectively."
        />
        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/Software-Solutions");
          }}
          number="03"
          title="Software Solutions"
          paragraph="From custom software development to enterprise solutions, we deliver software that enhances efficiency and drives business growth."
        />

        <ServiceSections
          onClick={() => {
            router.push("/Our-Services/UX-UI");
          }}
          number="04"
          title="UI/UX Design"
          paragraph="We create interactive and engaging user interfaces that provide a seamless user experience, ensuring your customers enjoy every interaction with your brand."
        />
      </div>

      {/* Mobile */}
      <div className="w-full sm:hidden items-center pb-10 flex flex-col">
        <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Web-dev");
          }}
          number="01"
          title="Web Development"
          paragraph="Our team builds robust, scalable, and responsive websites tailored to your business needs, using the latest technologies and best practices."
        />
        <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Digital-Marketing");
          }}
          number="02"
          title="Digital Marketing"
          paragraph="We offer comprehensive digital marketing services, including SEO, social media marketing, and PPC, to help you reach and engage your target audience effectively."
        />
        <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Software-Solutions");
          }}
          number="03"
          title="Software Solutions"
          paragraph="From custom software development to enterprise solutions, we deliver software that enhances efficiency and drives business growth."
        />
        <ServiceSectionMobile
          onClick={() => {
            router.push("/Our-Services/Software-Solutions");
          }}
          number="04"
          title="UI/UX Design"
          paragraph="We create interactive and engaging user interfaces that provide a seamless user experience, ensuring your customers enjoy every interaction with your brand."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
