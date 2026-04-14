import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryModal = ({ images = [], title, onClose }) => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  // 🔥 LOAD IMAGES SAFELY (FUNCTION + STRING SUPPORT)
  useEffect(() => {
    let isMounted = true;

    const loadImages = async () => {
      try {
        const results = await Promise.all(
          images.map(async (img) => {
            // ✅ If already string
            if (typeof img === "string") return img;

            // ✅ If lazy function
            if (typeof img === "function") {
              const mod = await img();
              return mod.default;
            }

            // ❌ invalid
            return null;
          })
        );

        if (isMounted) {
          setLoadedImages(results.filter(Boolean)); // remove nulls
        }
      } catch (err) {
        console.error("Image load error:", err);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [images]);

  // ✅ Reset index when images change
  useEffect(() => {
    setIndex(0);
  }, [loadedImages]);

  // ✅ LOCK BACKGROUND SCROLL
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.pointerEvents = "none";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.pointerEvents = "auto";
    };
  }, []);

  // ⛔ SHOW LOADING STATE
  if (!loadedImages.length) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999999]">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  const next = (e) => {
    e.stopPropagation();
    setIndex((i) => (i + 1) % loadedImages.length);
  };

  const prev = (e) => {
    e.stopPropagation();
    setIndex((i) => (i - 1 + loadedImages.length) % loadedImages.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999999]"
      style={{ pointerEvents: "auto" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative bg-white rounded-2xl p-4 max-w-4xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ❌ CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow z-50"
        >
          <X size={24} />
        </button>

        {/* 🖼 IMAGE */}
        <div className="relative h-[450px] flex items-center justify-center">
          <img
            src={loadedImages[index]}
            alt={title}
            decoding="async"
            className="w-full h-full object-contain"
          />

          {/* ◀ PREV */}
          {loadedImages.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 bg-white p-2 rounded-full shadow z-50"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* ▶ NEXT */}
          {loadedImages.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 bg-white p-2 rounded-full shadow z-50"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>

        {/* 🔢 COUNTER */}
        <p className="text-center mt-3">
          {index + 1} / {loadedImages.length}
        </p>
      </div>
    </div>
  );
};

export default GalleryModal;