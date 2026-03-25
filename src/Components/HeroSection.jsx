import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import GetQuotationModal from "./GetQuotationModal";

const heroImages = [
  "/office/01-RECEPTION V-1.COVER PIC.webp",
  "/office/02.COVER PIC.webp",
  "/office/02.webp",
  "/office/5.webp"
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Image carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-dvh grid grid-cols-1 md:grid-cols-2">
      {/* LEFT: Content */}
      <div className="flex items-center bg-[#00441b] px-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mt-9">
            Building Dreams,
            <span className="block text-[#FF8001] mt-3">Designing Futures</span>
          </h1>

          <p className="text-[#E3E7E0] text-lg md:text-xl min-h-[96px]">
            <Typewriter
              words={[
                "Expert construction and interior design services that transform your vision into reality. From concept to completion, we deliver excellence.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={35}
            />
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-4">
            <a href="tel:+919900064128">
              <Button
                className="px-6 py-3 bg-[#FF8001] text-white rounded-md hover:bg-[#e36f00] transition"
                text="Contact Us"
              />
            </a>

           <GetQuotationModal
  triggerLabel="Get Quotation"
  variant="contact"
/>
          </div>

        </motion.div>
      </div>

      {/* RIGHT: Image Carousel with Gradient Merge */}
      <div className="relative overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={heroImages[current]}
            src={heroImages[current]}
            alt="Project showcase"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#00441b] via-[#00441b]/10 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;