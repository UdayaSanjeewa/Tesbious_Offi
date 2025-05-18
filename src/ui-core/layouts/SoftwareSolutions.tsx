import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Faq from "../components/organisms/OurServicesPages/Faq";
import HeroSection from "../components/organisms/OurServicesPages/HeroSection";
import IndustriesWeServe from "../components/organisms/OurServicesPages/IndustriesWeServe";
import WorkingProcess from "../components/organisms/OurServicesPages/WorkingProcess";
import BottomSection from "../components/organisms/ServicesPage/BottomSection";
import Solutions from "../components/organisms/OurServicesPages/Solutions";
import ToolsTechnologies from "../components/organisms/OurServicesPages/ToolsTechhnologies";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaShieldAlt,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import { Factory } from "lucide-react";
import SolutionsMobile from "../components/organisms/OurServicesPages/SolutionsMobile";

export default function SoftwareSolutions() {
  return (
    <div>
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>
      <HeroSection
        title="Software Solutions"
        description="Tesbious Technologies provides comprehensive software development services to help businesses achieve operational excellence and sustainable growth. We specialize in designing, developing, and deploying tailored software solutions that meet the unique needs of our clients, ensuring their competitiveness in the digital age."
        points={[
          "Consultation & Requirement Analysis",
          "Quality Assuarance & Testing",
          "Deployment & Integration",
          "Support & Maintenance",
        ]}
        imageSrc="/images/services.jpg"
      />
      <WorkingProcess
        title="Our Working Process"
        description="Our software development team utilizes industry-leading tools, technologies, and frameworks to create robust and scalable solutions."
        steps={[
          {
            number: "01",
            title: "Planning & Discovery",
            description: "Define the project scope, goals, and requirements.",
          },
          {
            number: "02",
            title: "Design & Development",
            description:
              "Create the solution architecture and build the product.",
          },
          {
            number: "03",
            title: "Testing & QA",
            description:
              "Ensure the product meets quality standards and functions correctly.",
          },
          {
            number: "04",
            title: "Deployment & Support",
            description:
              "Launch the product and provide ongoing maintenance and updates.",
          },
        ]}
      />
      <div className="hidden sm:flex">
        <Solutions
          sectionTitle="Software Solutions"
          solutions={[
            { title: "Enterprise Software Solutions" },
            { title: "SaaS Development" },
            { title: "Mobile Application Development" },
            { title: "Cloud-Based Solutions" },
            { title: "API Development & Integration" },
            { title: "Business Automation Softwares" },
          ]}
          solutionContents={{
            "Enterprise Software Solutions": [
              {
                label: "Offer",
                text: "Custom enterprise software tailored to streamline business operations and enhance productivity.",
              },
              {
                label: "Includes",
                text: "End-to-end software development, System integration & Workflow automation",
              },
              {
                label: "Tools",
                text: "Project management systems, ERP and CRM platforms & Custom analytics tools",
              },
              {
                label: "Strategies",
                text: "We focus on scalable, secure, and flexible solutions that evolve with your business needs, ensuring long-term growth and efficiency.",
              },
            ],
            "SaaS Development": [
              {
                label: "Offer",
                text: "Innovative Software as a Service (SaaS) solutions designed to deliver value and scalability.",
              },
              {
                label: "Includes",
                text: "Custom SaaS product development, Subscription management systems & Secure cloud hosting",
              },
              {
                label: "Tools",
                text: "Cloud infrastructure, Payment gateway integration & User management systems",
              },
              {
                label: "Strategies",
                text: "We create scalable, user-friendly SaaS applications with secure and reliable architecture for long-term success.",
              },
            ],
            "Mobile Application Development": [
              {
                label: "Offer",
                text: "High-performance mobile apps for iOS and Android that engage users and drive results.",
              },
              {
                label: "Includes",
                text: "Native and cross-platform app development, UI/UX design for mobile interfaces & App testing and deployment",
              },
              {
                label: "Tools",
                text: "User-friendly design frameworks, Cloud integration & Push notifications and analytics",
              },
              {
                label: "Strategies",
                text: "We focus on intuitive, responsive, and user-centered designs to maximize engagement and user retention.",
              },
            ],
            "Cloud-Based Solutions": [
              {
                label: "Offer",
                text: "Effective SEO strategies to improve your website’s visibility and drive organic traffic.Flexible and scalable cloud solutions to enhance business agility and performance.",
              },
              {
                label: "Includes",
                text: "Cloud infrastructure setup, Data migration and management & Cloud security and compliance",
              },
              {
                label: "Tools",
                text: "Cloud storage systems, Virtual servers & Backup and disaster recovery solutions",
              },
              {
                label: "Strategies",
                text: "We provide secure, scalable cloud solutions that optimize operations and reduce costs.",
              },
            ],
            "API Development & Integration": [
              {
                label: "Offer",
                text: "Seamless API development and integration for smooth system interoperability.",
              },
              {
                label: "Includes",
                text: "Custom API design and development , Third-party API integration & API testing and security",
              },
              {
                label: "Tools",
                text: "RESTful and GraphQL APIs , Payment gateway APIs & Social media integrations",
              },
              {
                label: "Strategies",
                text: "Our APIs ensure seamless data exchange, enhancing system functionality and business automation.",
              },
            ],
            "Business Automation Softwares": [
              {
                label: "Offer",
                text: "Custom automation solutions to streamline business processes and boost efficiency.",
              },
              {
                label: "Includes",
                text: "Workflow automation tools, Task management systems & Data processing automation",
              },
              {
                label: "Tools",
                text: "CRM and ERP integrations, AI-powered automation tools & Custom dashboards and reports",
              },
              {
                label: "Strategies",
                text: "We automate repetitive tasks and processes to reduce manual effort, improve accuracy, and save time.",
              },
            ],
          }}
        />
      </div>
      <div className="sm:hidden">
        <SolutionsMobile
          imageUrl="/images/service1.png"
          services={[
            "Enterprise Software Solutions",
            "cloud based solutions",
            "SaaS Development",
            "API Development & Integration",
            "Mobile Application Development",
            "Business Automation Software",
          ]}
          title="Software Solutions"
        />
      </div>
      <IndustriesWeServe
        description={`By developing software solutions that align with your industry’s standards and enhance your operations, we help grow your business. Our industry-specific software is optimized for performance, usability, and efficiency, ensuring that it drives real business results and accelerates your growth.`}
        industries={[
          {
            icon: <FaShieldAlt className="text-[40px] xl:text-[73px]" />,
            title: "Healthcare",
            description:
              "Custom healthcare platforms, patient portals, and health tracking apps",
          },
          {
            icon: <FaGraduationCap className="text-[40px] xl:text-[73px]" />,
            title: "Education",
            description:
              "E-learning platforms, student management systems, and educational apps",
          },
          {
            icon: <FaMoneyBillWave className="text-[40px] xl:text-[73px]" />,
            title: "Finance",
            description:
              "Secure, transparent, and user-friendly fintech applications and payment gateways",
          },
          {
            icon: <FaStore className="text-[40px] xl:text-[73px]" />,
            title: "Retail & E-Commerce",
            description:
              " Inventory management, customer portals, and online storefronts.",
          },
          {
            icon: <FaTruck className="text-[40px] xl:text-[73px]" />,
            title: "Logistics & Transportation",
            description:
              "Fleet management, route optimization, and tracking software.",
          },
          {
            icon: <Factory size={73} className="w-[40px] xl:text-[73px]" />,
            title: "Manufacturing",
            description:
              "ERP systems, production tracking, and supply chain management software.",
          },
        ]}
      />

      <ToolsTechnologies
        tools={[
          { name: "Python", icon: "/images/Technologies/python.svg" },
          { name: "JavaScript", icon: "/images/Technologies/javaScript.svg" },
          { name: "Java", icon: "/images/Technologies/java.svg" },
          { name: "PHP", icon: "/images/Technologies/php.svg" },
          { name: "React", icon: "/images/Technologies/react.svg" },
          { name: "Django", icon: "/images/Technologies/django.svg" },
          { name: ".NET", icon: "/images/Technologies/dotnet.svg" },
          { name: "MySQL", icon: "/images/Technologies/mysql.svg" },
          { name: "AWS", icon: "/images/Technologies/aws.svg" },
          { name: "Google Cloud", icon: "/images/Technologies/google.svg" },
          { name: "Firebase", icon: "/images/Technologies/firebase.svg" },
          { name: "MongoDB", icon: "/images/Technologies/mongodb.svg" },
          { name: "GitHub", icon: "/images/Technologies/github.svg" },
          { name: "Jira", icon: "/images/Technologies/jira.svg" },
          { name: "Angular", icon: "/images/Technologies/angular.svg" },
          { name: "NodeJS", icon: "/images/Technologies/nodejs.svg" },
        ]}
        sections={[
          {
            title: "Technology Expertise",
            points: [
              "AI & ML Integration",
              "API Development & System Integration",
              "IOT-Enabled Solutions For Smart Devices",
            ],
          },
          {
            title: "Security & Compliance",
            points: [
              "Regular Vulnerability Assessments & Updates",
              "Compliance With Industry Standards",
              "Data Encryption & Secure Protocols",
            ],
          },
          {
            title: "Support & Maintenance",
            points: [
              "Ongoing Technical Support & Updates",
              "Performance Monitoring & Issue Resolution",
              "Upgrades To Incorporate New Features",
            ],
          },
        ]}
      />

      <Faq
        sectionTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What is custom software development?",
            answer:
              "Custom software is tailored to meet your business's unique needs, enhancing efficiency and scalability.",
          },
          {
            question: "How do you ensure the software meets our requirements?",
            answer:
              "We follow a collaborative process with detailed requirement gathering, regular updates, and feedback sessions.",
          },
          {
            question: "Can you integrate third-party APIs or tools?",
            answer:
              "Yes, we can seamlessly integrate APIs, payment gateways, and other tools to enhance functionality.",
          },
          {
            question: "Will the software be scalable?",
            answer:
              "Yes, our solutions are designed to grow with your business and handle increased demands effectively.",
          },
          {
            question: "Do you provide post-launch support?",
            answer:
              "Absolutely! We offer ongoing maintenance and updates to keep your software secure and up-to-date.",
          },
        ]}
      />
      <BottomSection />

      <Footer />
    </div>
  );
}
