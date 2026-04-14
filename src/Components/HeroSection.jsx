import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [startSlider, setStartSlider] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // ✅ DELAY SLIDER (keeps LCP stable)
  useEffect(() => {
    const delay = setTimeout(() => {
      setStartSlider(true);
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  // ✅ START CAROUSEL AFTER DELAY
  useEffect(() => {
    if (!startSlider) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [startSlider]);

  // ✅ PRELOAD NEXT IMAGE
  useEffect(() => {
    const nextIndex = (current + 1) % heroImages.length;
    const img = new Image();
    img.src = heroImages[nextIndex];
  }, [current]);

  return (
    <section className="min-h-dvh grid grid-cols-1 md:grid-cols-2">

      {/* LEFT */}
      <div className="flex items-center bg-[#00441b] px-8 md:px-10">
        <div className="max-w-xl space-y-6">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mt-9">
            Building Dreams,
            <span className="block text-[#FF8001] mt-3">
              Designing Futures
            </span>
          </h1>

          {/* ❌ REMOVED TYPEWRITER (LCP FIX) */}
          <p className="text-[#E3E7E0] text-lg md:text-xl">
            Expert construction and interior design services that transform your vision into reality. From concept to completion, we deliver excellence.
          </p>

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
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative overflow-hidden">

        {/* ✅ FIRST IMAGE = NO ANIMATION (LCP FIX) */}
        {current === 0 ? (
          <motion.img
            key={heroImages[current]}
            src={heroImages[current]}
            alt="Project showcase"
            loading={current === 0 ? "eager" : "lazy"}
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[current]}
              src={heroImages[current]}
              alt="Project showcase"

              loading="lazy"
              decoding="async"

              onLoad={() => setLoaded(true)}

              className="absolute inset-0 w-full h-full object-cover will-change-transform"

              initial={{ opacity: 1, scale: 1 }}   // ✅ visible immediately
              animate={
                loaded
                  ? { scale: 1.03 }   // subtle zoom only
                  : {}
              }
              exit={{ opacity: 0 }}

              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </AnimatePresence>
        )}

        {/* GRADIENT */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#00441b] via-[#00441b]/10 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;