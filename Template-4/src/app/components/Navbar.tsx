"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-10">
        <div className="text-2xl font-bold text-gray-800">
          Hekto
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="focus:outline-none text-gray-800 "
          >
            <MdKeyboardArrowDown className="text-2xl" />
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="text-pink-600 space-x-1  flex cursor-pointer items-center">
            <span>Home</span>
            <MdKeyboardArrowDown />
          </div>
          <Link href="#" className="text-gray-800 hover:text-pink-500">
            Pages
          </Link>
          <Link href="#products" className="text-gray-800 hover:text-pink-500">
            Products
          </Link>
          <Link href="#LatestBlog" className="text-gray-800 hover:text-pink-500">
            Blog
          </Link>
          <Link href="#shop" className="text-gray-800 hover:text-pink-500">
            Shop
          </Link>
          <Link href="#Contact" className="text-gray-800 hover:text-pink-500">
            Contact
          </Link>
        </div>

        <div className="relative w-64 hidden lg:block">
          <input
            type="text"
            className="w-full border border-gray-300 pl-4 pr-12 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white p-3">
            <FaSearch />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden mt-4 px-6 sm:px-10 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-1 text-pink-600 cursor-pointer">
            <span>Home</span>
            <MdKeyboardArrowDown />
          </div>
          <Link href="#" className="text-gray-800 hover:text-pink-600 block">
            Pages
          </Link>
          <Link href="#" className="text-gray-800 hover:text-pink-600 block">
            Products
          </Link>
          <Link href="#" className="text-gray-800 hover:text-pink-600 block">
            Blog
          </Link>
          <Link href="#" className="text-gray-800 hover:text-pink-600 block">
            Shop
          </Link>
          <Link href="#" className="text-gray-800 hover:text-pink-600 block">
            Contact
          </Link>
        </div>

        <div className="relative mt-4">
          <input
            type="text"
            className="pl-4 pr-12 w-full border border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-600 text-white p-3">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
