// "use client";

// import PortfolioProject from "@/ui-core/layouts/PortfolioProject";

// export default function Home() {
//   /* add develop branch */
//   return (
//     <main>
//     <PortfolioProject name={""} client={""} service1={""} duration={""} topic={""} paragraph={""}/>
//     </main>
//   );
// }

"use client";

import { Suspense } from "react";
import PortfolioProject from "@/ui-core/layouts/PortfolioProject";

export const dynamic = "force-dynamic"; // Prevent static generation

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioProject name={""} client={""} service1={""} duration={""} topic={""} paragraph={""} />
      </Suspense>
    </main>
  );
}
