"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/adminlogin");
    return null;
  }
  if (session.user?.email !== "admin@example.com") {
    return <p>You are not authorized to view this page.</p>;
  }

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/order");
        if (!response.ok) throw new Error("Failed to fetch orders");
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <button onClick={() => signOut()} className="bg-red-500 text-white py-2 px-4">Logout</button>
      
      <h2 className="mt-6 text-xl font-semibold">Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="border-b p-4">
            <p><strong>Customer:</strong> {order.customer.fullName}</p>
            <p><strong>Email:</strong> {order.customer.email}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
