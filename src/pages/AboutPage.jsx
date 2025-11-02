import React from "react";
import Card, { coreValueCards } from "../Components/Card";

const AboutPage = () => {
  return (
    <>
      <main className="w-full">
        <section className="mt-20 py-6">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-5xl text-quadcore-primary font-bold text-center">
                About{" "}
                <span className="text-quadcore-accent">Quadcore Infra</span>
              </h1>
              <p className="text-lg text-center leading-relaxed w-[800px] text-quadcore-muted">
                With years of expertise in construction and interior design,
                we've built a reputation for delivering excellence, innovation,
                and reliability in every project we undertake.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-6 text-pretty">
                <h2 className="text-3xl font-bold text-quadcore-primary">
                  Who We Are
                </h2>
                <p className="text-base text-quadcore-muted">
                  Quadcore Infra is a leading construction and interior design
                  company dedicated to transforming spaces into extraordinary
                  environments. Our team of experienced professionals brings
                  together creativity, technical expertise, and a commitment to
                  excellence.
                </p>
                <p className="text-base text-quadcore-muted">
                  From residential projects to large-scale commercial
                  developments, we handle every aspect of construction and
                  design with meticulous attention to detail and a focus on
                  sustainable practices.
                </p>
              </div>
              <div className="space-y-4 text-pretty">
                <h2 className="text-3xl font-bold text-quadcore-primary">
                  Our Approach
                </h2>
                <p className="text-base text-quadcore-muted">
                  We believe in a collaborative approach that puts our clients
                  at the center of everything we do. By combining innovative
                  design solutions with proven construction methodologies, we
                  ensure projects are completed on time, within budget, and to
                  the highest standards.
                </p>
                <p className="text-base text-quadcore-muted">
                  Our commitment to sustainability and quality has earned us the
                  trust of numerous clients across residential, commercial, and
                  industrial sectors.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-6">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h2 className="text-5xl font-bold text-quadcore-primary">
                Our Core Values
              </h2>
              <div className="grid grid-cols-4 gap-8 py-12 mb-6">
                {coreValueCards.map((card) => {
                  return <Card key={card?.id} cardDetails={card} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
