// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Login from "./pages/Login";

// function Home() {
//   return <h1 className="p-4">홈 화면</h1>;
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />   {/* 공통 헤더 */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// // src/App.jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Next from "./pages/Next";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/next" element={<Next />} />  {/* ✅ 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
