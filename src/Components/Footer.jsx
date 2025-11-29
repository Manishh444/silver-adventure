import React from "react";
import logo from "../assets/company-logo.png";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-14 bg-quadcore-accent text-quadcore-footerText">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 border-b border-[#A5B9AE] pb-10">
        {/* 1. Logo + About */}
        <div className="space-y-4 animate-fadeUp">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 hover:scale-105 transition-all duration-300"
            />
          </Link>

          <p className="text-base leading-relaxed text-pretty">
            Transforming spaces with expert construction and innovative interior
            design solutions. Your dream project, our expertise.
          </p>

          {/* Social icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#FF8001] transition-all hover:scale-110">
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#FF8001] transition-all hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#FF8001] transition-all hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-[#FF8001] transition-all hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="space-y-4 animate-fadeUp-delayed-1">
          <h3 className="text-lg font-bold text-quadcore-lightBackground">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-[#FF8001]">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:underline hover:text-[#FF8001]">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/work" className="hover:underline hover:text-[#FF8001]">
                Our Work
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-[#FF8001]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* 3. Services */}
        <div className="space-y-4 animate-fadeUp-delayed-2">
          <h3 className="text-lg font-bold text-quadcore-lightBackground">
            Services
          </h3>
          <ul className="space-y-3">
            <li className="hover:text-[#FF8001]">Residential Construction</li>
            <li className="hover:text-[#FF8001]">Commercial Projects</li>
            <li className="hover:text-[#FF8001]">Interior Design</li>
            <li className="hover:text-[#FF8001]">Project Management</li>
          </ul>
        </div>

        {/* 4. Contact Info */}
        <div className="space-y-4 animate-fadeUp-delayed-3">
          <h3 className="text-lg font-bold text-quadcore-lightBackground">
            Contact Info
          </h3>
          <ul className="space-y-4 text-base text-pretty">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              123 Construction Avenue, Building District, Mumbai – 400001
            </li>

            <li className="flex gap-3">
              <Phone className="w-5 h-5 mt-1" />
              <a href="tel:+919087654321" className="hover:text-[#FF8001]">
                +91 90876 54321
              </a>
            </li>

            <li className="flex gap-3">
              <Mail className="w-5 h-5 mt-1" />
              <a
                href="mailto:info@quadCoreInfra.com"
                className="hover:text-[#FF8001]">
                info@quadCoreInfra.com
              </a>
            </li>

            <li className="flex gap-3">
              <Clock className="w-5 h-5 mt-1" />
              Mon–Sat: 10 AM – 7 PM
              <br /> Sunday: Closed
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-[#A5B9AE] pt-6">
        <p>
          © 2025 QuadCore Infra. All rights reserved.
          <br />
          <Link className="hover:underline mx-1" to="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          |
          <Link className="hover:underline mx-1" to="/terms">
            Terms of Service
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
