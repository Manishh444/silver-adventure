import React from "react";
import HeroSection from "../Components/HeroSection";
import Card, { cardData } from "../Components/Card";
import ProjectCard, { buildingData } from "../Components/ProjectCard";
import Button from "../Components/Button";
import TestimonialCard, { testimonials } from "../Components/TestimonialCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <section className="py-6">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col items-center text-center py-12 space-y-4">
            <h2 className="text-4xl font-bold">Why Choose QuadcoreInfra?</h2>
            <p className="text-base w-[600px]">
              We combine expertise, quality, and innovation to deliver
              exceptional results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-8 py-12 mb-6">
            {cardData.map((card) => {
              return <Card key={card.id} cardDetails={card} />;
            })}
          </div>
        </div>
      </section>
      <section className=" bg-gray-100 py-6">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col items-center text-center py-12 space-y-4">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-base w-[600px]">
              Showcasing our latest completed projects that demonstrate our
              commitment to quality and innovation .
            </p>
          </div>
          <div className="flex gap-8 py-12 justify-center">
            {buildingData.map((project) => {
              return (
                <ProjectCard key={project?.id} projectCardDetails={project} />
              );
            })}
          </div>
          <div className="flex items-center justify-center my-6">
            <Button
              className="px-6 py-2 rounded-md text-sm border"
              text="View All Projects &rarr;"
            />
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col items-center text-center py-12 space-y-4">
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-base w-[600px]">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about our work .
            </p>
          </div>
          <div className="flex justify-center gap-8 py-12 items-center mb-6">
            {testimonials.map((card) => {
              return (
                <TestimonialCard key={card?.id} testimonialDetail={card} />
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-6 bg-[#355E3C]">
        <div className="max-w-screen-xl mx-auto px-8">
          <div className="flex flex-col items-center text-center py-12 space-y-4">
            <h2 className="text-4xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-lg w-[600px]">
              Let's transform your vision into reality. Get a free consultation
              and quote today .
            </p>
            <div className="space-x-4">
              <Button
                className="px-6 py-2 bg-[#F9971A] rounded-md hover:cursor-default"
                spanClass="text-white text-sm"
                text="Get Free Consultation &rarr;"
              />
              <Link to="/contact">
                <Button
                  className="px-6 py-2 rounded-md bg-white hover:bg-[#f9971a] group"
                  spanClass="invisible text-white text-sm group-hover:visible "
                  text="Contact Us"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
