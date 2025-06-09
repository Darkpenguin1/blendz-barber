import ContentCutIcon from '@mui/icons-material/ContentCut';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#03045e] sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 px-2 sm:px-6 lg:px-8 flex-wrap">
        {/* Logo and site name */}
        <div className="flex items-center">
          <ContentCutIcon sx={{ color: '#ffd60a', fontSize: 36 }} />
          <span className="ml-3 font-bold text-xl text-[#ffffff]">Blendz Barber & Hair Salon</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:justify-end space-x-4">
          <Link to={"/"} className="p-2 text-[#caf0f8] hover:text-[#ffd60a] font-semibold transition-all duration-100">Home</Link>
          
          <Link to={"/gallery"} className="p-2 text-[#caf0f8] hover:text-[#ffd60a] font-semibold transition-all duration-100">Gallery</Link>
          <Link to={"/contact"} className="p-2 text-[#03045e] bg-[#ffd60a] hover:bg-[#ffe066] font-bold rounded-lg px-4 py-2 transition-all duration-100">Book Now</Link>
        </div>
        {/* Hamburger menu for mobile */}
        <div className='md:hidden'>
          <button onClick={toggleNav} className="cursor-pointer text-[#ffd60a]">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        {isOpen && (
          <div className='md:hidden flex flex-col items-center basis-full bg-[#03045e] mt-4 rounded-lg 
            transition-all duration-300 ease-in-out
            opacity-100 translate-y-0
            animate-slideDown'
            style={{
              animation: 'slideDown 0.15s ease'
            }}
          >
            <Link to={"/"} className="p-2 text-[#caf0f8] hover:text-[#ffd60a] font-semibold transition-all duration-100">Home</Link>
            
            <Link to={"/gallery"} className="p-2 text-[#caf0f8] hover:text-[#ffd60a] font-semibold transition-all duration-100">Gallery</Link>
            <Link to={"/contact"} className="p-2 text-[#03045e] bg-[#ffd60a] hover:bg-[#ffe066] font-bold rounded-lg px-4 py-2 transition-all duration-100">Book Now</Link>
          </div>
        )}
      </div>
    </nav>
  );
}