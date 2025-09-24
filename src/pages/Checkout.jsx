import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/useCart";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", address: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrder = { ...formData, items: cart };
      console.log("FORMDATA", formData)
      await axios.post("http://localhost:5000/api/orders", newOrder);
      alert("Order placed successfully!");
      clearCart();
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };

  return (
    <div className="p-12 min-h-screen bg-rose-100">
      <h1 className="text-3xl mb-3 text-pink-500/40 font-bold font-balthazar">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-sm border-4 border-zinc-100 p-6 rounded bg-white/30 font-bitter">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full text-pink-500/60 bg-rose-100 rounded"
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full text-pink-500/60 bg-rose-100 rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Your address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 w-full text-pink-500/60 bg-rose-100 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500/80 text-white px-3 py-2 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
