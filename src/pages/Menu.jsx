import React from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

const flowersInfo = [
  {
    id: 1,
    name: "Small Bouquet (5-10 flower mix)",
    price: 20,
  },
  {
    id: 2,
    name: "Medium Bouquet (15-18 flower mix)",
    price: 35,
  },
  {
    id: 3,
    name: "Large Bouquet (20-25 max flower mix)",
    price: 50,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  return (
    <div className="px-6 py-12 min-h-screen bg-rose-100">
      <h1 className="text-3xl mb-6 text-pink-400/60 text-center font-lobster">
        Bouquet Menu
      </h1>
      <div className="max-w-3xl mx-auto border-2 border-zinc-100 rounded-lg overflow-hidden shadow-md">
        {flowersInfo.map((flower) => (
          <div
            key={flower.id}
            className="flex items-center justify-between p-6 bg-white/60 border-b border-pink-100 hover:bg-pink-100/30 hover:shadow-sm transition-all duration-300"
          >
            {/* Left side */}
            <div className="flex items-center gap-4">
              <h2 className="text-lg text-pink-400/70 font-balthazar font-bold">
                {flower.name}
              </h2>

              {flower.price && (
                <p className="text-neutral-600/70 font-bitter">
                  ${flower.price}
                </p>
              )}
            </div>

            {/* Right side */}
            <button
              onClick={() => addToCart(flower)}
              className="bg-pink-300 hover:bg-pink-400 transition text-white px-4 py-2 rounded font-bitter"
            >
              Add to Cart
            </button>
          </div>
        ))}
        <div className="p-6 bg-white/70 border-t border-pink-100 hover:bg-pink-100/30 hover:shadow-sm transition-all duration-300">
          <h2 className="text-lg text-pink-400/70 font-balthazar font-bold">
            Build Your Own Bouquet
          </h2>

          <p className="text-sm text-neutral-600 mt-1">
            Custom bouquets start at $25. Choose your size, colors, flowers,
            occasion, and any special details.
          </p>

          <button
            onClick={() =>
              addToCart({
                id: 4,
                name: "Custom Bouquet",
                // price: ,
                isCustom: true,
              })
            }
            className="bg-pink-300 hover:bg-pink-400 transition text-white px-4 py-2 rounded font-bitter mt-4"
          >
            Add Custom Bouquet
          </button>
        </div>
        <div className="flex items-center justify-between p-6 bg-white/60 border-t border-pink-100 hover:bg-pink-100/30 hover:shadow-sm transition-all duration-300">
          <button
            onClick={() => navigate("/cart")}
            className="bg-pink-300 hover:bg-pink-400 transition text-white px-4 py-2 rounded font-bitter mt-4"
          >
            View Cart
            {cart.length > 0 && (
              <span className="ml-2 mr-2 bg-white text-green-500 px-2 py-0.5 rounded-full text-sm">
                {cart.length}
              </span>
            )}
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
