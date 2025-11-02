import React from "react";
import Card, { cardData } from "../../Components/Card";

const WhyUs = () => {
  return (
    <section className="py-6 overflow-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-5xl font-bold text-quadcore-primary">
            Why Choose QuadcoreInfra?
          </h2>
          <p className="text-lg w-[600px] text-quadcore-accent">
            We combine expertise, quality, and innovation to deliver exceptional
            results that exceed expectations.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8 py-12 mb-6">
          {cardData.map((card) => {
            return <Card key={card.id} cardDetails={card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
