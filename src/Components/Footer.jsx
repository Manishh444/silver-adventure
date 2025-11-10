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
    <footer className="w-full py-12 bg-quadcore-accent text-quadcore-footerText">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-start place-items-center gap-4 border-b-[0.5px] border-b-[#A5B9AE] mx-4 py-4  ">
        <div className="space-y-2">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 h-16 hover:cursor-pointer"
            />
          </Link>
          <p className="text-base text-balance leading-relaxed">
            Transforming spaces with expert construction and innovative interior
            design solutions. Your dream project, our expertise
          </p>
          <div className="flex gap-8 space-y-2">
            <Facebook className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-2" />
            <Instagram className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-1" />
            <Twitter className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-1" />
            <Linkedin className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-1" />
          </div>
        </div>
        <div className="space-y-2 pt-6 text-sm w-full">
          <h3 className="text-lg font-bold text-quadcore-lightBackground">
            Quick Links
          </h3>
          <ul className="space-y-3 list-none">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/work">Our Work</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2 pt-6 text-sm w-full">
          <h3 className="text-lg font-bold text-quadcore-lightBackground">
            Services
          </h3>
          <ul className="space-y-3 list-none ">
            <li>Residencial Constructions</li>
            <li>Commercial Projects</li>
            <li>Interior Design</li>
            <li>Project Management</li>
          </ul>
        </div>
        <div className="space-y-2 pt-6 text-base text-pretty w-full">
          <h3 className="text-lg font-bold text-quadcore-lightBackground">
            Contact Info
          </h3>
          <ul className="space-y-3 list-none">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" /> 123 Construction
              Avenue , Building District , Mumbai- 400001
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 flex-shrink-0 mt-1" /> +919087654321
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
              info@quadCoreInfra.com
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 flex-shrink-0 mt-1" /> Mon- Sat: 10 AM-
              7 PM Sunday: Closed
            </li>
          </ul>
        </div>
      </div>
      <div className="px-4 py-2 text-center text-sm space-y-2 text-[#A5B9AE]">
        <p className="pt-6">
          © 2025 QuadCore Infra. All rights reserved. | Privacy Policy | Terms
          of Service{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
