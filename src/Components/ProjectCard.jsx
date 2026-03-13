import { useState } from "react";
import GalleryModal from "./GalleryModal";
const ProjectCard = ({ projectCardDetails, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="h-auto border pb-6 bg-white rounded-md shadow-sm hover:shadow-xl space-y-2 flex flex-col text-quadcore-accent hover:-translate-y-2 transition-all duration-300 cursor-pointer"
        onClick={() => setOpen(true)}>
        <div className="h-60 overflow-hidden rounded-t-md">
          <img
            className="object-cover transition-transform duration-300 hover:scale-110 rounded-t-md"
            src={projectCardDetails?.src}
            alt={projectCardDetails?.title}
          />
        </div>

        <div className="flex px-4 pt-4 items-center justify-between pb-3">
          <span className="font-bold text-xl text-quadcore-primary py-1">
            {projectCardDetails?.title}
          </span>
          <span
            className={`text-xs text-white rounded-full px-2.5 py-0.5 ${
              projectCardDetails?.type === "Residencial"
                ? "bg-[#FF851C]"
                : projectCardDetails?.type === "Commercial"
                ? "bg-quadcore-primary"
                : "bg-[#FF851C]"
            }`}>
            {projectCardDetails?.type}
          </span>
        </div>

        <p className="px-4 text-base pb-3">{projectCardDetails?.desc}</p>
        {children}
      </div>

      {open && (
        <GalleryModal
          images={projectCardDetails.images}
          title={projectCardDetails?.title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
