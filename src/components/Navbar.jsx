import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full p-4 flex justify-between items-center bg-white shadow-md backdrop-blur-md">
        <div className="logo">
          <Link to="/" className="h-12">
            <img src="https://www.svgrepo.com/show/501875/lighthouse-lighthouse.svg" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
  <Link
    to="/services"
    className="font-bold text-xl relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    Services
  </Link>
  <Link
    to="/offerings"
    className="font-bold text-xl relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    Giving
  </Link>
  <Link
    to="/preachings"
    className="font-bold text-xl relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    Service Notes
  </Link>
  <Link
    to="/admin"
    className="font-bold text-xl relative after:block after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    Admin
  </Link>
</div>


        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
          <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          <nav className="flex flex-col items-center space-y-8 text-white text-2xl font-bold">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/offerings" onClick={() => setIsOpen(false)}>Giving</Link>
            <Link to="/preachings" onClick={() => setIsOpen(false)}>Service Notes</Link>
            {/* <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link> */}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
