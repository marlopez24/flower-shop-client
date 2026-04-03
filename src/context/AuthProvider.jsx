import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const login = async (username, password) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const newToken = res.data.token;
      localStorage.setItem("token", newToken);
      setToken(newToken);
      return true;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};
