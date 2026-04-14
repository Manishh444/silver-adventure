import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryModal = ({ images = [], title, onClose }) => {
  const [index, setIndex] = useState(0);

  // ✅ Reset index on new images
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // ✅ LOCK BACKGROUND (CRITICAL FIX)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    };
  }, []);

  if (!images.length) return null;

  const next = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999999]"
      style={{ pointerEvents: "auto" }}
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative bg-white rounded-2xl p-4 max-w-4xl w-full mx-4"
        style={{ pointerEvents: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow z-50"
        >
          <X size={24} />
        </button>

        {/* IMAGE */}
        <div className="relative h-[450px] flex items-center justify-center">
          <img
            src={images[index]}
            alt={title}
            decoding="async"
            className="w-full h-full object-contain"
          />

          {/* PREV */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 bg-white p-2 rounded-full shadow z-50"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* NEXT */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 bg-white p-2 rounded-full shadow z-50"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>

        {/* COUNTER */}
        <p className="text-center mt-3">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default GalleryModal;