import { useCart } from "../context/useCart";

const flowers = [
    { name: "Roses", price: 25 },
    { name: "Sunflowers", price: 20 },
    { name: "Tulips", price: 22 },
];

export default function Home() {
    const { addToCart } = useCart();

    return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Flower Shop 🌸</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {flowers.map((flower) => (
            <div key={flower.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">{flower.name}</h2>
            <p>${flower.price}</p>
            <button
                onClick={() => addToCart(flower)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
                Add to Cart
            </button>
            </div>
        ))}
        </div>
    </div>
    );
}