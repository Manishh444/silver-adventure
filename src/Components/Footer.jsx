import React from "react";
import logo from "../assets/company-logo.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { LocationIcon, MailIcon, PhoneIcon, TimeIcon } from "./IconSvg";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[#F5F2E7]">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-4 items-start gap-4 border-b-2 py-4">
        <div className="space-y-2">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 h-16 hover:cursor-pointer"
          />
          <p className="text-sm text-balance leading-relaxed">
            Transforming spaces with expert construction and innovative interior
            design solutions. Your dream project, our expertise
          </p>
          <div className="flex gap-8 items-center space-y-2">
            <img
              src={fb}
              alt="facebook icon"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <img
              src={insta}
              alt="Instagram icon"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <img
              src={twitter}
              alt="Twitter icon"
              className="w-5 h-5 hover:cursor-pointer"
            />
            <img
              src={linkedin}
              alt="Linkedin icon"
              className="w-5 h-5 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3 pt-6 text-sm">
          <p className="text-sm font-bold">Quick Links</p>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Our Work</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div className="flex flex-col space-y-3 pt-6 text-sm">
          <p className="text-sm font-bold">Services</p>
          <a href="#">Residencial Constructions</a>
          <a href="#">Commercial Projects</a>
          <a href="#">Interior Design</a>
          <a href="#">Project Management</a>
        </div>
        <div className="flex flex-col space-y-3 pt-6 text-sm">
          <p className="text-sm font-bold">Contact Info</p>
          <p className="flex gap-2">
            <LocationIcon className="w-7 h-7" />
            123 Construction Avenue , Building District , Mumbai- 400001
          </p>
          <p className="flex gap-2">
            <PhoneIcon className="w-5 h-5" />
            +919087654321
          </p>
          <p className="flex gap-2">
            <MailIcon className="w-5 h-5" /> info@quadCoreInfra.com
          </p>
          <p className="flex gap-2">
            {" "}
            <TimeIcon className="w-5 h-5" /> Mon- Sat: 10 AM- 7 PM Sunday:
            Closed
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl px-8 mx-auto py-2 flex justify-between text-sm">
        <p className="">© 2025 QuadCore Infra. All rights reserved.</p>
        <div className="flex gap-4">
          <p className="">Privacy Policy</p>
          <p className="">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
