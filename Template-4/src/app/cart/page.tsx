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
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import { CartItem } from '../type';



const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<CartItem | null>(null);

  // Calculate total price of the cart
  const calculateTotal = () => {
    
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Update item quantity in the cart
  const handleUpdateQuantity = (id: string, quantity: string | number) => {
    const numericQuantity = Math.max(Number(quantity) || 1, 1); // Ensure valid number
    dispatch(updateQuantity({ id, quantity: numericQuantity }));
  };

  // Handle deleting an item
  const confirmDelete = (item: CartItem) => {
    setItemToDelete(item);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteItem = () => {
    if (itemToDelete) {
      dispatch(removeFromCart(itemToDelete.id)); // id is now a string
      toast.success(`${itemToDelete.name} removed from the cart!`);
    }
    setShowDeleteConfirmation(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  // Shipping Cost
  const shippingCost = cartItems.length > 0 ? 15 : 0;
  const totalCost = calculateTotal() + shippingCost;

  return (
  
    <div>
      
      <Header />
      <ToastContainer autoClose={1000} />

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && itemToDelete && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg font-bold text-xl space-y-4 text-center w-1/2">
            <p>Are you sure you want to delete {itemToDelete.name} from the cart?</p>
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

      {/* Main Cart Layout */}
      <div className="p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-[#1D3178]">Your Cart</h2>
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#1D3178]">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Price: ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    {/* Quantity Input */}
                    <input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        handleUpdateQuantity(item.id, e.target.value)
                      }
                      className="w-12 px-2 py-1 border rounded-md text-center"
                      min="1"
                    />
                    {/* Total Price for Item */}
                    <p className="font-bold text-[#1D3178]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {/* Delete Button */}
                    <button
                      onClick={() => confirmDelete(item)}
                      className="px-2 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#1D3178] text-center mt-6">
              Your cart is empty. Add some products!
            </p>
          )}
        </div>

        {/* Cart Totals Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Cart Totals</h2>
          <p className="flex justify-between text-[#1D3178]">
            <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
          </p>
          <p className="flex justify-between mb-4 text-[#1D3178]">
            <span>Shipping:</span> <span>${shippingCost.toFixed(2)}</span>
          </p>
          <p className="flex justify-between font-bold text-lg text-[#1D3178]">
            <span>Total:</span>
            <span>${totalCost.toFixed(2)}</span>
          </p>
          <Link href="/checkout">
            <button
              type="submit"
              className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600"
              disabled={cartItems.length === 0}
            >
              Proceed To Checkout
            </button>
          </Link>
          <Link href="/products">
            <button
              className="w-full py-3 mt-4 bg-[#08D15F] text-white rounded-md font-semibold hover:bg-green-700"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  
    
  )
};

export default Cart;
