import React from "react";
import logo from "../assets/company-logo.png";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-quadcore-lightBackground text-sm px-4 py-4 h-20 shadow-md flex items-center justify-between fixed top-0 min-w-full z-50 m-0">
      <nav className="flex justify-between min-w-full items-center text-quadcore-primary font-medium">
        <div className="w-fit">
          <Link to="/">
            <img
              src={logo}
              alt="QuadCoreInfra Logo"
              className="w-16 h-8 hover:cursor-pointer"
            />
          </Link>
        </div>
        <div className="space-x-8 hidden md:flex text-base">
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
        <a
          href="tel:+919087654321"
          className="flex items-center gap-2 hover:text-quadcore-hoverText hover:cursor-pointer"
        >
          <Phone className="w-4 h-4 mt-0.5" />
          <span>+91 90876 54321</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
