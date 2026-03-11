import React from "react";
import HeroSection from "../Components/HeroSection";
import WhyUs from "./HomeSections/WhyUs";
import Featured from "./HomeSections/Featured";
import Testimonial from "./HomeSections/Testimonial";
import Ready from "./HomeSections/Ready";
import PackagesSection from "../Components/TurnKeyPackage";
import InteriorPackageCard from "@/Components/InteriorPackages";

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <WhyUs />
      <PackagesSection />
      <InteriorPackageCard />
      <Featured />
      <Testimonial />
      {/* <Ready /> */}
    </main>
  );
};

export default HomePage;
