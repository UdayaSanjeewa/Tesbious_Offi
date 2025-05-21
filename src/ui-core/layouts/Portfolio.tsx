"use client";

import React from "react";
import Navbar from "../components/organisms/Navbar";
import PortfolioHeader from "../components/organisms/PortfolioPage/PortfolioHeader";
import PortfolioProjectCard from "../components/molecules/PortfolioProjectCard";
import PortfolioContactUs from "../components/organisms/PortfolioPage/PortfolioContactUs";
import { useRouter } from "next/navigation";
import Footer from "../components/organisms/Footer";
import PortfolioProjectCardTwo from "../components/organisms/PortfolioPage/PortfolioProjectCardTwo";
import PortfolioProjectCardOne from "../components/organisms/PortfolioPage/PortfolioProjectCardOne";
import PortfolioProjectCardThree from "../components/organisms/PortfolioPage/PortfolioProjectCardThree";
import PortfolioProjectCardFour from "../components/organisms/PortfolioPage/PortfolioProjectCardFour";
import PortfolioProjectCardFive from "../components/organisms/PortfolioPage/PortfolioProjectCardFive";
import PortfolioProjectCardSix from "../components/organisms/PortfolioPage/PortfolioProjectCardSix";
import PortfolioProjectCardSeven from "../components/organisms/PortfolioPage/PortfolioProjectCardSeven";
import PortfolioProjectCardEight from "../components/organisms/PortfolioPage/PortfolioProjectCardEight";
import PortfolioProjectCardNine from "../components/organisms/PortfolioPage/PortfolioProjectCardNine";

function Portfolio() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <Navbar />

      <div className="sm:mt-[8%] mt-[30%] mb-[4%] ml-[8%]">
        <PortfolioHeader />
      </div>
      <div className="mt-10 mb-4">
        
        {/* Desktop project card */}
        <div className="hidden sm:grid lg:grid-cols-3 sm:gap-4 sm:mx-5 md:grid-cols-2">
          <PortfolioProjectCardOne
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 1",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "1 Weeks",
                topic: "Lorem ipsum",
                paragraph:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta maximus tincidunt. Nam eu laoreet nulla. Sed pulvinar, ipsum ut mollis facilisis, magna neque fermentum orci, non rhoncus nisi dolor sit amet risus. Proin maximus quis elit a euismod. Mauris varius, nunc id mollis faucibus, metus mauris gravida libero, vel.",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame1.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 1"
          />
          <PortfolioProjectCardTwo
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 2",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "2 Weeks",
                topic: "Lorem ipsum",
                paragraph:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta maximus tincidunt. Nam eu laoreet nulla. Sed pulvinar, ipsum ut mollis facilisis, magna neque fermentum orci, non rhoncus nisi dolor sit amet risus. Proin maximus quis elit a euismod. Mauris varius, nunc id mollis faucibus, metus mauris gravida libero, vel.",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame2.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 2"
          />
          <PortfolioProjectCardThree
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 3",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "3 Weeks",
                topic: "Lorem ipsum",
                paragraph:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta maximus tincidunt. Nam eu laoreet nulla. Sed pulvinar, ipsum ut mollis facilisis, magna neque fermentum orci, non rhoncus nisi dolor sit amet risus. Proin maximus quis elit a euismod. Mauris varius, nunc id mollis faucibus, metus mauris gravida libero, vel.",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame3.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 3"
          />
          <PortfolioProjectCardFour
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 4",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "4 Weeks",
                topic: "Lorem ipsum",
                paragraph: "Lorem ipsum dolor sit amet",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame3.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 4"
          />
          <PortfolioProjectCardFive
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 5",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "5 Weeks",
                topic: "Lorem ipsum",
                paragraph: "Lorem ipsum dolor sit amet",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame2.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 5"
          />
          <PortfolioProjectCardSix
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 6",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "6 Weeks",
                topic: "Lorem ipsum",
                paragraph: "Lorem ipsum dolor sit amet",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame1.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 6"
          />
        </div>

        {/* Mobile project card */}
        <div className="visible sm:hidden">
        <PortfolioProjectCardSeven
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 1",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "1 Weeks",
                topic: "Lorem ipsum",
                paragraph:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta maximus tincidunt. Nam eu laoreet nulla. Sed pulvinar, ipsum ut mollis facilisis, magna neque fermentum orci, non rhoncus nisi dolor sit amet risus. Proin maximus quis elit a euismod. Mauris varius, nunc id mollis faucibus, metus mauris gravida libero, vel.",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame1.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 1"
          />
          <PortfolioProjectCardEight
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 2",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "2 Weeks",
                topic: "Lorem ipsum",
                paragraph:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta maximus tincidunt. Nam eu laoreet nulla. Sed pulvinar, ipsum ut mollis facilisis, magna neque fermentum orci, non rhoncus nisi dolor sit amet risus. Proin maximus quis elit a euismod. Mauris varius, nunc id mollis faucibus, metus mauris gravida libero, vel.",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame2.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 2"
          />
          <PortfolioProjectCardNine
            onClick={() => {
              const query = new URLSearchParams({
                name: "Project 3",
                client: "Tesbious",
                service1: "UI/UX Design",
                service2: "Web Development",
                duration: "3 Weeks",
                topic: "Lorem ipsum",
                paragraph:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta maximus tincidunt. Nam eu laoreet nulla. Sed pulvinar, ipsum ut mollis facilisis, magna neque fermentum orci, non rhoncus nisi dolor sit amet risus. Proin maximus quis elit a euismod. Mauris varius, nunc id mollis faucibus, metus mauris gravida libero, vel.",
              }).toString(); // passing props to the route

              router.push(`/Portfolio-Project?${query}`);
            }}
            imageSrc="/images/frame3.png"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, lorem ut efficitur commodo, lacus ex cursus enim"
            topic="Project 3"
          />    
        </div>
       
      </div>

      <div className="my-24">
        <PortfolioContactUs onClick={() => {
            router.push("/Contact-Us");
          }} />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Portfolio;
