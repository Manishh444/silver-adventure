import React from "react";
import heroImage from "../assets/heroImage.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="#" className="w-full">
      <div className="relative">
        <img
          src={heroImage}
          alt="Hero Section Image"
          className="w-full max-h-dvh m-0 p-0 z-0"
        />
        <div className="absolute top-0 z-10 bg-gradient-to-r from-[#235C49F2] via-[#235C49D9] to-[#235C49BF] opacity-80 w-full h-full"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="absolute z-20 top-72 flex flex-col justify-center leading-loose space-y-6">
          <div>
            <h1 className="text-5xl font-extrabold text-quadcore-lightBackground flex flex-col">
              Building Dreams,
              <span className="text-[#FF8001]">Designing Futures</span>
            </h1>
          </div>
          <p className="text-[#E3E7E0] text-lg md:w-[600px]">
            Expert construction and interior design services that transform your
            vision into reality. From concept to completion, we deliver
            excellence.
          </p>
          <div className="space-x-4">
            <Button
              className="px-6 py-2 bg-[#FF8001] rounded-md hover:cursor-default"
              spanClass="text-white text-sm"
              text="Get Free Quote &rarr;"
            />
            <Link to="/contact">
              <Button
                className="px-6 py-2 rounded-md bg-white hover:bg-[#FF8001] group"
                spanClass="invisible text-white text-sm group-hover:visible "
                text="Message Us"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
