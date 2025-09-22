
// import { Link } from "react-router-dom";

// export default function Mainpage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
//       <h1 className="text-4xl font-bold mb-12 text-gray-900">메인 페이지</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
//         <Link
//           to="/popular"
//           className="p-6 bg-blue-600 text-white text-center rounded-lg shadow-md hover:bg-blue-700 transition"
//         >
//           인기 공고 보기
//         </Link>

//         <Link
//           to="/recent"
//           className="p-6 bg-green-600 text-white text-center rounded-lg shadow-md hover:bg-green-700 transition"
//         >
//           최근 공고 보기
//         </Link>

//         <Link
//           to="/favorites"
//           className="p-6 bg-pink-500 text-white text-center rounded-lg shadow-md hover:bg-pink-600 transition"
//         >
//           찜한 공고 ❤️
//         </Link>

//         <Link
//           to="/postjob"
//           className="p-6 bg-purple-600 text-white text-center rounded-lg shadow-md hover:bg-purple-700 transition"
//         >
//           공고 등록
//         </Link>

//         <Link
//           to="/mypage"
//           className="sm:col-span-2 lg:col-span-3 p-6 bg-orange-500 text-white text-center rounded-lg shadow-md hover:bg-orange-600 transition"
//         >
//           마이페이지
//         </Link>
//       </div>
//     </div>
//   );
// }
import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* 왼쪽 로고 영역 */}
      <div className="w-1/6 flex flex-col items-center pt-12">
        {/* 로고 이미지 - 임시로 SVG 사용 */}
        <img src="/logo.png" alt="logo" className="w-24 h-24 mb-4" />
      </div>

      {/* 중앙 컨텐츠 영역 */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex space-x-16 mt-32">
          <div className="flex flex-col items-start">
            <span className="text-xl mb-2 font-normal text-gray-800">인기 공고</span>
            <div className="w-80 h-72 border" /> 
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl mb-2 font-normal text-gray-800">최근공고</span>
            <div className="w-80 h-72 border" />
          </div>
        </div>
      </div>

      {/* 오른쪽 메뉴 영역 */}
      <div className="w-1/6 flex flex-col items-center pt-8 space-y-10">
        {/* 프로필 */}
        <Link to="/mypage" className="flex flex-col items-center">
          <img src="/mypage.png" alt="프로필" className="w-16 h-16 rounded-full mb-1" />
          <span className="mt-2 text-lg text-gray-900">마이페이지</span>
        </Link>

        {/* 찜한 공고 */}
        <Link to="/favorites" className="flex flex-col items-center">
          <img src="/heart.png" alt="찜한 공고" className="w-12 h-12 mb-1" />
          <span className="mt-2 text-lg text-gray-900">찜한 공고</span>
        </Link>

        {/* 공고 등록 */}
        <Link to="/postjob" className="flex flex-col items-center">
          <img src="/plus.png" alt="공고 등록" className="w-12 h-12 mb-1" />
          <span className="mt-2 text-lg text-gray-900">공고 등록</span>
        </Link>
      </div>
    </div>
  );
}
