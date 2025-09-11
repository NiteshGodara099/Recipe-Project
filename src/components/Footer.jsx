import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-[Lobster]">
            Foodieland<span className="text-red-400">.</span>
          </div>
          <div className="flex space-x-20">
            <NavLink to="/recipe" className="hover:text-gray-400">
              Recipe
            </NavLink>
            <NavLink to="/blog" className="hover:text-gray-400">
              Blog
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-400">
              Contact
            </NavLink>
          </div>
        </div>

         <hr className="border-t border-gray-200 my-6" />
        <div className="relative mt-4 flex items-center">
          {/* Centered copyright */}
          <p className="absolute left-1/2 -translate-x-1/2 text-center">
            &copy; {new Date().getFullYear()} Foodieland. All rights reserved.
          </p>
         
          {/* Icons aligned to the right */}
          <div className="ml-auto flex space-x-4">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
