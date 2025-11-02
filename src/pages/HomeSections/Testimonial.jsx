import React from "react";
import TestimonialCard, {
  testimonials,
} from "../../Components/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-5xl text-quadcore-primary font-bold">
            What Our Clients Say
          </h2>
          <p className="text-lg text-quadcore-accent w-[600px]">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our work .
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3 justify-items-center xl:gap-8">
          {testimonials.map((card) => {
            return <TestimonialCard key={card?.id} testimonialDetail={card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
