'use client';
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser, } from 'react-icons/fa';
import { useState } from 'react';

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
     <div className="bg-violet-700  text-white py-2 text-sm md:flex flex-wrap">
      <div className="w-full max-w-[1200px] mx-auto  items-center md:flex justify-between px-4 whitespace-nowrap">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Email */}
          <a href="mailto:mhhasanul@gmail.com" className="flex items-center gap-2 hover:text-gray-200">
            <FaEnvelope />
            <span>zaara.khan1795.zy@gmail.com</span>
          </a>
          {/* Phone */}
          <a href="tel:1234567890" className="flex items-center gap-2 hover:text-gray-200">
            <FaPhoneAlt />
            <span>+92 334 3677318</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
              {/* Language Dropdown */}
              <select className="hidden md:block bg-[#7E33E0] text-white text-[12px] sm:text-[15px] border-none outline-none rounded  py-1 cursor-pointer">
            <option value="english">English</option>
            <option value="urdu">Urdu</option>
            <option value="french">French</option>
          </select>

          {/* Currency Dropdown */}
          <select className="hidden md:block bg-[#7E33E0] text-white text-[12px] sm:text-[15px] border-none outline-none rounded  py-1 cursor-pointer">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pkr">PKR</option>
          </select>

          {/* Currency Selector
          <div
            className="relative cursor-pointer flex items-center gap-1 text-sm-hide"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div> */}

          {/* Login */}
<li className="flex items-center gap-2 hover:text-gray-200 text-xl">
  <Link href="/account">
    <FaUser />
  </Link>
</li>


        </div>
      </div>
    </div>
  );
};

export default TopBar;
