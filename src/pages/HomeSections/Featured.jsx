import React from "react";
import ProjectCard, { buildingData } from "../../Components/ProjectCard";
import Button from "../../Components/Button";

const Featured = () => {
  return (
    <section className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-5xl text-quadcore-primary font-bold">
            Featured Projects
          </h2>
          <p className="text-lg text-quadcore-accent md:w-[600px]">
            Showcasing our latest completed projects that demonstrate our
            commitment to quality and innovation .
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3 justify-items-center xl:gap-8">
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
  );
};

export default Featured;
