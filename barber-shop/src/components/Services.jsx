import '../styles/Services.css';
import { motion } from 'framer-motion';


function Services() {
  const services = [
    {
      name: "Classic Haircut",
      price: "$30",
      desc: "No razor no shave no eyebrows no beard just a stylish cut",
      img: "classic.png",
    },
    {
      name: "Skin Fade",
      price: "$35",
      desc: "Sharp skin fade for a modern, clean look.",
      img: "fade.png",
    },
    {
      name: "Fade/haircut and or design",
      price: "$40",
      desc: "Fade with either design or eyebrows done",
      img: "fade-design.png",
    },
    {
      name: "Fade haircut and beard",
      price: "$45",
      desc: "Clean professional beard work with a fade haircut you can request a hot towel if you’d like",
      img: "beard.png",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.05 }}
      className="services-container"
      style={{ background: '#03045e', borderRadius: 12, margin: '2rem 0', maxWidth: 1100, marginLeft: 'auto', marginRight: 'auto' }}
    >
      <h2 className='text-5xl' style={{ color: '#ffd60a', fontWeight: 700, textAlign: 'center', margin: '0rem 0 1.5rem' }}>
        Our Services
      </h2>
      <div className="services-grid">
        {services.map((service) => (
          <figure className="services-card" key={service.name}>
            <img src={service.img} alt={service.name} />
            <div className="services-card-content">
              <div className="services-card-title">{service.name}</div>
              <div className="services-card-price">{service.price}</div>
              <div className="services-card-desc">{service.desc}</div>
            </div>
          </figure>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;