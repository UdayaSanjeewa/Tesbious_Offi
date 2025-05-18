import Footer from "../components/organisms/Footer";
import CommentsMobile from "../components/organisms/HomePage/CommentsMobile";
import Navbar from "../components/organisms/Navbar";
import BottomSection from "../components/organisms/ServicesPage/BottomSection";
import ClientComments from "../components/organisms/ServicesPage/ClientComments";
import Heading from "../components/organisms/ServicesPage/Heading";
import ServicesSection from "../components/organisms/ServicesPage/ServicesSection";

const Services = () => {
  return (
    <div className="bg-[#6C63FF14] sm:bg-white">
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>
      <Heading />
      <ServicesSection />
      <div className="hidden sm:flex">
        <ClientComments />
      </div>

      <div className="sm:hidden">
        <CommentsMobile />
      </div>

      <BottomSection />
      <Footer />
    </div>
  );
};

export default Services;
