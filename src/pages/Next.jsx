// src/pages/Next.jsx
// src/pages/Next.jsx
// import heart from "../assets/heart.png";

// export default function Next() {
//   const handleClick = () => {
//     alert("하트를 눌렀어 💖");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* 헤더가 항상 렌더링되는 경우를 대비한 상단 여유 공간 (Header 높이만큼 확보) */}
//       <div className="h-16" />

//       {/* 상단 영역: 최근 구인 공고 */}
//       <div className="w-full max-w-2xl mx-auto bg-white shadow rounded-md">
//         <div className="py-4 text-center">
//           <h1 className="text-2xl font-bold text-black">최근 구인 공고</h1>
          
//         </div>
//       </div>
//       <div className="w-full max-w-2xl mx-auto bg-white shadow rounded-md">
//         <div className="py-4 text-center">
//           <p className="text-2xl font-bold text-black">현재 인기 공고</p>
//         </div>
//       </div>
//       {/* 가운데 하트 버튼 영역 (남은 공간을 채워서 수직 중앙 정렬) */}
//       <div className="flex-1 flex items-center justify-center">
//         <button onClick={handleClick} className="focus:outline-none">
//           <img
//             src={heart}
//             alt="하트 버튼"
//             className="w-40 h-40 transform transition-transform hover:scale-110"
//           />
//         </button>
//       </div>
      
//     </div>
//   );
// }
// src/pages/Next.jsx
// import React from "react";

// export default function Next() {
//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//                 alt=""
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//               <span className="sr-only">Open main menu</span>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
//                 <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">찜</a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">공고등록</a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">톡</a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">마이페이지</a>
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">
//               Log in <span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </nav>
//       </header>
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-500:text-7xl">
//               최근에 올라온 공고
//             </h1>
//             <h1>
                       


//             </h1>
//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-500:text-7xl">
//               인기 공고
//             </h1>
//             <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//               당신의 회사를 홍보해줄 학생을 찾아보세요
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
//                 Get started
//               </a>
//               <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                 Learn more <span aria-hidden="true">→</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import logo from "../assets/logo.png"; // 로고 이미지 import

// export default function Next() {
//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="h-8 w-auto"
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button type="button" command="show-modal" commandfor="mobile-menu" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//               <span className="sr-only">Open main menu</span>
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
//                 <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">찜</a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">공고등록</a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">톡</a>
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">마이페이지</a>
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a href="#" className="text-sm/6 font-semibold text-gray-900">
//               Log in <span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </nav>
//       </header>

//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-white-500 sm:text-7xl">
              
//             </h1>

//             {/* 두 줄 띄기 */}
//             <div className="h-8"></div>

//             <h1 className="text-5xl font-semibold tracking-tight text-balance text-white-500 sm:text-7xl">
              
//             </h1>

//             <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
//               당신의 회사를 홍보해줄 학생을 찾아보세요
//             </p>

//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <a href="#" className="text-sm/6 font-semibold text-gray-900">
//                 회사 등록하기 <span aria-hidden="true">→</span>
//               </a>
//               <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
//                 Get started
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Next() {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">찜</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">공고등록</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">톡</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">마이페이지</a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              당신의 회사를 홍보해줄 학생을 찾아보세요
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* 회사 등록하기 버튼 */}
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                회사 등록하기 <span aria-hidden="true">→</span>
              </a>

              {/* Get started 버튼 → company_assign 페이지로 이동 */}
              <button
                onClick={() => navigate("/company_assign")}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
