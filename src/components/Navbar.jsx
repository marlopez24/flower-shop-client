import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Navbar() {
    const { cart } = useCart();

    return (
    <nav className="bg-gray-100 text-pink-300 pt-8">
        <h1 className="text-5xl font-bold text-center pb-2 font-lobster italic">
        🌸 La Vie En Fleurs
        </h1>
        <div className="flex justify-center gap-6 mt-4 border p-1 font-balthazar text-xl font-bold">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">
            Cart
            {cart.length > 0 && (
            <span className="ml-1 bg-white text-green-500 px-2 py-0.5 rounded-full text-sm">
                {cart.length}
            </span>
            )}
        </Link>
            <Link to="/checkout" className="hover:underline">Checkout</Link>
        </div>
    </nav>
    );
}