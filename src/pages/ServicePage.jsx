import React from "react";
import ServiceCards, { serviceCards } from "../Components/ServiceCards";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <>
      <main className="w-full">
        <section className="mt-20 py-6">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-5xl text-quadcore-primary font-bold text-center">
                Our <span className="text-quadcore-accent">Services</span>
              </h1>
              <p className="text-lg text-center leading-relaxed w-[800px] text-quadcore-muted">
                Comprehensive construction and design solutions tailored to meet
                your unique requirements and exceed your expectations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {serviceCards.map((card) => {
                return <ServiceCards cardDetails={card} />;
              })}
            </div>
            <div className="flex justify-center pb-14">
              <Link to="/contact">
                <Button
                  className="px-6 py-3 rounded-md text-sm text-quadcore-lightBackground hover:bg-quadcore-accent transition-colors font-bold border bg-quadcore-primary"
                  text="Get a Free Consultation"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicePage;
