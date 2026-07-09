import React from "react";

//  update the flower names, only display different size bouquets for name
const flowersDisplay = [
  {
    id: 1,
    name: "Small",
    price: 20,
    image: "https://i.imgur.com/8fPAEEj.jpeg",
  },
  {
    id: 2,
    name: "Small",
    price: 20,
    image: "https://i.imgur.com/ldd9CKy.jpeg",
  },
  {
    id: 3,
    name: "Medium",
    price: 35,
    image: "https://i.imgur.com/iKshZVl.jpeg",
  },
  {
    id: 4,
    name: "Medium",
    price: 35,
    image: "https://i.imgur.com/iKshZVl.jpeg",
  },
  {
    id: 5,
    name: "Large",
    price: 50,
    image: "https://i.imgur.com/iKshZVl.jpeg",
  },
  {
    id: 6,
    name: "Custom Bouquet",
    price: 15,
    image: "https://i.imgur.com/iKshZVl.jpeg",
    description:
      "Starts at $15. Final price may vary depending on size and flower choice.",
    isCustom: true,
  },
];

const Home = () => {
  return (
    <div className="p-11 min-h-screen bg-rose-100">
      <h1 className="text-4xl mb-6 text-pink-400/60 text-center font-lobster">
        Our Bouquets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flowersDisplay.map((flower) => (
          <div
            key={flower.id}
            className="border-2 border-zinc-100 p-7 rounded bg-white/60"
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="w-800 h-80 object-cover rounded border-3 border-zinc-200"
            />
            <h2 className="text-lg text-pink-400/70 font-balthazar font-bold">
              {flower.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-8 justify-center text-2xl text-pink-400/90 font-balthazar font-bold">
        <span>Follow us on </span>
        <a
          href="https://www.instagram.com/la.vie.en.fleurss/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500/90 hover:bg-rose-200/50 rounded"
        >
          Instagram
        </a>
        <span> 🌸</span>
      </div>
    </div>
  );
};

export default Home;
