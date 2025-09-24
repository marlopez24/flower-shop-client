import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkerDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

  // Fetch all orders
    const fetchOrders = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/orders");
        setOrders(res.data);
        setLoading(false);
    } catch (err) {
    console.error("Error fetching orders:", err);
    setLoading(false);
    }
};

useEffect(() => {
    fetchOrders();
}, []);

  // Update order status
const updateStatus = async (orderId, newStatus) => {
    try {
    const res = await axios.put(`http://localhost:5000/api/orders/${orderId}/status`, { status: newStatus });
      // Update local state
    setOrders((prev) =>
        prev.map((order) =>
        order._id === orderId ? { ...order, status: res.data.status } : order
        )
    );
    } catch (err) {
    console.error("Error updating status:", err.response?.data || err.message);
    }
};

if (loading) return <p>Loading orders...</p>;

return (
    <div className="p-4 min-h-screen bg-rose-100">
    <h1 className="text-xl mb-4 text-zinc-700/80 text-center">Worker Dashboard</h1>
    {orders.length === 0 ? (
        <p className="text-zinc-700/80">No orders yet.</p>
    ) : (
        <div className="space-y-4 rounded">
        {orders.map((order) => (
            <div key={order._id} className="border-2 border-zinc-500/90 p-4 rounded shadow">
            {/* <p><strong>Order ID:</strong> {order._id}</p> */}
            <p><strong>Name:</strong> {order.customer?.name || "N/A"}</p>
            <p><strong>Email:</strong> {order.customer?.email || "N/A"}</p>
            <p><strong>Address:</strong> {order.customer?.address || "N/A"}</p>
            <p><strong>Status:</strong> {order.status}</p>

            <div className="mt-2 space-x-2">
                <button
                onClick={() => updateStatus(order._id, "in progress")}
                className="bg-yellow-400/70 px-2 py-1 rounded"
                >
                In Progress
                </button>
                <button
                onClick={() => updateStatus(order._id, "ready for pickup")}
                className="bg-green-500/90 text-white px-2 py-1 rounded"
                >
                Ready for Pickup
                </button>
                <button
                onClick={() => updateStatus(order._id, "delivered")}
                className="bg-blue-600/80 text-white px-2 py-1 rounded"
                >
                Delivered
                </button>
            </div>

            {order.status === "ready for pickup" && (
                <p className="mt-2 text-sm text-pink-600/60">Send SMS / Email to customer</p>
            )}
            </div>
        ))}
        </div>
    )}
    </div>
    );
};

export default WorkerDashboard;