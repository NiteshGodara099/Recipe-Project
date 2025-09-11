import React, { useState } from "react";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white-600 text-black font-roboto shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
          <div className="text-2xl font-[Lobster]">Foodieland<span className="text-red-400">.</span></div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-500"
            }>
              Home
            </NavLink>
            <NavLink to="/recipe" className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-500"
            }>
              Recipe
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-500"
            }>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "text-red-400" : "hover:text-gray-500"
            }>
              Contact
            </NavLink>
          </div>
          <div className="flex space-x-4 ">
            <NavLink to="#" className="hover:text-gray-500">
              <Facebook />
            </NavLink>
            <NavLink to="#" className="hover:text-gray-500">
              <Twitter />
            </NavLink>
            <NavLink to="#" className="hover:text-gray-500">
              <Instagram />
            </NavLink>
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
          <NavLink to="/" className="block hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/recipe" className="block hover:text-gray-200">
            Recipe
          </NavLink>
          <NavLink to="/blog" className="block hover:text-gray-200">
            Blog
          </NavLink>
          <NavLink to="/contact" className="block hover:text-gray-200">
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
