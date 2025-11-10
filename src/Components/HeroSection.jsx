import React from "react";
import heroImage from "../assets/heroImage.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="#" className="min-w-full mt-20">
      <div className="relative min-h-dvh md:max-h-dvh">
        <img
          src={heroImage}
          alt="Hero Section Image"
          className="min-w-full min-h-dvh md:max-h-screen m-0 p-0 z-0"
        />
        <div className="absolute top-0 z-10 bg-gradient-to-r from-[#235C49F2] via-[#235C49D9] to-[#235C49BF] opacity-80 min-w-full h-full"></div>
      </div>
      <div className="px-4">
        <div className="absolute z-20 top-32 sm:top-40 lg:top-60 flex flex-col justify-center leading-loose space-y-6">
          <div className="pr-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-quadcore-lightBackground flex flex-col">
              Building Dreams,
              <span className="text-[#FF8001]">Designing Futures</span>
            </h1>
          </div>
          <p className="text-[#E3E7E0] text-lg md:text-xl pr-4 md:min-w-md lg:max-w-2xl">
            Expert construction and interior design services that transform your
            vision into reality. From concept to completion, we deliver
            excellence.
          </p>
          <div className="flex gap-2">
            <Button
              className="px-2 bg-[#FF8001] rounded-md hover:cursor-default"
              spanClass="text-white text-sm"
              text="Get Free Quote &rarr;"
            />
            <Link to="/contact">
              <Button
                className="px-2 rounded-md bg-white hover:bg-[#FF8001] group"
                spanClass="invisible text-white text-sm group-hover:visible "
                text="Contact Us"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
