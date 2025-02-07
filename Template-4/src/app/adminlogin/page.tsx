"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/adminpanel");
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Login</h2>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
            >
              Login
            </button>
          </form>

          {/* Back to Homepage Button (Outside Form) */}
          <div className="mt-4">
            <Link href="/">
              <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-gray-600 transition-all duration-300 shadow-md">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
