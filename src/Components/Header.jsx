import React, { useState, useEffect } from "react";
import logo from "../assets/company-logo.webp";
import { NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase =
    "transition-all duration-300 transform hover:animate-slideUpZoom";

  const activeClass = "text-quadcoreActive font-semibold";

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] rounded-2xl shadow-lg backdrop-blur-xl border border-white/30 px-6 py-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F5F2E7]/100" : "bg-[#F5F2E7]/100"
      }`}>
      <nav className="flex justify-between items-center text-quadcore-primary font-medium">
        <div className="w-32 h-16 overflow-hidden">
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
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            { to: "/work", label: "Our Work" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-all duration-200 ${
                  isActive
                    ? "text-orange-500 underline underline-offset-4 decoration-orange-500 scale-105 -translate-y-0.5"
                    : "text-black hover:text-orange-500 hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:scale-105 hover:-translate-y-0.5"
                }`
              }>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Phone */}
        <a
          href="tel:+919087654321"
          className="hidden md:flex items-center gap-2 hover:text-quadcore-hoverText">
          <Phone className="w-4 h-4" />
          <span>+91 9900064128</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mt-4 w-full bg-white/90 backdrop-blur-xl rounded-xl shadow-md md:hidden animate-slideDown p-4">
          <div className="flex flex-col items-start space-y-4 text-base">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/work", label: "Our Work" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive ? activeClass : "hover:text-quadcore-hoverText"
                  }`
                }>
                {link.label}
              </NavLink>
            ))}

            <a
              href="tel:+919087654321"
              className="flex items-center gap-2 hover:text-quadcore-hoverText">
              <Phone className="w-4 h-4" />
              <span>+91 9900064128</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
