import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const images = [
  { src: "fade.png", alt: "Classic Fade" },
  { src: "classic.png", alt: "Classic cut" },
  { src: "fade-design.png", alt: "Fade with a stylish design" },
  { src: "hero-design.png", alt: "Design Work" },
  // Add more images as needed
];

function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openLightbox = (idx) => {
    setCurrentIdx(idx);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <Helmet>
      <title>Gallery | Blendz Barber & Hair Salon</title>
      <meta name="description" content="Browse our gallery of fresh cuts and styles at Blendz Barber & Hair Salon in Austin, TX." />

    </Helmet>
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen bg-[#03045e] py-12 px-4"
        style={{
          background: "#0b0b45"
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffd60a] mb-8 text-center drop-shadow-lg">
          Take a peek Into our Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg bg-[#023e8a] cursor-pointer"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-8 text-3xl text-[#ffd60a] font-bold z-60"
              aria-label="Close"
            >
              &times;
            </button>
            <button
              onClick={showPrev}
              className="absolute left-4 md:left-12 text-4xl text-[#ffd60a] font-bold z-60"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <img
              src={images[currentIdx].src}
              alt={images[currentIdx].alt}
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-[#ffd60a]"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={showNext}
              className="absolute right-4 md:right-12 text-4xl text-[#ffd60a] font-bold z-60"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        )}
      </motion.main>
    </>
  );
}

export default Gallery;