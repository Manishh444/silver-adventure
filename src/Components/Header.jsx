import React, { useState } from "react";
import logo from "../assets/company-logo.png";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Common animation classes for menu links
  const linkBase =
    "transition-all duration-300 transform hover:animate-slideUpZoom";

  const activeClass = "text-quadcoreActive font-semibold";

  return (
    <header className="bg-[#F5F2E7] text-sm px-4 py-4 h-20 shadow-md flex items-center justify-between fixed top-0 w-full z-50">
      <nav className="flex justify-between w-full items-center text-quadcore-primary font-medium">
        {/* Logo */}
        <div className="w-40 h-20 overflow-hidden">
          <NavLink to="/">
            <img
              src={logo}
              alt="QuadCoreInfra Logo"
              className="object-center object-cover w-full h-full hover:cursor-pointer"
            />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all duration-200 
              ${
                isActive
                  ? "text-orange-500 underline underline-offset-4 decoration-orange-500 scale-105 -translate-y-0.5"
                  : "text-black hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 hover:-translate-y-0.5"
              }`
            }>
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-200 
              ${
                isActive
                  ? "text-orange-500 underline underline-offset-4 decoration-orange-500 scale-105 -translate-y-0.5"
                  : "text-black hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 hover:-translate-y-0.5"
              }`
            }>
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-all duration-200 
              ${
                isActive
                  ? "text-orange-500 underline underline-offset-4 decoration-orange-500 scale-105 -translate-y-0.5"
                  : "text-black hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 hover:-translate-y-0.5"
              }`
            }>
            Services
          </NavLink>

          <NavLink
            to="/work"
            className={({ isActive }) =>
              `transition-all duration-200 
              ${
                isActive
                  ? "text-orange-500 underline underline-offset-4 decoration-orange-500 scale-105 -translate-y-0.5"
                  : "text-black hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 hover:-translate-y-0.5"
              }`
            }>
            Our Work
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all duration-200 
              ${
                isActive
                  ? "text-orange-500 underline underline-offset-4 decoration-orange-500 scale-105 -translate-y-0.5"
                  : "text-black hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 hover:-translate-y-0.5"
              }`
            }>
            Contact
          </NavLink>
        </div>

        {/* Phone Number */}
        <a
          href="tel:+919087654321"
          className="hidden md:flex items-center gap-2 hover:text-quadcore-hoverText">
          <Phone className="w-4 h-4" />
          <span>+91 90876 54321</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-quadcore-lightBackground shadow-md md:hidden animate-slideDown">
          <div className="flex flex-col items-start px-6 py-4 space-y-4 text-base">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? activeClass : "hover:text-quadcore-hoverText"
                }`
              }>
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? activeClass : "hover:text-quadcore-hoverText"
                }`
              }>
              About Us
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? activeClass : "hover:text-quadcore-hoverText"
                }`
              }>
              Services
            </NavLink>

            <NavLink
              to="/work"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? activeClass : "hover:text-quadcore-hoverText"
                }`
              }>
              Our Work
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive ? activeClass : "hover:text-quadcore-hoverText"
                }`
              }>
              Contact
            </NavLink>

            <a
              href="tel:+919087654321"
              className="flex items-center gap-2 hover:text-quadcore-hoverText">
              <Phone className="w-4 h-4" />
              <span>+91 90876 54321</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
