import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Blendz Barber & Hair Salon</title>
        <meta name="contact" content="Contact Blendz Barber shop and salon in Austin TX"/>

      </Helmet>
      <motion.main
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen bg-[#03045e] flex flex-col items-center justify-center py-12 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#ffd60a] mb-8 text-center drop-shadow-lg">
          Contact Us
        </h1>
        <div className="bg-[#023e8a] rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 max-w-4xl w-full">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center text-[#caf0f8]">
            <h2 className="text-2xl font-bold mb-2 text-[#ffd60a]">Blends Barber & Hair Salon</h2>
            <p className="mb-1">2006 W Parmer Ln, Austin, TX</p>
            <p className="mb-1">
              Phone: <a href="tel:5129705285" className="text-[#ffd60a] hover:underline">512-970-5285</a>
            </p>
            <p className="mb-4">
              Email: <a href="mailto:jjesusbarbero@gmail.com" className="text-[#ffd60a] hover:underline">jjesusbarbero@gmail.com</a>
            </p>
            <p className="mb-4">Hours: Mon–Sat 10am–8pm</p>
            {/* Instagram CTA */}
            <div className="flex items-center gap-2 mt-2">
              <a
                href="https://www.instagram.com/blendzbarbershopatx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon sx={{ color: '#ffd60a', fontSize: 32, verticalAlign: 'middle' }} />
              </a>
              <span className="text-[#ffd60a] font-semibold">
                You can also <a href="https://www.instagram.com/blendzbarbershopatx/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#caf0f8]">book or message us on Instagram!</a>
              </span>
            </div>
          </div>
          {/* Google Map */}
          <div className="flex-1 flex justify-center items-center">
            <div
              style={{
                overflow: "hidden",
                borderRadius: "0.75rem",
                width: "100%",
                maxWidth: 350,
                height: 250,
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7151146967135!2d-97.69758952425394!3d30.415823674738736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cea1d128259f%3A0x42bfca3fa382b3e9!2s2006%20W%20Parmer%20Ln%2C%20Austin%2C%20TX%2078727!5e0!3m2!1sen!2sus!4v1749360248500!5m2!1sen!2sus"
                style={{
                  width: "100%",
                  height: "100%",
                  border: 0,
                  borderRadius: "0.75rem",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
}