import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import WorkerDashboard from "./pages/WorkerDashboard";

export default function App() {
  return (
    <div className="min-h-screen">
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/dashboard" element={<WorkerDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </CartProvider>
    </div>
  );
}

