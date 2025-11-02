import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section className="py-6 bg-quadcore-accent overflow-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-5xl text-quadcore-lightBackground font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-[#E3E7E0] md:w-[600px]">
            Let's transform your vision into reality. Get a free consultation
            and quote today .
          </p>
          <div className="space-x-4">
            <Button
              className="px-6 py-2 bg-[#FF8001] rounded-md hover:cursor-default"
              spanClass="text-white text-sm"
              text="Get Free Consultation &rarr;"
            />
            <Link to="/contact">
              <Button
                className="px-6 py-2 rounded-md bg-white hover:bg-[#FF8001] group"
                spanClass="invisible text-white text-sm group-hover:visible "
                text="Call +91 9087654321"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
