// // src/pages/Login.jsx
// import { useState } from "react";
// import logo from "../assets/logo.png";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("로그인 요청:", { email, password });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form 
//         onSubmit={handleSubmit} 
//         className="bg-white p-6 rounded-2xl shadow-lg w-80"
//       >
//         <img src={logo} alt="로고" className="mx-auto mb-4 w-24 h-24 object-contain" /> 

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded-md mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border rounded-md mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button 
//           type="submit" 
//           className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
//         >
//           로그인
//         </button>
//       </form>
//     </div>
//   );
// }
// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // 로고 이미지 경로

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student"); // "student" or "company"
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 요청:", { email, password, userType });

    // 로그인 성공 로직이 여기에 들어가면 됨
    // 예: 서버 요청 -> 성공 시 해당 메인페이지 이동
    if (userType === "company") {
      navigate("/company-main");
    } else {
      navigate("/student-main");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        {/* 로고 */}
        <img 
          src={logo} 
          alt="로고" 
          className="mx-auto mb-6 w-24 h-24 object-contain" 
        /> 

        {/* 사용자 타입 선택 */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">로그인 유형</label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setUserType("student")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                userType === "student"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              학생
            </button>
            <button
              type="button"
              onClick={() => setUserType("company")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                userType === "company"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              기업
            </button>
          </div>
        </div>

        {/* 이메일 입력 */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* 비밀번호 입력 */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* 로그인 버튼 */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          로그인
        </button>

        {/* 회원가입 링크 */}
        <div className="mt-4 text-center">
          <span className="text-gray-600">계정이 없으신가요? </span>
          <button
            type="button"
            className="text-blue-600 hover:text-blue-800 font-medium"
            onClick={() => navigate("/signup")}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
