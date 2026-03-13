import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GalleryModal = ({ images = [], title, onClose }) => {
    console.log("images from gallery modal", images);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // ESC to close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <motion.div
          className="relative bg-white rounded-2xl shadow-xl p-4 max-w-4xl w-full mx-4"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/70 hover:bg-white shadow cursor-pointer z-50">
            <X size={24} className="pointer-events-none" />
          </button>
          {/* Image */}
          <div className="relative w-full h-[450px] flex items-center justify-center overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={`${images[index]}`}
                alt={title}
                className="object-contain w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>

            {/* Prev Button */}
            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-3 bg-white/80 p-2 rounded-full shadow hover:bg-white transition">
                <ChevronLeft size={30} />
              </button>
            )}

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-3 bg-white/80 p-2 rounded-full shadow hover:bg-white transition">
                <ChevronRight size={30} />
              </button>
            )}
          </div>

          {/* Image Counter */}
          <p className="text-center mt-3 text-gray-600">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
