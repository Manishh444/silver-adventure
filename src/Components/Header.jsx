import React, { useState } from "react";
import logo from "../assets/company-logo.png";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-quadcore-lightBackground text-sm px-4 py-4 h-20 shadow-md flex items-center justify-between fixed top-0 w-full z-50">
      {/* Main nav container */}
      <nav className="flex justify-between w-full items-center text-quadcore-primary font-medium">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="QuadCoreInfra Logo"
              className="w-20 h-auto hover:cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base">
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
        </div>

        {/* Phone Number (always visible) */}
        <a
          href="tel:+919087654321"
          className="hidden md:flex items-center gap-2 hover:text-quadcore-hoverText">
          <Phone className="w-4 h-4" />
          <span>+91 90876 54321</span>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-quadcore-lightBackground shadow-md md:hidden animate-slideDown">
          <div className="flex flex-col items-start px-6 py-4 space-y-4 text-base">
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="hover:text-quadcore-hoverText">
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className="hover:text-quadcore-hoverText">
              About Us
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/services"
              className="hover:text-quadcore-hoverText">
              Services
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/work"
              className="hover:text-quadcore-hoverText">
              Our Work
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className="hover:text-quadcore-hoverText">
              Contact
            </Link>

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
