import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Faq from "../components/organisms/OurServicesPages/Faq";
import IndustriesWeServe from "../components/organisms/OurServicesPages/IndustriesWeServe";
import PricingPlans from "../components/organisms/OurServicesPages/PricingPlans";
import WorkingProcess from "../components/organisms/OurServicesPages/WorkingProcess";
import HeroSection from "../components/organisms/OurServicesPages/HeroSection";
import BottomSection from "../components/organisms/ServicesPage/BottomSection";
import Solutions from "../components/organisms/OurServicesPages/Solutions";
import {
  FaGraduationCap,
  FaMoneyBillWave,
  FaPlane,
  FaShieldAlt,
  FaStore,
  FaTruck,
} from "react-icons/fa";
import SolutionsMobile from "../components/organisms/OurServicesPages/SolutionsMobile";

export default function DigitalMarketing() {
  return (
    <div>
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>
      <HeroSection
        title="Digital Marketing"
        description="At Tesbious Technologies, digital marketing is our passion and expertise. We blend creativity, data-driven insights, and proven strategies to deliver outstanding results. By staying ahead of industry trends, we ensure our clients remain competitive and achieve their goals in the ever-evolving digital landscape."
        points={[
          "Marketing Strategies",
          "Quality Services",
          "Content Marketing",
          "Creative Content",
        ]}
        imageSrc="/images/services.jpg"
      />
      <WorkingProcess
        title="Our Working Process"
        description="We follow a 4-step process in digital marketing to deliver impactful campaigns and measurable results."
        steps={[
          {
            number: "01",
            title: "Research & Strategy",
            description:
              "We analyze your audience and market to craft a tailored marketing strategy.",
          },
          {
            number: "02",
            title: "Content Creation",
            description:
              "We create engaging content that captivates your audience and reflects your brand.",
          },
          {
            number: "03",
            title: "Campaign Execution",
            description:
              "We run data-driven campaigns on the best channels to boost reach and engagement.",
          },
          {
            number: "04",
            title: "Performance Optimization",
            description:
              "Campaigns are optimized for continuous improvement and maximum results.",
          },
        ]}
      />
      {/* solutions desktop */}
      <div className="hidden sm:flex">
        <Solutions
          sectionTitle="Digital Marketing Services"
          solutions={[
            { title: "Search Engine Optimization (SEO)" },
            { title: "Social Media Marketing" },
            { title: "Email Marketing" },
            { title: "Paid Advertising" },
            { title: "Affiliate Marketing" },
            { title: "Mobile Marketing" },
            { title: "Influencer and Video Marketing" },
            { title: "E-commerce Platform Marketing" },
            { title: "Event Marketing" },
          ]}
          solutionContents={{
            "Search Engine Optimization (SEO)": [
              {
                label: "Offer",
                text: "Websites to improve their search engine rankings, driving organic traffic.",
              },
              {
                label: "Includes",
                text: "On-page SEO, off-page SEO, keyword research, website optimization.",
              },
              {
                label: "Tools",
                text: "Leverages email marketing platforms such as Mailchimp, Constant Contact, ConvertKit, and Drip for campaign management.",
              },
              {
                label: "Strategies",
                text: "Focuses on segmenting audiences, crafting personalized messages, A/B testing, and implementing automation workflows to optimize email campaign performance.",
              },
            ],
            "Social Media Marketing": [
              {
                label: "Offer",
                text: "Management and optimization of social media profiles to increase brand visibility and engagement.",
              },
              {
                label: "Includes",
                text: "Content creation, posting schedules, audience engagement tactics, and analytics tracking to monitor performance. ",
              },
              {
                label: "Tools",
                text: "Utilizes platforms like Buffer, Hootsuite, Sprout Social, and Later for scheduling and analyzing social media activities.",
              },
              {
                label: "Strategies",
                text: "Develops content calendars, implements hashtag strategies, engages with the audience, and tracks metrics to refine strategies and maximize results.",
              },
            ],
            "Email Marketing": [
              {
                label: "Offer",
                text: "Creation and execution of targeted email campaigns to nurture leads and retain customers.",
              },
              {
                label: "Includes",
                text: "Segmentation of email lists, personalization of content, automation of campaigns, and tracking of analytics.",
              },
              {
                label: "Tools",
                text: "Leverages email marketing platforms such as Mailchimp, Constant Contact, Convert Kit, and Drip for campaign management.",
              },
              {
                label: "Strategies",
                text: "Focuses on segmenting audiences, crafting personalized messages, A/B testing, and implementing automation workflows to optimize email campaign performance.",
              },
            ],
            "Paid Advertising": [
              {
                label: "Offer",
                text: "Running targeted paid advertising campaigns on platforms like Google Ads and social media.",
              },
              {
                label: "Includes",
                text: "Setting up PPC (Pay-Per-Click) campaigns, managing ad budgets, and optimizing ad copy for maximum ROI.",
              },
              {
                label: "Tools",
                text: "Utilizes platforms such as Google Ads, Facebook Ads Manager, LinkedIn Ads, and Twitter Ads for campaign management.",
              },
              {
                label: "Strategies",
                text: "Targets specific audience segments, optimizes ad creatives and bidding strategies, and monitors performance metrics to refine campaigns and improve results.",
              },
            ],
            "Affiliate Marketing": [
              {
                label: "Offer",
                text: "Collaboration with affiliate partners to promote products or services and reach a wider audience.",
              },
              {
                label: "Includes",
                text: "Setting up affiliate programs, recruiting affiliates, managing partnerships, and tracking performance.",
              },
              {
                label: "Tools",
                text: "Leverages affiliate marketing platforms and tracking software to manage partnerships and track conversions.",
              },
              {
                label: "Strategies",
                text: "Identifies suitable affiliate partners, negotiates terms, provides promotional materials, and monitors performance to optimize affiliate marketing efforts.",
              },
            ],
            "Content Marketing": [
              {
                label: "Offer",
                text: "Development and distribution of valuable content to attract and engage the target audience.",
              },
              {
                label: "Includes",
                text: "Content creation, blogging, content distribution strategies, and analytics tracking to measure effectiveness.",
              },
              {
                label: "Tools",
                text: "Utilizes content marketing platforms such as HubSpot, Buffer, Canva, and Grammarly for content creation and distribution.",
              },
              {
                label: "Strategies",
                text: "Develops content calendars, conducts audience research, employs storytelling techniques, and repurposes content to drive engagement and conversions.",
              },
            ],
            "Mobile Marketing": [
              {
                label: "Offer",
                text: "Optimization of campaigns for mobile devices to cater to the increasing use of smartphones.",
              },
              {
                label: "Includes",
                text: "Mobile-friendly website optimization, mobile advertising, and app marketing to reach and engage mobile users.",
              },
              {
                label: "Tools",
                text: "Utilizes mobile analytics platforms, mobile ad networks (e.g., AdMob), and mobile-responsive design tools.",
              },
              {
                label: "Strategies",
                text: "Focuses on optimizing website speed and usability for mobile users, implementing location-based targeting, and optimizing mobile ad campaigns for better performance.",
              },
            ],
            "Influencer and Video Marketing": [
              {
                label: "Offer",
                text: "Collaboration with influencers and creation of optimized video content to engage audiences visually.",
              },
              {
                label: "Includes",
                text: "Identifying and partnering with influencers, producing high-quality video content, and optimizing content for maximum reach.",
              },
              {
                label: "Tools",
                text: "Leverages influencer marketing platforms, video editing software, and analytics tools for performance tracking.",
              },
              {
                label: "Strategies",
                text: "Identifies relevant influencers, develops engaging video content, and leverages influencer partnerships to amplify brand messages and reach target audiences effectively.",
              },
            ],
            "E-commerce Platform Marketing": [
              {
                label: "Offer",
                text: "Tailored strategies to promote products or services on e-commerce platforms like Amazon, eBay, etc.",
              },
              {
                label: "Includes",
                text: "Optimization of product listings, advertising, and customer engagement strategies to drive sales and revenue.",
              },
              {
                label: "Tools",
                text: "Utilizes e-commerce platforms such as Shopify, WooCommerce, Magento, and Amazon Seller Central for management and optimization.",
              },
              {
                label: "Strategies",
                text: "Focuses on optimizing product descriptions, images, and pricing, running targeted advertising campaigns, and providing exceptional customer service to enhance the shopping experience and drive conversions.",
              },
            ],
            "Event Marketing": [
              {
                label: "Offer",
                text: "Planning and execution of digital marketing campaigns to promote client events, driving attendance and engagement.",
              },
              {
                label: "Includes",
                text: "Utilizing various digital channels including social media, email, and content marketing to generate buzz and registrations for events.",
              },
              {
                label: "Tools",
                text: "Leverages event management platforms, email marketing software, and social media scheduling tools for effective event promotion.",
              },
              {
                label: "Strategies",
                text: "Develops compelling event messaging, creates engaging content, and implements targeted promotional campaigns to maximize event attendance and participation.",
              },
            ],
          }}
        />
      </div>
      {/* Solutions mobile */}
      <div className="sm:hidden">
      <SolutionsMobile
      imageUrl="/images/service2.png"
        services={[
          "Search Engine Optimization",
          "Social Media Marketing",
          "Email Marketing",
          "Paid Advertising",
          "Mobile Marketing",
          "Content Marketing",
        ]}
        title="Digital Marketing Services"
      />
      </div>

      <IndustriesWeServe
        description={`By creating websites that reflect your industry’s standards and enhance your brand, we help grow your business online. Our industry-specific web solutions are optimized for performance, user experience, and conversions, ensuring your website drives real business results.`}
        industries={[
          {
            icon: <FaShieldAlt className="text-[40px] xl:text-[73px] " />,
            title: "Healthcare",
            description:
              "Drive awareness through targeted campaigns, patient engagement via social media, and healthcare content marketing.",
          },
          {
            icon: <FaGraduationCap className="text-[40px] xl:text-[73px]" />,
            title: "Education",
            description:
              "Promote e-learning platforms and institutions with SEO, PPC ads, and engaging educational content on social channels.",
          },
          {
            icon: <FaMoneyBillWave className="text-[40px] xl:text-[73px]" />,
            title: "Finance",
            description:
              "Build trust with data-driven campaigns, financial education blogs, and targeted email marketing for fintech services.",
          },
          {
            icon: <FaStore className="text-[40px] xl:text-[73px]" />,
            title: "Retail & E-Commerce",
            description:
              "Boost online sales with product-based advertising, retargeting strategies, and influencer collaborations",
          },
          {
            icon: <FaTruck className="text-[40px] xl:text-[73px]" />,
            title: "Logistics & Transportation",
            description:
              " Highlight logistics efficiency with targeted ad campaigns and informative content showcasing services.",
          },
          {
            icon: <FaPlane className="text-[40px] xl:text-[73px]" />,
            title: "Tourism",
            description:
              "Attract travelers with captivating campaigns, destination storytelling, and optimized booking conversion strategies.",
          },
        ]}
      />
      <PricingPlans
        sectionTitle="Choose the Plan that fits your needs."
        plans={[
          {
            name: "Basic",
            price: 100,
            description:
              "Budget-friendly marketing with social media management and basic SEO for brand visibility.",
            features: [
              "Market Research and Analysis",
              "Social Media Optimization",
              "Email Marketing",
              "Content Marketing",
              "Analytics and Client Reporting",
            ],
          },
          {
            name: "Standard",
            price: 210,
            description:
              "Full-service digital strategy including content creation, SEO, and targeted ad campaigns.",
            features: [
              "Everything in Basic Package",
              "Product/Service Promotion",
              "Sales Support",
              "Marketing Strategy and Planning",
              "Reputation Management and Branding",
            ],
            highlighted: true,
          },
          {
            name: "Premium",
            price: 350,
            description:
              "Elite marketing with analytics, and personalized brand growth solutions.",
            features: [
              "Everything in Standard package",
              "Influencer and  Video Marketing",
              "Market and competitor Analysis",
              "Market Automation",
              "Public Relations (PR)",
            ],
          },
        ]}
      />
      <Faq
        sectionTitle="Frequently Asked Questions"
        faqs={[
          {
            question: "What is digital marketing?",
            answer:
              "Digital marketing involves promoting your brand online through social media, search engines, and email to engage and grow your audience.",
          },
          {
            question: "How long does it take to see results?",
            answer:
              "Quick results are possible with strategies like PPC, while SEO and content marketing generally take 3-6 months for significant outcomes.",
          },
          {
            question: "Can you manage our social media accounts?",
            answer:
              "Yes, we handle content creation, audience engagement, ad campaigns, and analytics to ensure effective social media management.",
          },
          {
            question: "What is SEO, and why is it important?",
            answer:
              "SEO improves your website's visibility on search engines, driving organic traffic and increasing brand credibility.",
          },
          {
            question: "Will I receive updates on campaign performance?",
            answer:
              "Yes, we provide detailed reports and updates to ensure transparency and help you track progress.",
          },
        ]}
      />
      <BottomSection />
      <Footer />
    </div>
  );
}
