import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-600 text-black font-roboto shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
            <a href="#about" className="hover:text-gray-500">
              Recipe
            </a>
            <a href="#services" className="hover:text-gray-500">
              Blog
            </a>
            <a href="#contact" className="hover:text-gray-500">
              Contact
            </a>
            <a href="#contact" className="hover:text-gray-500">
              About Us
            </a>
          </div>
          <div className="flex space-x-2 ">
            <a href="#contact" className="hover:text-gray-500">
              <Facebook />
            </a>
            <a href="#contact" className="hover:text-gray-500">
              <Twitter />
            </a>
            <a href="#contact" className="hover:text-gray-500">
              <Instagram />
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#home" className="block hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-200">
            About
          </a>
          <a href="#services" className="block hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="block hover:text-gray-200">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
