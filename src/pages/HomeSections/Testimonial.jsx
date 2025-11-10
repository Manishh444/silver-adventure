import React from "react";
import TestimonialCard, {
  testimonials,
} from "../../Components/TestimonialCard";

const Testimonial = () => {
  return (
    <section className="bg-quadcore-lightBackground py-6">
      <div className="px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-4xl md:text-5xl text-quadcore-primary font-bold">
            What Our Clients Say
          </h2>
          <p className="text-lg text-quadcore-accent max-w-2xl">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our work .
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 justify-items-center py-6 mb-6">
          {testimonials.map((card) => {
            return <TestimonialCard key={card?.id} testimonialDetail={card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
