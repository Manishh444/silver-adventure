import React from "react";
import HeroSection from "../Components/HeroSection";
import WhyUs from "./HomeSections/WhyUs";
import Featured from "./HomeSections/Featured";
import Testimonial from "./HomeSections/Testimonial";
import Ready from "./HomeSections/Ready";

const HomePage = () => {
  return (
    <main className="w-full mt-20">
      <HeroSection />
      <WhyUs />
      <Featured />
      <Testimonial />
      <Ready />
    </main>
  );
};

export default HomePage;
