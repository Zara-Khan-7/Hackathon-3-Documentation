'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Product = {
  _id: string;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
};

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.info('Item removed from wishlist!');
  };

  return (

    <>
        {/* Header */}
        <Header/>


    <div className="w-full bg-white py-20">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-black text-4xl text-center mb-16 font-bold">Your Wishlist</h2>

      {wishlist.length > 0 ? (
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div key={product._id} className="relative group">
              <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
                <Image
                  src={product.imageUrl}
                  width={200}
                  height={250}
                  alt={product.name}
                  className=" w-[200px] h-[250px] transition-all duration-300 group-hover:scale-105"
                />
              </div>

              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-red-500">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <p className="mt-1 text-dark-blue-900">${product.price}</p>
              </div>

              <button
                onClick={() => removeFromWishlist(product._id)}
                className="w-full py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">Your wishlist is empty.</p>
      )}
    </div>

    {/* Footer */}
    <Footer/>
    </>
  );
};

export default WishlistPage;
