import { motion } from "framer-motion";

const images = [
  { src: "fade.png", alt: "Classic Fade" },
  { src: "fade.png", alt: "Beard Trim" },
  { src: "fade.png", alt: "Kids Cut" },
  { src: "fade.png", alt: "Design Work" },
  // Add more images as needed
];

function Gallery() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[#03045e] py-12 px-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-[#ffd60a] mb-8 text-center drop-shadow-lg">
        Take a peek Into our Gallery
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-lg bg-[#023e8a]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </motion.main>
  );
}


export default Gallery;