import { motion } from "framer-motion";

const heroImages = [
  "fade-hero.png",
  "fade-design.png",
  "hero-design.png",
];

function Hero() {
  return (
    <div className="relative w-full overflow-hidden shadow-lg flex flex-col items-center justify-center py-8 bg-black">
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pb-10 pt-2">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white">
          Welcome to Blendz Barber Shop
        </h1>
        <p className="text-lg md:text-3xl mb-6 drop-shadow text-white">
          Where Good Vibes, Natural Cuts, and Ambition Come Together to Build a Movement
        </p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="text-[#03045e] text-2xl bg-[#ffd60a] hover:bg-[#ffe066] font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-300/80 transition cursor-pointer"
        >
          Book Now
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto mb-8">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center bg-[#03045e] rounded-lg overflow-hidden shadow border-4
              ${idx > 0 ? 'hidden md:flex' : ''}`}
            style={{ height: 400, borderColor: "#03045e" }}
          >
            <img
              src={img}
              alt={`Hero ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Hero;