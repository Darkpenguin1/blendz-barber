import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex G.",
    review: "Best barber shop in town! Super friendly staff and always a perfect cut.",
    date: "May 2025",
  },
  {
    name: "Maria S.",
    review: "Love the vibe and attention to detail. Highly recommend Blendz!",
    date: "April 2025",
  },
  {
    name: "Chris P.",
    review: "Clean shop, great fades, and easy booking. I won’t go anywhere else.",
    date: "March 2025",
  },
];

function Reviews() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-6xl mx-auto my-20 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-yellow-400 drop-shadow-sm">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="border border-yellow-400 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
          >
            <p className="text-blue-500 text-lg italic mb-4 leading-relaxed">
              “{t.review}”
            </p>
            <div className="mt-auto">
              <p className="text-[#03045e] font-semibold text-lg">{t.name}</p>
              <p className="text-[#03045e] text-sm">{t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Reviews;
