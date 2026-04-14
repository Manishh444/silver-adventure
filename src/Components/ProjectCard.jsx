import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";

const ProjectCard = ({ projectCardDetails, children }) => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(""); // 🔥 NEW

  if (!projectCardDetails) return null;

  const { src, title, desc, type, images } = projectCardDetails;

  // 🔥 LAZY LOAD IMAGE
  useEffect(() => {
    let isMounted = true;

    if (src) {
      src().then((mod) => {
        if (isMounted) {
          setImgSrc(mod.default);
        }
      });
    }

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <>
      <div
        className="border bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
        onClick={() => setOpen(true)}
      >
        {/* 🔥 IMAGE */}
        <div className="h-60 overflow-hidden rounded-t-xl relative bg-gray-200">
          
          {/* ✅ Skeleton */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-300" />
          )}

          {/* ✅ Image */}
          {imgSrc && (
            <img
              src={imgSrc} // ✅ FIXED
              alt={title}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              onLoad={() => setLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${
                loaded
                  ? "opacity-100 blur-0 scale-100"
                  : "opacity-0 blur-md scale-105"
              }`}
            />
          )}
        </div>

        {/* 🔥 CONTENT */}
        <div className="px-4 pt-4 pb-4 flex flex-col gap-2">
          
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-bold text-lg text-quadcore-primary">
              {title}
            </h3>

            <span
              className={`text-xs text-white px-2.5 py-1 rounded-full whitespace-nowrap ${
                type === "Residential"
                  ? "bg-[#FF851C]"
                  : type === "Commercial"
                  ? "bg-quadcore-primary"
                  : type === "Construction"
                  ? "bg-green-600"
                  : "bg-gray-400"
              }`}
            >
              {type}
            </span>
          </div>

          <p className="text-sm font-medium text-quadcore-primary mt-1">
            {desc}
          </p>

          {children && (
            <div className="text-xs text-gray-500 mt-1">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* 🔥 MODAL */}
      {open && (
        <GalleryModal
          images={images || []}
          title={title}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;