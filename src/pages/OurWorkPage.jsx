import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "../Components/ProjectCard";
import buildingData from "../data/featureProjectData";

const OurWorkPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null);

  const hasMore = visibleCount < buildingData.length;

  useEffect(() => {
    const currentRef = loadMoreRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && hasMore) {
          setVisibleCount((prev) =>
            Math.min(prev + 6, buildingData.length)
          );
        }
      },
      {
        rootMargin: "200px",
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect(); // 🔥 better cleanup
    };
  }, [hasMore]); // OK to keep

  const visibleProjects = buildingData.slice(0, visibleCount);

  return (
    <main className="w-full">
      <section className="min-w-full bg-quadcore-lightBackground py-6">
        <div className="px-4 mt-10">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center py-12 space-y-4">
            <h1 className="text-4xl md:text-5xl text-quadcore-primary font-bold">
              Our <span className="text-quadcore-accent">Work</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-2xl text-quadcore-muted">
              Explore our portfolio of completed projects that showcase our
              expertise in construction, design, and project management.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="py-12 grid md:grid-cols-3 gap-4 md:gap-6">
            {visibleProjects.map((card) => (
              <ProjectCard key={card.id} projectCardDetails={card}>
                <p className="px-4 py-0 text-sm text-quadcore-muted">
                  {card?.additionalDesc}
                </p>
              </ProjectCard>
            ))}
          </div>

          {/* 🔥 LOAD MORE TRIGGER */}
          {hasMore && (
            <div
              ref={loadMoreRef}
              className="h-20 flex items-center justify-center text-gray-500"
            >
              Loading more...
            </div>
          )}

        </div>
      </section>
    </main>
  );
};

export default OurWorkPage;