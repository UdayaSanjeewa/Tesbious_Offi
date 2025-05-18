"use client";
import React from "react";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import Hero from "../components/organisms/AboutUsPage/Hero";
import StatSection from "../components/organisms/StatSection";
import VisionMissionPanel from "../components/organisms/AboutUsPage/VisionMissionPanel";
import StatSectionMobile from "../components/organisms/StatSectionMobile";
import VisionMissionPanelMobile from "../components/organisms/AboutUsPage/VisionMissionPanelMobile";

function AboutUs() {
  return (
    <div className="sm:bg-white bg-[#6C63FF14]">
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>

      <div className="sm:hidden mt-10">
        <StatSectionMobile />
      </div>

      <div className="hidden sm:flex">
        <StatSection />
      </div>

      <div className="hidden sm:block">
        <VisionMissionPanel />
      </div>

      <div className="sm:hidden">
        <VisionMissionPanelMobile/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
