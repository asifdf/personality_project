// src/pages/Login.jsx
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 요청:", { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-lg w-80"
      >
        <img src={logo} alt="로고" className="mx-auto mb-4 w-24 h-24 object-contain" /> 

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded-md mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded-md mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          로그인
        </button>
      </form>
    </div>
  );
}
