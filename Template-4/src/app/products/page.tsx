'use client'
import React from 'react';
import Header from '../components/Header';
import FeaturedProducts from '../components/FeaturedProducts';
import LatestProducts from '../components/LatestProducts';
import TrendingProducts from '../components/TrendingProducts';
import Footer from '../components/Footer';
import Link from 'next/link';

 const page = () => {

  return (
 
<div>

 <Header />
    <div>
      {/* Header Section */}
      <div className="py-16 ml-8 lg:ml-36 space-y-2">
        <h1 className="text-4xl font-bold text-[#001F54]">Products</h1> {/* Dark blue */}
        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <p className="text-sm text-black">
         <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">AllProducts</span>
          </p>
        </div>
      </div>
     </div>
     <div>
  
      <FeaturedProducts/>
      <LatestProducts />
      <TrendingProducts />
      
      <Footer />
    </div>
   </div>


   );
 };
 export default page;