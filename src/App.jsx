// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";

function Home() {
  return <h1 className="p-4">홈 화면</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />   {/* 공통 헤더 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
