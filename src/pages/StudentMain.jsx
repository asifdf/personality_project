import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function StudentMain() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("recent");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleMyPage = () => {
    navigate("/student-mypage");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="로고" className="h-8 w-8 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">학생 대시보드</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleMyPage}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                마이페이지
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700"
              >
                로그아웃
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 탭 네비게이션 */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "recent", name: "최근공고", icon: "🕒" },
              { id: "popular", name: "인기공고", icon: "🔥" },
              { id: "chat", name: "톡", icon: "💬" },
              { id: "wishlist", name: "찜", icon: "❤️" },
              { id: "certification", name: "활동인증", icon: "🏆" },
              { id: "earnings", name: "수익", icon: "💰" },
              { id: "settings", name: "설정", icon: "⚙️" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === "recent" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 공고</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">프론트엔드 개발자 모집</h3>
                        <p className="text-gray-600 text-sm mb-2">React, TypeScript 경험자 우대</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>💰 50,000원</span>
                          <span>📍 서울대학교</span>
                          <span>⏰ 2일 전</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                          지원하기
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300">
                          찜하기
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "popular" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">인기 공고</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">AI 기술 컨퍼런스</h3>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                        인기
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">2024.03.15 - 서울대학교</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>💰 30,000원</span>
                        <span>👥 45명 지원</span>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        지원하기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "chat" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">톡</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">기</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">기업명</h3>
                      <p className="text-gray-600 text-sm">안녕하세요, 지원서 검토 중입니다.</p>
                    </div>
                    <div className="text-sm text-gray-500">1시간 전</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">찜한 공고</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2">백엔드 개발자 모집</h3>
                    <p className="text-gray-600 text-sm mb-3">Node.js, Python 경험자 우대</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">💰 60,000원</span>
                      <button className="text-red-600 text-sm hover:text-red-800">
                        찜 해제
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "certification" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">활동 인증하기</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">진행 중인 활동</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">프론트엔드 개발자 모집 홍보</h4>
                          <p className="text-sm text-gray-600">에브리타임 게시글 작성</p>
                        </div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                          인증하기
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">완료된 활동</h3>
                  <div className="space-y-4">
                    {[1, 2].map((item) => (
                      <div key={item} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">AI 기술 컨퍼런스 홍보</h4>
                          <p className="text-sm text-gray-600">인스타그램 스토리 게시</p>
                        </div>
                        <span className="text-green-600 text-sm font-medium">✅ 인증완료</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "earnings" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">수익 현황</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">이번 달 수익</h3>
                  <p className="text-3xl font-bold text-blue-600">₩150,000</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">총 수익</h3>
                  <p className="text-3xl font-bold text-green-600">₩450,000</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">완료한 활동</h3>
                  <p className="text-3xl font-bold text-purple-600">12</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">수익 내역</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                      <div>
                        <h4 className="font-medium text-gray-900">프론트엔드 개발자 모집 홍보</h4>
                        <p className="text-sm text-gray-600">2024.03.10</p>
                      </div>
                      <span className="text-green-600 font-semibold">+₩50,000</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">설정</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">프로필 정보</h3>
                  <p className="text-gray-600 text-sm">이름, 학교, 전공 등 기본 정보를 관리합니다.</p>
                  <button className="mt-2 text-blue-600 text-sm hover:text-blue-800">수정하기</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">알림 설정</h3>
                  <p className="text-gray-600 text-sm">새 공고, 메시지 알림 설정을 관리합니다.</p>
                  <button className="mt-2 text-blue-600 text-sm hover:text-blue-800">수정하기</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">계좌 정보</h3>
                  <p className="text-gray-600 text-sm">수익 출금을 위한 계좌 정보를 관리합니다.</p>
                  <button className="mt-2 text-blue-600 text-sm hover:text-blue-800">수정하기</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

