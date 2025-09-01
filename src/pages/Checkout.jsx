import React, { useState } from "react";
import { useCart } from "../context/useCart";
import axios from "axios";

export default function Checkout() {
  const { cart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/orders", {
        customer:form,
        cart: cart,
      }
    );
    console.log("Order placed:", res.data);
    alert("Order placed successfully!");
  } catch (error) {
      console.error("❌ Error submitting order:", error);
      alert("Failed to submit order.");

  }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout 💳</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some flowers first 🌸</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <div>
            <label className="block">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          <h2 className="text-lg font-semibold">
            Total: ${total}
          </h2>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}