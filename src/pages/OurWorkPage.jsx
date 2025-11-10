import React from "react";
import ProjectCard, { buildingData } from "../Components/ProjectCard";

const OurWorkPage = () => {
  return (
    <>
      <main className="w-full">
        <section className="min-w-full bg-quadcore-lightBackground mt-20 py-6">
          <div className="px-4">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-4xl md:text-5xl text-quadcore-primary font-bold text-center">
                Our <span className="text-quadcore-accent">Work</span>
              </h1>
              <p className="text-lg text-center leading-relaxed max-w-2xl text-quadcore-muted">
                Explore our portfolio of completed projects that showcase our
                expertise in construction, design, and project management.
              </p>
            </div>
            <div className="py-12 grid md:grid-cols-3 gap-4 md:gap-6">
              {buildingData.map((card) => {
                return (
                  <>
                    <ProjectCard projectCardDetails={card}>
                      <p className="px-4 py-0 text-sm text-quadcore-muted">
                        {card?.additionalDesc}
                      </p>
                    </ProjectCard>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OurWorkPage;
