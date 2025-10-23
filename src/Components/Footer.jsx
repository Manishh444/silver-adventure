import React from "react";
import logo from "../assets/company-logo.png";
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
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

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-quadcore-primary text-quadcore-lightBackground">
      <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-4 items-start gap-4 border-b-2 py-4">
        <div className="space-y-2">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 h-16 hover:cursor-pointer"
          />
          <p className="text-base text-balance leading-relaxed">
            Transforming spaces with expert construction and innovative interior
            design solutions. Your dream project, our expertise
          </p>
          <div className="flex gap-8 items-center space-y-2">
            <Facebook className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-2" />
            <Instagram className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-1" />
            <Twitter className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-1" />
            <Linkedin className="hover:text-[#FF8001] w-5 h-5 flex-shrink-0 items-start mt-1" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 pt-6 text-sm">
          <h3 className="text-lg font-bold">Quick Links</h3>
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
        <div className="flex flex-col space-y-3 pt-6 text-sm">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-3 list-none">
            <li>Residencial Constructions</li>
            <li>Commercial Projects</li>
            <li>Interior Design</li>
            <li>Project Management</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-3 pt-6 text-base text-pretty">
          <h3 className="text-lg font-bold">Contact Info</h3>
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
