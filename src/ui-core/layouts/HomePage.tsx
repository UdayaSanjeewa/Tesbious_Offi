"use client";
import React from "react";
import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/HomePage/Hero";
import BeyondTheFuture from "../components/organisms/HomePage/BeyondTheFuture";
import FeatureSection from "../components/organisms/HomePage/FeatureSection";
import MovingDot from "../components/atoms/MovingDot";
import { AboutUs } from "../components/organisms/HomePage/AboutUs";
import Parallax from "../components/organisms/HomePage/Parallax";
import OurServices from "../components/organisms/HomePage/OurServices";
import OurPortfolio from "../components/organisms/HomePage/OurPortfolio";
import ClientCard from "../components/organisms/HomePage/ClientCard";
import EmailSection from "../components/organisms/HomePage/EmailSection";
import Footer from "../components/organisms/Footer";
import StatSection from "../components/organisms/StatSection";
import CommentsMobile from "../components/organisms/HomePage/CommentsMobile";
import StatSectionMobile from "../components/organisms/StatSectionMobile";
import EmailSectionMobile from "../components/organisms/HomePage/EmailSectionMobile";

function HomePage() {
  return (
    <div className="bg-white">
      <div className="flex w-full md:w-auto justify-center">
        <Navbar />
      </div>

      <div className="sm:mt-[100px] flex justify-center">
        <Hero />
      </div>

      <div className="sm:mt-[30px] md:mt-[50px] lg:mt-[80px] xl:mt-[120px] hidden sm:flex">
        <BeyondTheFuture />
      </div>

      <div className="hidden sm:flex">
        <MovingDot />
      </div>

      <div className="sm:mt-[60px]">
        <FeatureSection />
      </div>

      <div className="hidden sm:flex">
        <Parallax />
      </div>

      <div className="">
        <AboutUs />
      </div>

      <div>
        <OurServices />
      </div>

      <div>
        <OurPortfolio />
      </div>

      <div className="hidden sm:flex">
        <ClientCard
          bgColour="#111827"
          borderCol="#B0ADAD"
          textColour="text-white"
        />
      </div>

      <div className="sm:flex hidden">
        <StatSection />
      </div>
      <div className="hidden sm:flex">
        <EmailSection />
      </div>

      {/* mobile */}
      <div className="sm:hidden bg-[#6C63FF14]">
        <CommentsMobile />
      </div>

      <div className="sm:hidden bg-[#6C63FF14]">
        <StatSectionMobile />
      </div>
      <div className="sm:hidden bg-[#6C63FF14]">
        <EmailSectionMobile />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
