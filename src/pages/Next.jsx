// src/pages/Next.jsx
// src/pages/Next.jsx
import heart from "../assets/heart.png";

export default function Next() {
  const handleClick = () => {
    alert("하트를 눌렀어 💖");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 헤더가 항상 렌더링되는 경우를 대비한 상단 여유 공간 (Header 높이만큼 확보) */}
      <div className="h-16" />

      {/* 상단 영역: 최근 구인 공고 */}
      <div className="w-full max-w-2xl mx-auto bg-white shadow rounded-md">
        <div className="py-4 text-center">
          <h1 className="text-2xl font-bold text-black">최근 구인 공고</h1>
        </div>
      </div>

      {/* 가운데 하트 버튼 영역 (남은 공간을 채워서 수직 중앙 정렬) */}
      <div className="flex-1 flex items-center justify-center">
        <button onClick={handleClick} className="focus:outline-none">
          <img
            src={heart}
            alt="하트 버튼"
            className="w-40 h-40 transform transition-transform hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
}
