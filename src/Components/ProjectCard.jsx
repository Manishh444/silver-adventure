export const buildingData = [
  {
    id: 1,
    src: "/villa.jpeg",
    title: "Luxury Villa",
    type: "Residential",
    desc: "Modern 4BHK villa with contemporary design",
    additionalDesc:
      "Complete construction and interior design for a 3500 sq ft villa featuring open-plan living spaces, premium finishes, and smart home integration.",
  },
  {
    id: 2,
    src: "/office.jpeg",
    title: "Corporate Office",
    type: "Commercial",
    desc: "Complete office renovation with modern interiors",
    additionalDesc:
      "5000 sq ft office space transformation with collaborative workspaces, meeting rooms, and ergonomic design for a tech company.",
  },
  {
    id: 3,
    src: "/residencial.jpeg",
    title: "Residential Complex",
    type: "Construction",
    desc: "30-unit residential project with premium amenities",
    additionalDesc:
      "Multi-story residential complex with clubhouse, swimming pool, gym, and landscaped gardens across 2 acres.",
  },
];

const ProjectCard = ({ projectCardDetails, children }) => {
  return (
    <div className="h-auto border pb-6 bg-white  rounded-md shadow-sm hover:shadow-xl space-y-2 flex flex-col text-quadcore-accent hover:-translate-y-2 transition-all duration-300">
      <div className="h-60 overflow-hidden rounded-t-md">
        <img
          className="object-cover transition-transform duration-300 hover:scale-110 rounded-t-md"
          src={projectCardDetails?.src}
          alt={projectCardDetails?.title}
        />
      </div>
      <div className="flex px-4 pt-4 items-center justify-between pb-3">
        <span className="font-bold text-xl  text-quadcore-primary py-1">
          {projectCardDetails?.title}
        </span>
        <span
          className={`text-xs text-quadcore-lightBackground align-middle rounded-full px-2.5 py-0.5 hover:bg-quadcore-accent ${
            projectCardDetails?.type === "Residencial"
              ? "bg-[#FF851C]"
              : projectCardDetails?.type === "Commercial"
              ? "bg-quadcore-primary"
              : "bg-[#FF851C]"
          }`}
        >
          {projectCardDetails?.type}
        </span>
      </div>
      <p className="px-4 text-base pb-3">{projectCardDetails?.desc}</p>
      {children}
    </div>
  );
};

export default ProjectCard;
