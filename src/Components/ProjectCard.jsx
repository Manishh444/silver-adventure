import React from "react";

export const buildingData = [
  {
    id: 1,
    src: "../../public/villa.jpeg",
    title: "Luxury Villa",
    type: "Residential",
    desc: "Modern 4BHK villa with contemporary design",
  },
  {
    id: 2,
    src: "../../public/office.jpeg",
    title: "Corporate Office",
    type: "Commercial",
    desc: "Complete office renovation with modern interiors",
  },
  {
    id: 3,
    src: "../../public/residencial.jpeg",
    title: "Residential Complex",
    type: "Construction",
    desc: "50- unit residential project with premium amenities",
  },
];

const ProjectCard = ({ projectCardDetails }) => {
  return (
    <div className="h-auto border-[1px] py-12 text-balance rounded-md space-y-2 flex flex-col">
      <img
        className="object-cover h-60 rounded-t-md"
        src={projectCardDetails?.src}
        alt={projectCardDetails?.title}
      />
      <div className="flex px-4 pt-4 items-center justify-between">
        <span className="font-semibold text-lg py-1">
          {projectCardDetails?.title}
        </span>
        <span className="text-sm align-middle rounded-full bg-yellow-400 px-2 py-1">
          {projectCardDetails?.type}
        </span>
      </div>
      <p className="font-light px-4 text-sm text-gray-400">
        {projectCardDetails?.desc}
      </p>
    </div>
  );
};

export default ProjectCard;
