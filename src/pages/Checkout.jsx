import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/useCart";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    customSize: "",
    customColors: "",
    customFlowers: "",
    occasion: "",
    customNotes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrder = { ...formData, items: cart };
      console.log("FORMDATA", formData);
      await axios.post("http://localhost:5000/api/orders", newOrder);
      alert("Order placed successfully!");
      location.reload();
      clearCart();
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };

  return (
    <div className="p-12 min-h-screen bg-rose-100">
      <h1 className="text-3xl mb-3 text-pink-500/40 font-bold font-balthazar">
        Checkout
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-sm border-4 border-zinc-100 p-6 rounded bg-white/30 font-bitter"
      >
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
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2 w-full text-pink-500/60 bg-rose-100 rounded"
          required
        />
        <div className="text-pink-500/60 bg-rose-100 rounded border border-rose-200 rounded-lg p-5 mt-4">
          <h3 className="text-xl text-pink-400/80 font-balthazar font-bold">
            Custom Bouquet Details
          </h3>

          <p className="text-sm text-neutral-500 mt-1">
            Fill this out only if you added a custom bouquet to your cart.
          </p>

          <label className="block mt-4 text-neutral-700 font-bitter">
            Bouquet Size
          </label>
          <select
            name="customSize"
            value={formData.customSize}
            onChange={handleChange}
            className="w-full border border-rose-200 rounded-lg p-3 mt-2"
          >
            <option value="">Select a size</option>
            <option value="Small Custom - starts at $25">
              Small Custom - starts at $25
            </option>
            <option value="Medium Custom - starts at $40">
              Medium Custom - starts at $40
            </option>
            <option value="Large Custom - starts at $60">
              Large Custom - starts at $60
            </option>
          </select>

          <label className="block mt-4 text-neutral-700 font-bitter">
            Preferred Colors
          </label>
          <input
            type="text"
            name="customColors"
            value={formData.customColors}
            onChange={handleChange}
            placeholder="Example: soft pink, white, lavender"
            className="w-full border border-rose-200 rounded-lg p-3 mt-2"
          />

          <label className="block mt-4 text-neutral-700 font-bitter">
            Preferred Flowers
          </label>
          <input
            type="text"
            name="customFlowers"
            value={formData.customFlowers}
            onChange={handleChange}
            placeholder="Example: roses, baby's breath, tulips"
            className="w-full border border-rose-200 rounded-lg p-3 mt-2"
          />

          <label className="block mt-4 text-neutral-700 font-bitter">
            Occasion
          </label>
          <input
            type="text"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            placeholder="Birthday, anniversary, thank you, just because..."
            className="w-full border border-rose-200 rounded-lg p-3 mt-2"
          />

          <label className="block mt-4 text-neutral-700 font-bitter">
            Extra Notes
          </label>
          <textarea
            name="customNotes"
            value={formData.customNotes}
            onChange={handleChange}
            placeholder="Anything else we should know? Style, ribbon color, allergies, dislikes, etc."
            rows="4"
            className="w-full border border-rose-200 rounded-lg p-3 mt-2"
          />
        </div>
        <div className="bg-rose-100 border border-rose-200 rounded-lg p-5 mt-6">
          <h3 className="text-xl text-pink-400/80 font-balthazar font-bold">
            ! Payment !
          </h3>

          <p className="text-sm text-neutral-600 mt-2">
            We currently accept payment through Zelle or Venmo. After submitting
            your order, please send payment using the information below. Your
            order will be confirmed once payment is received.
          </p>

          <p className="text-sm text-neutral-700 mt-3">
            Zelle: karlagarcia12398@gmail.com
          </p>

          {/* <p className="text-sm text-neutral-700">Venmo: @your-venmo</p> */}
        </div>
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
