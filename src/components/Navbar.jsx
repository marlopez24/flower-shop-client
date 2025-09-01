import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function Navbar() {
    const { cart } = useCart();

    return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-600 text-white">
        <h1 className="text-xl font-bold">
        🌸 Flower Shop
        </h1>

        <div className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/cart" className="hover:underline">
            Cart
            {cart.length > 0 && (
            <span className="ml-1 bg-white text-green-600 px-2 py-0.5 rounded-full text-sm">
                {cart.length}
            </span>
            )}
        </Link>
            <Link to="/checkout" className="hover:underline">Checkout</Link>
        </div>
    </nav>
    );
}