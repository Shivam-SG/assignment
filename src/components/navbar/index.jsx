import React, { useState } from "react";
import Header from "./Header";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <Header />
      <div className="h-[72px] px-4 sm:px-20 py-5 flex justify-between items-center border-b border-gray-200">
        {/* Logo */}
        <div>
          <img
            src="/logo.png"
            
            alt="Company Logo"
            className="w-[8rem] sm:w-[10rem]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-9">
          <ul className="flex gap-10">
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Home</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Our Services</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Blog</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Contact Us</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">About Us</a>
            </li>
          </ul>

          <HiOutlineMagnifyingGlass className="text-xl hover:text-gray-500 cursor-pointer" />

          <button className="bg-[#FFA229] text-white px-6 rounded-lg py-3">
            Talk An Expert
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md absolute top-[72px] left-0 w-full px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Home</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Our Services</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Blog</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">Contact Us</a>
            </li>
            <li className="font-semibold hover:text-gray-500">
              <a href="/">About Us</a>
            </li>
          </ul>

          <div className="flex justify-between mt-4">
            <HiOutlineMagnifyingGlass className="text-xl hover:text-gray-500 cursor-pointer" aria-label="Search" />
            <button className="bg-[#FFA229] text-white px-6 rounded-lg py-3">
              Talk An Expert
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
