'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromWishlist } from '../store/wishlistSlice';
import { CartItem } from '../type';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<CartItem | null>(null);

  // Handle deleting an item from wishlist
  const confirmDelete = (item: CartItem) => {
    setItemToDelete(item);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteItem = () => {
    if (itemToDelete) {
      dispatch(removeFromWishlist(itemToDelete.id)); // id is now a string
      toast.success(`${itemToDelete.name} removed from your wishlist!`);
    }
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div>
      <Header />
      <ToastContainer autoClose={1000} />

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && itemToDelete && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg font-bold text-xl space-y-4 text-center w-1/2">
            <p>Are you sure you want to remove {itemToDelete.name} from your wishlist?</p>
            <div className="space-x-4 mt-4">
              <button
                className="bg-[#3F509E] text-white px-6 py-2 rounded-lg hover:bg-[#2b3a7d] transition duration-300"
                onClick={handleDeleteItem}
              >
                Yes, Remove Item
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Wishlist Layout */}
      <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wishlist Items Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Wishlist</h2>
          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#1D3178]">{item.name}</p>
                      <p className="text-sm text-gray-500">Price: ${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    {/* Add to Cart Button */}
                    {/* <Link href="/cart">
                      <button
                        className="px-4 py-2 bg-[#3F509E] text-white rounded-md text-sm hover:bg-[#2b3a7d]"
                      >
                        Add to Cart
                      </button>
                    </Link> */}
                    {/* Delete Button
                    <button
                      onClick={() => confirmDelete(item)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                    >
                      Remove
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#1D3178] text-center mt-6">
              Your wishlist is empty. Start adding products!
            </p>
          )}
        </div>

        {/* Wishlist Actions Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Link href="/products">
            <button
              className="w-full py-3 bg-[#08D15F] text-white rounded-md font-semibold hover:bg-green-700"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
