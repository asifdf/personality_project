// import React from "react";

// export default function CompanyAssign() {
    
//   return (
//     <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//       <div className="mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
//           회사 등록
//         </h2>
//         <p className="mt-2 text-lg/8 text-gray-600">
//           당신의 파트너를 캠퍼스에서 찾아보세요
//         </p>
//       </div>

//       <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
//         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//           <div>
//             <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">Company name</label>
//             <div className="mt-2.5">
//               <input
//                 id="first-name"
//                 type="text"
//                 name="first-name"
//                 autoComplete="given-name"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">Logo</label>
//             <div className="mt-2.5">
//               <input
//                 id="last-name"
//                 type="text"
//                 name="last-name"
//                 autoComplete="family-name"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">Company address</label>
//             <div className="mt-2.5">
//               <input
//                 id="company"
//                 type="text"
//                 name="company"
//                 autoComplete="organization"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
//             <div className="mt-2.5">
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 autoComplete="email"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone number</label>
//             <div className="mt-2.5">
//               <input
//                 id="phone-number"
//                 type="text"
//                 name="phone-number"
//                 placeholder="123-456-7890"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               />
//             </div>
//           </div>

//           <div className="sm:col-span-2">
//             <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message</label>
//             <div className="mt-2.5">
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="4"
//                 className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//               ></textarea>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10">
//           <button
//             type="submit"
//             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             등록하기 완료
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyAssign() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    // 여기서 서버로 데이터 전송 로직 추가 가능
    navigate("/mainpage"); // 등록 완료 후 메인 페이지로 이동
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          회사 등록
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          당신의 파트너를 캠퍼스에서 찾아보세요
        </p>
      </div>

      {/* ✅ form에 handleSubmit 연결 */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="company-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Company name
            </label>
            <div className="mt-2.5">
              <input
                id="company-name"
                type="text"
                name="company-name"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                           outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="logo"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Logo
            </label>
            <div className="mt-2.5">
              <input
                id="logo"
                type="text"
                name="logo"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                           outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Company address
            </label>
            <div className="mt-2.5">
              <input
                id="address"
                type="text"
                name="address"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                           outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                           outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                type="text"
                name="phone-number"
                placeholder="123-456-7890"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                           outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 
                           outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                           focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
                       font-semibold text-white shadow-xs hover:bg-indigo-500 
                       focus-visible:outline-2 focus-visible:outline-offset-2 
                       focus-visible:outline-indigo-600"
          >
            등록하기 완료
          </button>
        </div>
      </form>
    </div>
  );
}
