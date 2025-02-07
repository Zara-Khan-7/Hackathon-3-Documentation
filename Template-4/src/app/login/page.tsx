'use client';

import Image from 'next/image';
import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertMessage('Welcome to Exclusive! 🎉');
    setFormData({
      emailOrPhone: '',
      password: '',
    });
    setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Left Section (Image) */}
      <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
        <Image
          src="/images/cart.png"
          alt="Cart"
          width={800} // Increased size for desktop
          height={800} // Increased size for desktop
          className="object-contain"
          priority
        />
      </div>

      {/* Right Section (Form) */}
      <div className="w-full sm:w-1/2 flex justify-center items-center bg-white p-6 sm:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Log in to Exclusive</h1>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-6">
            Enter your details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="emailOrPhone"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
                id="emailOrPhone"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm sm:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-black"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
              >
                Log In
              </button>
              <a href="/forgetpassword" className="text-sm text-red-500 hover:text-red-700 text-center">
                Forgot Password?
              </a>
            </div>
          </form>

          {alertMessage && (
            <div className="mt-4 text-center text-black">
              <p>{alertMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;