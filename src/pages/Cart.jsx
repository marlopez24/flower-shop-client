import React from "react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart 🛍️</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty.{" "}
          <Link to="/" className="text-blue-500">Go shopping</Link>
        </p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-3 rounded-lg"
              >
                <span>{item.name} - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Total: ${total}</h2>
            <Link
              to="/checkout"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded mt-3"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}