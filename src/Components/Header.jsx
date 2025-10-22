import React from "react";
import logo from "../assets/company-logo.png";
import { PhoneIcon } from "./IconSvg";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-around items-center bg-[#F5F2E7]">
        <div>
          <img src={logo} alt="QuadCoreInfra Logo" className="w-32 h-16 hover:cursor-pointer" />
        </div>
        {/* <Link to="/">Home</Link>
        <Link>About Us</Link>
        <Link>Services</Link>
        <Link>Our Work</Link>
        <Link>Contact</Link> */}
        <div className="space-x-16">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Our Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex space-x-2">
          <PhoneIcon />
          <span>+919087654321</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
