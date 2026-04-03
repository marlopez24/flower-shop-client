import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const success = await login(formData.username, formData.password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-rose-100">
      <form
        onSubmit={handleSubmit}
        className="bg-rose-100 p-6 rounded-lg shadow-lg w-80 mb-70 font-bitter text-2xl border-4 border-zinc-100"
      >
        <h2 className="text-center p-2 mb-5 text-pink-500/60 font-bold">
          {" "}
          Employee Login{" "}
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded text-pink-500/60 bg-pink-100"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded text-pink-500/60 bg-pink-100"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500/80 text-white py-2 mt-2 rounded hover:bg-green-600"
        >
          Log In
        </button>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
