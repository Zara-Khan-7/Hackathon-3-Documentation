"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  HeartIcon, 
  Bars3Icon, 
  XMarkIcon 
} from "@heroicons/react/24/outline";
import TopBar from "./TopBar";
import { IoLogInOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // Check if admin is logged in
  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear admin session
    setIsAdmin(false);
    router.push("/adminlogin"); // Redirect to login page
  };

  return (
    <>
      {/* Top Bar */}
      <TopBar />

      {/* Main Header */}
      <div className="w-full h-[80px] flex justify-center items-center border-b-2">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-10">
          {/* Left Section: Logo and Search Bar */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <h1 className="text-3xl font-bold">
              <Link href="/">Hekto</Link>
            </h1>

            {/* Search Bar */}
            <div className="hidden sm:flex items-center border rounded-md overflow-hidden bg-gray-100">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-60 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <button className="p-2 bg-[#FB2E86] text-white hover:bg-[#F94C9B] transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="hidden sm:flex items-center gap-x-8">
            <ul className="flex gap-x-8 items-center">
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/shoplist">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#FB2E86] transition-colors" href="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section: Icons */}
          <div className="hidden sm:flex items-center gap-x-6">
            <Link href="/cart" className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Cart</span>
            </Link>
            <Link href="/wishlist" className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
              <HeartIcon className="w-5 h-5" />
              <span>Wishlist</span>
            </Link>

            {/* Login */}
            <Link href="/account">
              <div className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
                <span>Login</span>
                <IoLogInOutline className="w-5 h-5" />
              </div>
            </Link>

            {/* Admin Panel (Only Show if NOT Logged In) */}
            {!isAdmin && (
              <Link href="/adminlogin">
                <div className="hover:text-[#FB2E86] transition-colors flex items-center gap-1">
                  <span>Admin</span>
                  <RiAdminLine className="w-5 h-5" />
                </div>
              </Link>
            )}

            {/* Logout (Only Show if Admin is Logged In) */}
            {isAdmin && (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden flex items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-black" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
