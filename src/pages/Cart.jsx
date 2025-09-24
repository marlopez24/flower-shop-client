import React from "react";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useCart();

return (
    <div className="p-15 min-h-screen bg-rose-100">
        <h1 className="text-3xl mb-5 text-pink-400/60 font-bold font-balthazar">Your Cart</h1>
        {cart.length === 0 ? (
        <p className="space-y-5 max-w-sm text-yellow-600/60 font-bitter">No items in cart.</p>
        ) : (
        <ul className="space-y-5 max-w-sm text-yellow-600/70">
            {cart.map((item, index) => (
            <li key={index} className="border-4 border-zinc-100 p-1 rounded bg-white/50 font-bitter">
                {item.name} - <span className="text-red-500/70">${item.price}</span>
            </li>
            ))}
        </ul>
        )}
        {cart.length > 0 && (
        <Link
            to="/checkout"
            className="bg-green-400 text-white px-4 py-2 mt-4 inline-block rounded font-bitter"
        >
            Proceed to Checkout
        </Link>
        )}
    </div>
    );
};

export default Cart;
