import React from "react";
import { useCart } from "../context/useCart";

const flowers = [
    { id: 1, name: "Sunflower Love", price: 20, image: "https://i.imgur.com/8fPAEEj.jpeg" },
    { id: 2, name: "Pink Rose Dream", price: 15, image: "https://i.imgur.com/ldd9CKy.jpeg" },
    { id: 3, name: "Hydrangea", price: 18, image: "https://i.imgur.com/iKshZVl.jpeg" },
];

const Home = () => {
    const { addToCart } = useCart();

return (
    <div className="p-11 min-h-screen bg-rose-100">
        <h1 className="text-3xl mb-6 text-pink-400/60 text-center font-lobster">Our Bouquets</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flowers.map((flower) => (
            <div key={flower.id} className="border-2 border-zinc-100 p-7 rounded bg-white/60">
                <img src={flower.image} alt={flower.name} className="w-800 h-80 object-cover rounded border-3 border-zinc-200" />
            <h2 className="text-lg text-pink-400/70 font-balthazar font-bold">{flower.name}</h2>
            <p className="text-neutral-600/50">${flower.price}</p>
            <button
                onClick={() => addToCart(flower)}
                className="bg-blue-400 text-white px-2 py-2 mt-2 rounded font-bitter"
            >
                Add to Cart
            </button>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Home;
