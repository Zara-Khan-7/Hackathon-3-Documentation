'use client';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart, removeFromCart } from '../store/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice'; // Wishlist actions

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
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items); // Redux wishlist

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
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const toastId = `add-to-cart-${product._id}`;
    
    if (cartItems.some((item) => item.id === product._id)) {
      toast.info(`${product.name} is already in the cart!`, { toastId });
      return;
    }
  
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        img: product.imageUrl,
      })
    );
    toast.success(`${product.name} added to cart!`, { toastId, autoClose:1000 });
  };
  
  const handleRemoveFromCart = (product: Product) => {
    const toastId = `remove-from-cart-${product._id}`;
    
    dispatch(removeFromCart(product._id));
    toast.error(`${product.name} removed from cart!`, { toastId });
  };
  
  const toggleWishlist = (product: Product) => {
    const isInWishlist = wishlistItems.some((item) => item._id === product._id);
    const toastId = `wishlist-${product._id}`;
  
    if (isInWishlist) {
      toast.info(`${product.name} removed from wishlist!`, { toastId });
      dispatch(removeFromWishlist(product._id)); // Remove from wishlist using Redux
    } else {
      toast.success(`${product.name} added to wishlist!`, { toastId });
      dispatch(addToWishlist(product)); // Add to wishlist using Redux
    }
  };
  
  const displayedProducts = showAll ? products : products.slice(1, 5);

  return (
    <div className="w-full bg-white py-20">
      <ToastContainer autoClose={1000} />

      <h2 className="text-black text-4xl text-center mb-16 font-bold">Featured Products</h2>

      {/* Show loading message while products are being fetched */}
      {loading ? (
        <div className="text-center text-xl font-semibold">Loading products...</div>
      ) : (
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div key={product._id} className="relative group">
              <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[400px]">
                <Image
                  src={product.imageUrl}
                  width={200}
                  height={250}
                  alt={product.name}
                  className="w-[200px] h-[250px] transition-all duration-300 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="text-red-500 text-2xl hover:text-red-700 transition-colors"
                  >
                    {wishlistItems.some((item) => item._id === product._id) ? (
                      <AiFillHeart />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </button>
                </div>

                <div className="absolute bottom-0 w-full text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="w-full py-2 text-sm bg-[#08D15F] rounded-none hover:bg-green-700 transition-colors"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button
                  className="w-full py-2 text-sm bg-violet-500 rounded-none hover:bg-violet-700 transition-colors text-white"
                  onClick={() => goToProductDetail(product._id)}
                >
                  View Details
                </button>
                {cartItems.some((item) => item.id === product._id) && (
                  <button
                    className="mt-2 w-full py-2 text-sm bg-red-500 rounded-none hover:bg-red-700 transition-colors text-white"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove {product.name} From Cart
                  </button>
                )}
              </div>

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
      )}

      {products.length > 4 && (
        <div className="text-center mt-10">
          <button
            className="px-6 py-3 bg-violet-500 text-white text-lg rounded hover:bg-violet-800 transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;
