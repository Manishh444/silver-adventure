import React from "react";
import ProjectCard, { buildingData } from "../Components/ProjectCard";

const OurWorkPage = () => {
  return (
    <>
      <main className="w-full">
        <section className="py-6">
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="flex flex-col items-center text-center py-12 space-y-4">
              <h1 className="text-5xl text-quadcore-primary font-bold text-center">
                Our <span className="text-quadcore-accent">Work</span>
              </h1>
              <p className="text-lg text-center leading-relaxed w-[800px] text-quadcore-muted">
                Explore our portfolio of completed projects that showcase our
                expertise in construction, design, and project management.
              </p>
            </div>
            <div className="py-12 grid grid-cols-3 gap-8">
              {buildingData.map((card) => {
                return (
                  <>
                    <ProjectCard projectCardDetails={card}>
                      <p className="px-4 py-0 text-sm text-quadcore-accent">
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
