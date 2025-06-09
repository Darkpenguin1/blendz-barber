import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <footer className="bg-[#03045e] text-[#caf0f8] py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Google Map */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <div
            style={{
              overflow: "hidden",
              borderRadius: "0.75rem",
              width: "100%",
              maxWidth: 400,
              height: 300,
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed/v1/place?q=2006+W+Parmer+Ln,+Austin,+TX&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              style={{
                width: "100%",
                height: "100%",
                border: 0,
                borderRadius: "0.75rem",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-2 text-[#ffd60a]">Contact Us!</h2>
          <p className="mb-1">2006 W Parmer Ln, Austin, TX</p>
          <p className="mb-1">
            Phone: <a href="tel:5129705285" className="text-[#ffd60a] hover:underline">512-970-5285</a>
          </p>
          
          <p className="mb-1">
            Email: <a href="mailto:jjesusbarbero@gmail.com" className="text-[#ffd60a] hover:underline">jjesusbarbero@gmail.com</a>
          </p>
          <a
            href="https://www.instagram.com/blendzbarbershopatx/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4"
            aria-label="Instagram"
          >
            <InstagramIcon sx={{ color: '#ffd60a', fontSize: 60, verticalAlign: 'middle' }} />
          </a>       
          <span className="text-sm text-[#90e0ef]">&copy; {new Date().getFullYear()} Blends Barber & Hair Salon. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;