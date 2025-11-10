import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section className="py-6 bg-quadcore-accent overflow-auto">
      <div className="px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-4xl md:text-5xl text-quadcore-lightBackground font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-quadcore-footerText max-w-2xl">
            Let's transform your vision into reality. Get a free consultation
            and quote today .
          </p>
          <div className="text-quadcore-lightBackground font-medium py-6 flex gap-2">
            <Button
              className="px-2 py-1 bg-[#FF8001] rounded-md hover:cursor-default"
              spanClass="text-quadcore-lightBackground text-sm"
              text="Get Free Consultation &rarr;"
            />
            <a href="tel:+919087654321" className="flex">
              <Button
                className="px-2 py-1 rounded-md bg-white hover:bg-[#FF8001] group"
                spanClass="invisible text-quadcore-lightBackground text-sm group-hover:visible "
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
