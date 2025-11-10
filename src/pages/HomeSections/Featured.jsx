import React from "react";
import ProjectCard, { buildingData } from "../../Components/ProjectCard";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section className="bg-quadcore-sectionBg py-6">
      <div className="px-4">
        <div className="flex flex-col items-center text-center py-12 space-y-4">
          <h2 className="text-4xl md:text-5xl text-quadcore-primary font-bold">
            Featured Projects
          </h2>
          <p className="text-lg text-quadcore-muted max-w-2xl">
            Showcasing our latest completed projects that demonstrate our
            commitment to quality and innovation .
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-6 md:gap-6 justify-items-center">
          {buildingData.map((project) => {
            return (
              <ProjectCard key={project?.id} projectCardDetails={project} />
            );
          })}
        </div>
        <div className="flex items-center justify-center mb-6">
          <Link to="/work">
            <Button
              className="px-8 py-2 rounded-md text-sm my-6 font-medium text-quadcore-lightBackground border bg-quadcore-primary hover:bg-quadcore-muted"
              text="View All Projects &rarr;"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
