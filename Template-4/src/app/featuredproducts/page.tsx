'use client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {client} from '../../sanity/lib/client';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; // Icons for wishlist
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

type Product = {
  _id: string;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  stockLevel: number;
};

function FeaturedProducts() {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

const goToProductDetail = (id: string) => {
  router.push(`/productdetail/${id}`);
};

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        *[_type == "product" && isFeaturedProduct == true] {
          _id,
          name,
          "imageUrl": image.asset->url,
          price,
          description,
          discountPercentage,
          stockLevel
        }
      `;
      try {
        const sanityProducts = await client.fetch(query);
        setProducts(sanityProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();

    // Load cart and wishlist from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setCart(savedCart);
    setWishlist(savedWishlist);
  }, []);

  // Persist cart and wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product: Product) => {
    if (cart.some((item) => item._id === product._id)) {
      toast.info(`${product.name} is already in the cart!`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const toggleWishlist = (product: Product) => {
    const isInWishlist = wishlist.some((item) => item._id === product._id);
    const toastId = `wishlist-${product._id}`;

    if (isInWishlist) {
      // Remove from wishlist
      toast.info(`${product.name} removed from wishlist!`, { toastId });
      setWishlist(wishlist.filter((item) => item._id !== product._id));
    } else {
      // Add to wishlist
      toast.success(`${product.name} added to wishlist!`,  { toastId: `wishlist-${product._id}` } );
      setWishlist([...wishlist, product]);
    }
  };

  const displayedProducts = showAll ? products : products.slice(1, 5);

  return (
    <>
    <Header/>
    <div className="w-full bg-white py-20">
      <ToastContainer position="top-right" autoClose={1000} />

      <h2 className="text-black text-4xl text-center mb-16 font-bold">Featured Products</h2>

      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {displayedProducts.map((product) => (
          <div key={product._id} className="relative group">
            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
              <Image
                src={product.imageUrl}
                width={200}
                height={250}
                alt={product.name}
                className=" w-[200px] h-[250px] transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute top-3 right-3">
                {/* Wishlist Icon */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="text-red-500 text-2xl hover:text-red-700 transition-colors"
                >
                  {wishlist.some((item) => item._id === product._id) ? (
                    <AiFillHeart />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
              </div>

              <div className="absolute bottom-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="w-full py-2 text-sm bg-[#08D15F] rounded-none hover:bg-green-700 transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <button onClick={() => goToProductDetail(product._id)}>
              View Details
            </button>

            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-red-500">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-1 text-dark-blue-900">${product.price}</p>
              {product.discountPercentage > 0 && (
                <p className="text-green-600">Discount: {product.discountPercentage}%</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {products.length > 4 && (
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

export default FeaturedProducts;
