import React from "react";
import heroImage from "../assets/heroImage.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="#" className="relative w-full">
      <div className="">
        <img
          src={heroImage}
          alt="Hero Section Image"
          className="w-full max-h-[650px]"
        />
        <div className="absolute z-1 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8">
        <div className="absolute top-20 leading-loose space-y-6">
          <div>
            <h1 className="text-5xl font-extrabold text-white">
              Building Dreams,
            </h1>
            <h1 className="text-5xl font-extrabold text-yellow-500">
              Designing Futures
            </h1>
          </div>
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
            <Link to="/contact">
              <Button
                className="px-6 py-2 rounded-md bg-white hover:bg-[#355E3C] group"
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
