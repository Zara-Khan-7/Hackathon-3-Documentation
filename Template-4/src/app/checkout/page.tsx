"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CartItem } from "../../../type";

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  const router = useRouter();

  // Load cart items from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    const orderData = {
      customer: { ...formData },
      items: cartItems,
      paymentMethod: formData.paymentMethod,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order.");
      }

      const data = await response.json();
      console.log("Order Created:", data);

      localStorage.removeItem("cart"); // Clear cart after successful order placement
      router.push("/ordercompleted");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 lg:p-12">
          <h1 className="text-3xl font-bold text-center text-[#1D3178] mb-8">Billing Information</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {["fullName", "email", "phone", "address", "city", "postalCode", "country"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-semibold text-gray-700">{field.replace(/([A-Z])/g, " $1")}</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                  placeholder={`Enter your ${field}`}
                  required
                />
              </div>
            ))}

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="mt-2 block w-full p-3 border rounded-md focus:ring focus:ring-pink-500 focus:outline-none"
                required
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-3 bg-[#FB2E86] text-white rounded-md font-semibold hover:bg-pink-600">
              Place Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
