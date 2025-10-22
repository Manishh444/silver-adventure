import React from "react";
import heroImage from "../assets/heroImage.png";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <img
        src={heroImage}
        alt="Hero Section Image"
        className="w-full h-[650px]"
      />
      <div className="absolute top-20 left-20 w-1/2 leading-loose space-y-6">
        <h1 className="text-5xl font-extrabold text-white">Building Dreams,</h1>
        <h1 className="text-5xl font-extrabold text-yellow-500">
          Designing Futures
        </h1>
        <p className="text-white text-xl w-[600px]">
          Expert construction and interior design services that transform your
          vision into reality. From concept to completion, we deliver
          excellence.
        </p>
        <div className="space-x-4">
          <Button
            className="px-6 py-2 bg-[#355E3C] rounded-md hover:cursor-default"
            spanClass="text-white text-sm"
            text="Get Free Quote &rarr;"
          />
          <Button
            className="px-6 py-2 rounded-md bg-white hover:bg-[#355E3C] group"
            spanClass="invisible text-white text-sm group-hover:visible "
            text="Message Us"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
