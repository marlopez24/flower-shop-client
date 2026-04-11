import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkerDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // get all orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
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
      const res = await axios.put(
        `http://localhost:5000/api/orders/${orderId}/status`,
        { status: newStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      // Update local state
      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: res.data.status } : order,
        ),
      );
    } catch (err) {
      console.error(
        "Error updating status:",
        err.response?.data || err.message,
      );
    }
  };

  const handleDelete = async (orderId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this order?",
    );
    if (!confirmed) return;
    try {
      await axios.delete(`http://localhost:5000/api/orders/${orderId}/remove`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
    } catch (err) {
      console.log("Error deleting order:", err);
    }
  };

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="p-4 min-h-screen bg-rose-100">
      <h1 className="text-3xl mb-4 text-pink-500/50 font-bold font-balthazar text-center ">
        Order Dashboard
      </h1>
      {orders.length === 0 ? (
        <p className="text-zinc-700/70">No orders yet.</p>
      ) : (
        <div className="space-y-4 rounded">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border-3 border-zinc-500/40 p-4 rounded-lg shadow-lg relative text-pink-600/60"
            >
              <p>
                <strong>Name:</strong> {order.customer?.name || "N/A"}
              </p>
              <p>
                <strong>Email:</strong> {order.customer?.email || "N/A"}
              </p>
              <p>
                <strong>Address:</strong> {order.customer?.address || "N/A"}
              </p>
              <p>
                <strong>Phone:</strong> {order.customer?.phone || "N/A"}
              </p>
              <p className="mt-1 mb-1">
                <strong>Order:</strong>
              </p>
              {order.cart && order.cart.length > 0 ? (
                <ul className="ml-4">
                  {order.cart.map((item, index) => (
                    <li key={index}>
                      {index + 1}{" "}
                      <span className="text-red-500 mb-3">{item.name}</span> : $
                      {item.price}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No items found.</p>
              )}
              <p className="mt-1">
                <strong>Status:</strong> {order.status}
              </p>

              <div className="mt-2 space-x-2">
                <button
                  onClick={() => updateStatus(order._id, "In-Progress")}
                  className="bg-yellow-400/65 px-2 py-1 rounded text-white"
                >
                  In Progress
                </button>
                <button
                  onClick={() => updateStatus(order._id, "Ready")}
                  className="bg-green-500/80 text-white px-2 py-1 rounded"
                >
                  Ready for Pickup
                </button>
                <button
                  onClick={() => updateStatus(order._id, "Completed")}
                  className="bg-blue-600/70 text-white px-2 py-1 rounded"
                >
                  Completed
                </button>
              </div>

              {order.status === "Ready" && (
                <p className="mt-2 text-sm text-red-600/70">
                  Send SMS / Email to customer
                </p>
              )}
              <button
                onClick={() => handleDelete(order._id)}
                className="bg-red-500/80 text-black/50 px-3 py-1 rounded-full absolute right-2 top-2"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkerDashboard;
