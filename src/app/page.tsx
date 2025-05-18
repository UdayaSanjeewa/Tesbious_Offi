"use client";
import HomePage from "@/ui-core/layouts/HomePage";

import Navbar from "@/ui-core/components/organisms/Navbar";
import ContactUs from "@/ui-core/layouts/ContactUs";
import Portfolio from "@/ui-core/layouts/Portfolio";
//import PortfolioProject from "@/ui-core/layouts/PortfolioProject";
//import TesbiousSampleLayout from "@/ui-core/layouts/TesbiousSampleLayout";
// import TesbiousSampleLayout from "@/ui-core/layouts/TesbiousSampleLayout";

export default function Home() {
  /* add develop branch */
  return (
    <main>
        {/*    <ContactUs/> */}
      <HomePage />
      {/* <Portfolio/> */}
    </main>
  );
}
