// "use client";

// import React from "react";
// import Navbar from "../components/organisms/Navbar";
// import PortfolioImage from "../components/atoms/PortfolioImage";
// import ProjectHeader from "../components/organisms/ProjectPage/ProjectHeader";
// import ProjectDetails from "../components/organisms/ProjectPage/ProjectDetails";
// import PortfolioContactUs from "../components/organisms/PortfolioPage/PortfolioContactUs";
// import { useSearchParams, useRouter } from "next/navigation"; // ✅ correct imports
// import Footer from "../components/organisms/Footer";

// const PortfolioProject = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter(); // ✅ hook used correctly

//   const name = searchParams.get("name") || "";
//   const client = searchParams.get("client") || "";
//   const service1 = searchParams.get("service1") || "";
//   const service2 = searchParams.get("service2") || "";
//   const service3 = searchParams.get("service3") || "";
//   const duration = searchParams.get("duration") || "";
//   const topic = searchParams.get("topic") || "";
//   const paragraph = searchParams.get("paragraph") || "";

//   return (
//     <div>
//       <Navbar />
//       <div className="md:mt-[5%] ">
//         <ProjectHeader
//           name={name}
//           client={client}
//           service1={service1}
//           service2={service2}
//           service3={service3}
//           duration={duration}
//         />
//       </div>
//       <div className="bg-[url(/images/projectImg.png)] bg-fit bg-[length:100%] lg:h-[680px] md:h-[500px] h-[210px] w-full"></div>
//       <div className="">
//         <ProjectDetails topic={topic} paragraph={paragraph} />
//       </div>
//       <div className="mb-40 mt-20">
//         <PortfolioContactUs
//           onClick={() => {
//             router.push("/Contact-Us");
//           }}
//         />
//       </div>
//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// };

// export default PortfolioProject;

"use client";

import React from "react";
import Navbar from "../components/organisms/Navbar";
import PortfolioImage from "../components/atoms/PortfolioImage";
import ProjectHeader from "../components/organisms/ProjectPage/ProjectHeader";
import ProjectDetails from "../components/organisms/ProjectPage/ProjectDetails";
import PortfolioContactUs from "../components/organisms/PortfolioPage/PortfolioContactUs";
import { useSearchParams, useRouter } from "next/navigation";
import Footer from "../components/organisms/Footer";

type PortfolioProjectProps = {
  name: string;
  client: string;
  service1: string;
  duration: string;
  topic: string;
  paragraph: string;
};

const PortfolioProject = ({
  name,
  client,
  service1,
  duration,
  topic,
  paragraph,
}: PortfolioProjectProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Optionally fallback to searchParams if props are empty
  const resolvedName = name || searchParams.get("name") || "";
  const resolvedClient = client || searchParams.get("client") || "";
  const resolvedService1 = service1 || searchParams.get("service1") || "";
  const resolvedDuration = duration || searchParams.get("duration") || "";
  const resolvedTopic = topic || searchParams.get("topic") || "";
  const resolvedParagraph = paragraph || searchParams.get("paragraph") || "";

  return (
    <div>
      <Navbar />
      <div className="md:mt-[5%] ">
        <ProjectHeader
          name={resolvedName}
          client={resolvedClient}
          service1={resolvedService1}
          service2={searchParams.get("service2") || ""}
          service3={searchParams.get("service3") || ""}
          duration={resolvedDuration}
        />
      </div>
      <div className="bg-[url(/images/projectImg.png)] bg-fit bg-[length:100%] lg:h-[680px] md:h-[500px] h-[210px] w-full"></div>
      <div className="">
        <ProjectDetails topic={resolvedTopic} paragraph={resolvedParagraph} />
      </div>
      <div className="mb-40 mt-20">
        <PortfolioContactUs
          onClick={() => {
            router.push("/Contact-Us");
          }}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioProject;
