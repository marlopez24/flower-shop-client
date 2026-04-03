import { Navigate, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import WorkerDashboard from "./pages/WorkerDashboard";
import Login from "./pages/Login";
import { useAuth } from "./context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <div className="min-h-screen">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <WorkerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
