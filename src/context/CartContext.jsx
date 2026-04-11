import React, { createContext, useState } from "react";

// Named export for the context
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);
  const clearCart = () => setCart([]);
  const removeFromCart = (removeItem) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== removeItem));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
