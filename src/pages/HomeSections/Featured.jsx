import React from "react";
import ProjectCard from "../../Components/ProjectCard";
import buildingData from "../../data/featureProjectData";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Featured = () => {
  return (
    <section className="bg-quadcore-sectionBg py-12 md:py-16">
      <div className="px-4 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-quadcore-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-quadcore-muted max-w-2xl">
            Highlighting our completed, ongoing, and upcoming projects that
            demonstrate our dedication to quality, innovation, and seamless
            execution.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {buildingData?.slice(0, 3).map((project) => (
            <motion.div
              key={project?.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}>
              <ProjectCard projectCardDetails={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="flex items-center justify-center mt-10">
          <Link to="/work">
            <Button
              className="px-8 py-3 rounded-xl text-sm font-semibold shadow-md bg-quadcore-primary text-quadcore-lightBackground transition hover:bg-quadcore-muted hover:shadow-lg"
              text="View All Projects →"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
