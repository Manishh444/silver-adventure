import React from "react";
import Card, { coreValueCards } from "../Components/Card";

const AboutPage = () => {
  return (
    <>
      <main className="w-full">
        <section className="min-w-full bg-quadcore-lightBackground py-6">
          <div className="px-4 mt-10">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-4xl md:text-5xl text-quadcore-primary font-bold text-center">
                About{" "}
                <span className="text-quadcore-accent">Quadcore Infra</span>
              </h1>
              <p className="text-lg text-center leading-relaxed max-w-2xl text-quadcore-muted">
                Quadcore is a multidisciplinary architecture and design studio
                redefining how spaces connect people, nature, and purpose
                through thoughtful and sustainable design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-6">
              <div className="space-y-6 text-pretty">
                <h2 className="text-3xl font-bold text-quadcore-primary">
                  Who We Are
                </h2>
                <p className="text-base text-quadcore-muted">
                  Quadcore Infra is a design-led architecture and construction
                  studio specializing in sustainable yet refined architectural,
                  interior, and landscape solutions. We function as both a
                  design studio and a construction company, ensuring seamless
                  execution from concept to completion.
                </p>
                <p className="text-base text-quadcore-muted">
                  Our work focuses on creating spaces that are contextual,
                  functional, and timeless—balancing aesthetics, sustainability,
                  and craftsmanship.
                </p>
              </div>

              <div className="space-y-4 text-pretty">
                <h2 className="text-3xl font-bold text-quadcore-primary">
                  Our Approach
                </h2>
                <p className="text-base text-quadcore-muted">
                  We believe true luxury lies in sustainability. Our approach is
                  rooted in contextual relevance, responsible material choices,
                  and energy- efficient design strategies that enhance
                  well-being and respect nature.
                </p>
                <p className="text-base text-quadcore-muted">
                  By integrating architecture, interiors, and landscape design,
                  we create harmonious spaces that are visionary, purposeful,
                  and built to stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-quadcore-sectionBg">
          <div className="px-4">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-quadcore-primary">
                Our Core Values
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 py-6">
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
