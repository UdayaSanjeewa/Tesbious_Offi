import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Faq from "../components/organisms/OurServicesPages/Faq";
import HeroSection from "../components/organisms/OurServicesPages/HeroSection";
import IndustriesWeServe from "../components/organisms/OurServicesPages/IndustriesWeServe";
import PricingPlans from "../components/organisms/OurServicesPages/PricingPlans";
import WorkingProcess from "../components/organisms/OurServicesPages/WorkingProcess";
import BottomSection from "../components/organisms/ServicesPage/BottomSection";
import Solutions from "../components/organisms/OurServicesPages/Solutions";
import WhyChooseUs from "../components/organisms/OurServicesPages/WhyChooseUs";
import { UserIcon, Expand, Users } from "lucide-react";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaPlane,
  FaShieldAlt,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import SolutionsMobile from "../components/organisms/OurServicesPages/SolutionsMobile";

export default function WebDevelopment() {
  return (
    <div>
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>
      <HeroSection
        title="Web Development"
        description="At Tesbious Technologies, we specialize in transforming digital presence through innovative web development, strategic digital marketing, and advanced software solutions. With years of experience, our dedicated team delivers tailored strategies to help businesses thrive and achieve their unique goals in a competitive digital world."
        points={[
          "Web Design & Development",
          "E-commerce Solutions",
          "SEO Optimization",
          "Content Creation",
        ]}
        imageSrc="/images/services.jpg"
      />

      <WorkingProcess
        title="Our Working Process"
        description="At Tesbious Technologies, we deliver high-quality websites through a precise and efficient process."
        steps={[
          {
            number: "01",
            title: "Understand",
            description:
              "We analyze your business, audience, and goals to create the perfect solution.",
          },
          {
            number: "02",
            title: "Design",
            description:
              "Crafting visually stunning and user-friendly website layouts.",
          },
          {
            number: "03",
            title: "Development & Testing",
            description:
              "Building secure, high-performing websites with thorough quality checks.",
          },
          {
            number: "04",
            title: "Launch & Support",
            description:
              "Smooth deployment with continuous updates and support.",
          },
        ]}
      />
      <WhyChooseUs
        features={[
          {
            icon: <UserIcon size={32} />,
            title: "Client Centric Approach",
          },
          {
            icon: <Users size={32} />,
            title: "Expert Team",
          },
          {
            icon: <Expand size={32} />,
            title: "Scalable Solutions",
          },
        ]}
      />
      <div className="sm:flex hidden ">
        <Solutions
          sectionTitle="Software Solutions"
          solutions={[
            { title: "Custom Web Design" },
            { title: "E-Commerce Solutions" },
            { title: "Content Management Systems (CMS)" },
            { title: "Search Engine Optimization (SEO)" },
            { title: "Responsive Design" },
            { title: "Website Maintenance" },
          ]}
          solutionContents={{
            "Custom Web Design": [
              {
                label: "Offer",
                text: "Unique and visually stunning website designs tailored to your brand identity.",
              },
              {
                label: "Includes",
                text: "Custom UI/UX design, Interactive and user-friendly layouts & Brand-aligned visuals",
              },
              {
                label: "Tools",
                text: "Wireframing and prototyping tools, Modern design frameworks & High-quality graphics and animations",
              },
              {
                label: "Strategies",
                text: "We create engaging, responsive websites that captivate visitors and reflect your brand’s vision, helping you stand out in the digital space.",
              },
            ],
            "E-Commerce Solutions": [
              {
                label: "Offer",
                text: "Comprehensive e-commerce solutions to launch and grow your online store.",
              },
              {
                label: "Includes",
                text: "Custom online store development, Secure payment gateway integration & Inventory and order management",
              },
              {
                label: "Tools",
                text: "Shopping cart systems, User-friendly product catalogs & Secure transaction systems",
              },
              {
                label: "Strategies",
                text: "We build scalable and secure e-commerce platforms designed to boost sales and provide a seamless shopping experience for your customers.",
              },
            ],
            "Content Management Systems (CMS)": [
              {
                label: "Offer",
                text: "Easy-to-manage websites with powerful content management systems.",
              },
              {
                label: "Includes",
                text: "Custom CMS development, User-friendly dashboards & Content creation and editing tools",
              },
              {
                label: "Tools",
                text: "Dynamic content frameworks, Secure admin panels & Plugin and module integration",
              },
              {
                label: "Strategies",
                text: "We empower you to manage your content effortlessly, keeping your website updated and aligned with your business goals.",
              },
            ],
            "Search Engine Optimization (SEO)": [
              {
                label: "Offer",
                text: "Effective SEO strategies to improve your website’s visibility and drive organic traffic.",
              },
              {
                label: "Includes",
                text: "Keyword research and optimization, On-page and off-page SEO & Technical SEO audits",
              },
              {
                label: "Tools",
                text: "SEO analytics tools, Performance monitoring platforms & Link-building strategies",
              },
              {
                label: "Strategies",
                text: "We optimize your website to rank higher on search engines, ensuring more visibility, traffic, and conversions for your business.",
              },
            ],
            "Responsive Design": [
              {
                label: "Offer",
                text: "Mobile-friendly and responsive web designs for flawless user experiences across all devices.",
              },
              {
                label: "Includes",
                text: "Adaptive design for all screen sizes, Mobile-first design strategy & Cross-browser compatibility",
              },
              {
                label: "Tools",
                text: "Fluid grids and flexible layouts, Touch-friendly interfaces & Device testing tools",
              },
              {
                label: "Strategies",
                text: "We ensure your website looks and performs perfectly on every device, enhancing user engagement and satisfaction.",
              },
            ],
            "Website Maintenance": [
              {
                label: "Offer",
                text: "Reliable website maintenance to keep your site secure, updated, and running smoothly.",
              },
              {
                label: "Includes",
                text: "Regular updates and backups, Security monitoring & Performance optimization",
              },
              {
                label: "Tools",
                text: "Automated backup systems, Security scanning tools & Uptime monitoring",
              },
              {
                label: "Strategies",
                text: "We provide ongoing support to prevent downtime, enhance security, and ensure your website stays fast, functional, and up-to-date.",
              },
            ],
          }}
        />
      </div>
      <div className="sm:hidden">
        <SolutionsMobile
          imageUrl="/images/service1.png"
          services={[
            "E-Commerce Solutions",
            "Content Management Systems",
            "Search Engine Optimization",
            "Responsive Design",
            "Website Maintenance",
            "Custom Web Design",
          ]}
          title="Software Solutions"
        />
      </div>
      <IndustriesWeServe
        description={`By creating websites that reflect your industry’s standards and enhance your brand, we help grow your business online. Our industry-specific web solutions are optimized for performance, user experience, and conversions, ensuring your website drives real business results.`}
        industries={[
          {
            icon: <FaShieldAlt className="text-[40px] xl:text-[73px] " />,
            title: "Healthcare",
            description:
              "User-friendly healthcare websites, appointment booking systems, and patient information portals.",
          },
          {
            icon: <FaGraduationCap className="text-[40px] xl:text-[73px] " />,
            title: "Education",
            description:
              "Interactive e-learning websites, online course platforms, and student management portals.",
          },
          {
            icon: <FaMoneyBillWave className="text-[40px] xl:text-[73px]" />,
            title: "Finance",
            description:
              "Secure financial websites with user dashboards, transaction portals, and payment integrations.",
          },
          {
            icon: <FaStore className="text-[40px] xl:text-[73px] " />,
            title: "Retail & E-Commerce",
            description:
              "Custom e-commerce websites with product catalogs, secure checkout systems, and customer portals.",
          },
          {
            icon: <FaTruck className="text-[40px] xl:text-[73px] " />,
            title: "Logistics & Transportation",
            description:
              "Websites for shipment tracking, route planning, and logistics services showcasing.",
          },
          {
            icon: <FaPlane className="text-[40px] xl:text-[73px] " />,
            title: "Tourism",
            description:
              "Attractive and functional websites with online booking systems, travel packages, and destination guides.",
          },
        ]}
      />
      <PricingPlans
        sectionTitle="Choose the Plan that fits your needs."
        plans={[
          {
            name: "Basic",
            price: 120,
            description:
              "Cost-effective website creation with essential features, ideal for startups and small businesses.",
            features: [
              "3 Pages / SPA",
              "Design",
              "Redesign",
              "Social Media",
              "Basic SEO",
            ],
          },
          {
            name: "Standard",
            price: 275,
            description:
              "Robust web development with custom design, CMS integration, and ongoing support.",
            features: [
              "5 Pages",
              "Responsive Design",
              "Motion Design",
              "SEO & Customization",
              "Content & Blog",
              "Speed Optimization",
            ],
            highlighted: true,
          },
          {
            name: "Premium",
            price: 560,
            description:
              "Advanced, scalable websites with e-commerce, SEO optimization, and priority maintenance.",
            features: [
              "10 Pages",
              "Responsive Design",
              "Speed Optimization",
              "Motion Design",
              "SEO & Customization",
              "Content & Blog",
            ],
          },
        ]}
      />
      <Faq
        sectionTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "Will my website be mobile-friendly?",
            answer:
              "Yes, all our websites are fully responsive, ensuring they look great and function seamlessly on all devices.",
          },
          {
            question: "Do I need to provide website content?",
            answer:
              "Yes, providing text, images, and other materials helps us align the website with your vision and brand identity.",
          },
          {
            question: "Will my website be optimized for SEO?",
            answer:
              "Absolutely! We include SEO best practices in all our projects to improve search engine visibility and drive organic traffic.",
          },
          {
            question: "Can you integrate third-party APIs?",
            answer:
              "Yes, we can integrate APIs such as payment gateways, social media feeds, or other tools to enhance your website's features.",
          },
          {
            question: "Do you offer ongoing support?",
            answer:
              "Yes, we provide a month of complimentary support after launch and offer extended support packages upon request.",
          },
        ]}
      />
      <BottomSection />
      <Footer />
    </div>
  );
}
