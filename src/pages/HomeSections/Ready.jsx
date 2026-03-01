import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section className="py-0 bg-quadcore-accent overflow-auto">
      <div className="px-4">
        <div className="flex flex-col items-center text-center py-6 space-y-4">
          <h2 className="text-4xl md:text-5xl text-quadcore-lightBackground font-bold">
            Ready to Start Your Project with QUADCORE INFRA?
          </h2>
          <p className="text-lg md:text-xl text-quadcore-footerText max-w-2xl">
            Let's transform your vision into reality. Get a free consultation
            and quote today .
          </p>
          <div className="text-quadcore-lightBackground font-medium py-6 flex gap-2">
            {/* Get Free Consultation Button */}
            <Button
              className="px-3 py-1 bg-[#FF8001] rounded-md hover:bg-[#e86f00] transition text-quadcore-lightBackground"
              spanClass="text-sm"
              text="Get Free Consultation →"
            />

            {/* Call Button */}
            <a href="tel:+919087654321" className="flex">
              <Button
                className="px-3 py-1 rounded-md bg-white border border-[#FF8001] text-[#FF8001] hover:bg-[#FF8001] hover:text-white transition"
                spanClass="text-sm"
                text="Call +91 9087654321"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
