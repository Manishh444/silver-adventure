import React from "react";
import ServiceCards, { serviceCards } from "../Components/ServiceCards";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <>
      <main className="w-full">
        <section className="min-w-full bg-quadcore-lightBackground mt-20 py-6">
          <div className="px-4">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-4xl md:text-5xl text-quadcore-primary font-bold text-center">
                Our <span className="text-quadcore-accent">Services</span>
              </h1>
              <p className="text-lg text-center leading-relaxed max-w-2xl text-quadcore-muted">
                Comprehensive construction and design solutions tailored to meet
                your unique requirements and exceed your expectations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {serviceCards.map((card) => {
                return <ServiceCards cardDetails={card} />;
              })}
            </div>
            <div className="flex justify-center pb-14">
              <Link to="/contact">
                <Button
                  className="px-6 py-2 rounded-md text-sm text-quadcore-lightBackground hover:bg-quadcore-hoverText transition-colors font-bold border bg-quadcore-primary"
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
