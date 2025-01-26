'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import { client } from '../../sanity/lib/client';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Product = {
  _id: string;
  imageUrl: string;
  name: string;
  code?: string;
  price: number;
  description?: string;
  discountPercentage?: number;
  stockLevel?: number;
  category?: string;
};

function TrendingProducts() {
  const [cart, setCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing 4 products and all

  // Fetch trending products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product"] {
          _id,
          name,
          "imageUrl": image.asset->url,
          price,
          description,
          discountPercentage,
          stockLevel,
          category
        }
      `;
      try {
        const sanityProducts = await client.fetch(query);
        setProducts(sanityProducts);
      } catch (error) {
        console.error('Failed to fetch trending products:', error);
      }
    };

    fetchProducts();

    // Load cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.some((item) => item._id === product._id);

      if (isProductInCart) {
        toast.info(`${product.name} is already in the cart!`);
        return prevCart;
      }

      const updatedCart = [...prevCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.success(`${product.name} added to cart!`);
      return updatedCart;
    });
  };

  const displayedProducts = showAll ? products : products.slice(10, 14); // Show only 4 products initially

  return (
    <>
    <Header/>
    <div className="w-full bg-white py-20">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-black text-4xl text-center mb-16 font-bold">Trending Products</h2>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <div key={product._id} className="relative group">
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
              <Image
                src={product.imageUrl}
                width={200}
                height={250}
                alt={product.name}
                className="object-cover w-[200px] h-[250px] transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute bottom-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="w-full py-2 text-sm bg-[#08D15F] rounded-none hover:bg-green-700 transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-red-500">{product.name}</h3>
              <p className="mt-1 text-dark-blue-900">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {products.length > 4 && ( // Show "View All" button only if there are more than 4 products
        <div className="text-center mt-10">
          <button
            className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-800 transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default TrendingProducts;
