import React from "react";
import logo from "../assets/company-logo.png";
import { PhoneIcon } from "./IconSvg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-quadcore-lightBackground py-2">
      <nav className="max-w-screen-xl mx-auto px-8 flex justify-between items-center  text-quadcore-primary font-medium">
        <div>
          <img
            src={logo}
            alt="QuadCoreInfra Logo"
            className="w-32 h-16 hover:cursor-pointer"
          />
        </div>
        <div className="space-x-16">
          <Link to="/" className="hover:text-quadcore-hoverText">
            Home
          </Link>
          <Link to="/about" className="hover:text-quadcore-hoverText">
            About Us
          </Link>

          <Link to="/services" className="hover:text-quadcore-hoverText">
            Services
          </Link>
          <Link to="/work" className="hover:text-quadcore-hoverText">
            Our Work
          </Link>
          <Link to="/contact" className="hover:text-quadcore-hoverText">
            Contact
          </Link>
          {/* <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Our Work</a>
          <a href="#contact">Contact</a> */}
        </div>
        <div className="flex space-x-2 hover:text-quadcore-hoverText">
          <PhoneIcon />
          <span>+919087654321</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
