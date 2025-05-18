import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Faq from "../components/organisms/OurServicesPages/Faq";
import IndustriesWeServe from "../components/organisms/OurServicesPages/IndustriesWeServe";
import PricingPlans from "../components/organisms/OurServicesPages/PricingPlans";
import WorkingProcess from "../components/organisms/OurServicesPages/WorkingProcess";
import HeroSection from "../components/organisms/OurServicesPages/HeroSection";
import BottomSection from "../components/organisms/ServicesPage/BottomSection";
import Solutions from "../components/organisms/OurServicesPages/Solutions";
import WhyChooseUs from "../components/organisms/OurServicesPages/WhyChooseUs";
import {
  ChartBarIcon,
  Cpu,
  MonitorSmartphone,
  Orbit,
  UserIcon,
} from "lucide-react";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaPlane,
  FaShieldAlt,
  FaStore,
} from "react-icons/fa";
import SolutionsMobile from "../components/organisms/OurServicesPages/SolutionsMobile";

export default function UXUI() {
  return (
    <div>
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>
      <HeroSection
        title="UX/UI design"
        description="Tesbious Technologies focuses on exceptional design for user-centric, visually appealing, and seamless digital products, blending creativity with functionality for intuitive and easy-to-use interfaces."
        points={[
          "Usability Testing & Iteration",
          "UI Design & Visual Branding",
          "Wireframing & Prototyping",
          "User Research & Analysis",
        ]}
        imageSrc="/images/services.jpg"
      />
      <WorkingProcess
        title="Our Working Process"
        description="At Tesbious Technologies, we deliver high-quality websites through a precise and efficient process."
        steps={[
          {
            number: "01",
            title: "Discovery",
            description:
              "Understand business goals, user needs, and technical requirements.",
          },
          {
            number: "02",
            title: "Design",
            description:
              "Develop wireframes, prototypes, and final UI designs.",
          },
          {
            number: "03",
            title: "Test",
            description:
              "Validate the design with user feedback and make necessary adjustments.",
          },
          {
            number: "04",
            title: "Deploy",
            description:
              "Support developers during implementation to ensure design fidelity",
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
            icon: <MonitorSmartphone size={32} />,
            title: "Cross Platform Consistency",
          },
          {
            icon: <ChartBarIcon size={32} />,
            title: "Data Driven Insights",
          },
        ]}
      />

      <div className="sm:flex hidden">
        <Solutions
          sectionTitle="UX/UI Design Services"
          solutions={[
            { title: "User Research & Analysis" },
            { title: "Information Architecture" },
            { title: "Wireframing & Prototyping" },
            { title: "Mobile & Web Design" },
            { title: "Interactive Design" },
            { title: "Design systems & style guides" },
          ]}
          solutionContents={{
            "User Research & Analysis": [
              {
                label: "Offer",
                text: "Comprehensive research to understand user behavior, needs, and pain points",
              },
              {
                label: "Includes",
                text: "User interviews and surveys, Competitive analysis & Data-driven insights",
              },
              {
                label: "Tools",
                text: "Analytics platforms, Heatmaps and session recordings & User persona creation frameworks.",
              },
              {
                label: "Strategies",
                text: "We gather valuable insights to design user-centric solutions that enhance engagement and meet your business objectives.",
              },
            ],
            "Information Architecture": [
              {
                label: "Offer",
                text: "Organized and intuitive information structures for seamless navigation",
              },
              {
                label: "Includes",
                text: "Sitemap creation, Navigation flow design & Categorization and content hierarchy",
              },
              {
                label: "Tools",
                text: "Card sorting techniques, Visual IA tools & User flow mapping software",
              },
              {
                label: "Strategies",
                text: "We structure your content logically, ensuring users can easily find what they need while enjoying a smooth experience",
              },
            ],
            "Wireframing & Prototyping": [
              {
                label: "Offer",
                text: "Blueprints and prototypes that visualize your digital product's functionality and design",
              },
              {
                label: "Includes",
                text: "Low-fidelity wireframes, Interactive prototypes & Usability testing",
              },
              {
                label: "Tools",
                text: "Wireframing software (eg: Figma, Sketch), Prototyping tools for interactive designs & Feedback integration platforms",
              },
              {
                label: "Strategies",
                text: "We bring your ideas to life with clear, functional prototypes, allowing early testing and refinements before development begins",
              },
            ],
            "Mobile & Web Design": [
              {
                label: "Offer",
                text: "Stunning, user-friendly designs tailored for mobile and web platforms",
              },
              {
                label: "Includes",
                text: "Custom UI/UX for mobile and desktop, Consistent cross-platform designs & Optimized layouts for performance",
              },
              {
                label: "Tools",
                text: "Mobile-first design frameworks, Responsive grid systems & High-quality visual design tools",
              },
              {
                label: "Strategies",
                text: "We craft visually appealing and functional designs, ensuring your brand resonates across all devices and platforms",
              },
            ],
            "Interactive Design": [
              {
                label: "Offer",
                text: "Engaging interactive elements that enhance user experience",
              },
              {
                label: "Includes",
                text: "Micro-interactions and animations, Gesture-based controls & Interactive visual storytelling",
              },
              {
                label: "Tools",
                text: "Animation libraries , Interaction design tools & Usability testing platforms",
              },
              {
                label: "Strategies",
                text: "We create intuitive and delightful interactions that keep users engaged and elevate your digital presence",
              },
            ],
            "Design systems & style guides": [
              {
                label: "Offer",
                text: "Standardized design systems for consistent and scalable design processes",
              },
              {
                label: "Includes",
                text: "Component libraries, Typography and color guides & Reusable templates",
              },
              {
                label: "Tools",
                text: "Design system management platforms, Collaboration tools for design and development & Style guide frameworks",
              },
              {
                label: "Strategies",
                text: "We build comprehensive style guides and systems that ensure consistency and efficiency across all your design projects.",
              },
            ],
          }}
        />
      </div>
      <div className="sm:hidden">
        <SolutionsMobile
          imageUrl="/images/service1.png"
          services={[
            "User Research & Analysis",
            "Mobile & Web Design",
            "Information Architecture",
            "Interactive Design",
            "Wireframing & Prototyping",
            "Design systems & style guides",
          ]}
          title="UX/UI Design Services"
        />
      </div>
      <IndustriesWeServe
        description={`By creating websites that reflect your industry’s standards and enhance your brand, we help grow your business online. Our industry-specific web solutions are optimized for performance, user experience, and conversions, ensuring your website drives real business results.`}
        industries={[
          {
            icon: <FaShieldAlt className="text-[40px] xl:text-[73px]" />,
            title: "Healthcare",
            description:
              "User-friendly patient portals, telehealth platforms, and health tracking apps.",
          },
          {
            icon: <FaGraduationCap className="text-[40px] xl:text-[73px] " />,
            title: "Education",
            description:
              "Interactive e-learning platforms and intuitive dashboards for educators and students.",
          },
          {
            icon: <FaMoneyBillWave className="text-[40px] xl:text-[73px]" />,
            title: "Finance",
            description:
              "Secure, transparent, and user-friendly banking and fintech applications.",
          },
          {
            icon: <FaStore className="text-[40px] xl:text-[73px] " />,
            title: "Retail & E-Commerce",
            description:
              " Intuitive product catalogs, smooth checkout processes, and personalized user journeys.",
          },
          {
            icon: <Orbit size={73} className="w-[40px] xl:text-[73px]" />,
            title: "Technology & Startups",
            description:
              "MVPs, SaaS platforms, and mobile apps that captivate early adopters.",
          },
          {
            icon: <FaPlane className="text-[40px] xl:text-[73px] " />,
            title: "Tourism",
            description:
              "Attractive and functional websites with online booking systems, travel packages, and destination guides.",
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
              "Simple, user-friendly UX/UI design to enhance functionality for small projects.",
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
              "Detailed UX research and polished UI design for intuitive, engaging user experiences.",
            features: [
              "5 Pages",
              "Responsive Design",
              "Motion Design",
              "SEO & customization",
              "Content & Blog",
              "Speed Optimization",
            ],
            highlighted: true,
          },
          {
            name: "Premium",
            price: 560,
            description:
              "Comprehensive UX/UI overhaul with prototyping, testing, and premium design customization.",
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
            question: "What  UX/UI services do you provide?",
            answer:
              "We offer a wide range of services, including User Research & Analysis, Wireframing & Prototyping, Information Architecture, Mobile & Web Design, Interactive Design, and Design Systems & Style Guides.",
          },
          {
            question: "How long does it take to complete a UX/UI project?",
            answer:
              "The timeline depends on the complexity and scope of the project. On average, a small project may take 4-6 weeks, while larger projects can take 8—12 weeks or more.",
          },
          {
            question: "Do you provide usability testing for designs?",
            answer:
              "Yes, usability testing is a key part of our process. We test designs with real users to gather feedback, identify pain points, and refine the user experience.",
          },
          {
            question:
              "Can you help with redesigning an existing website or app?",
            answer:
              "Absolutely! We specialize in both designing from scratch and redesigning existing digital products to improve usability, aesthetics, and overall performance.",
          },
          {
            question:
              "Do you create responsive designs for mobile and web platforms?",
            answer:
              "Yes, all our designs are fully responsive and optimized for seamless functionality across devices, including desktops, tablets, and smartphones.",
          },
        ]}
      />
      <BottomSection />
      <Footer />
    </div>
  );
}
