import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function CompanyMain() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("recruitment");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleMyPage = () => {
    navigate("/company-mypage");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="로고" className="h-8 w-8 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">기업 대시보드</h1>
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
              { id: "recruitment", name: "구직공고", icon: "💼" },
              { id: "conference", name: "학회", icon: "🎓" },
              { id: "event", name: "이벤트", icon: "🎉" },
              { id: "chat", name: "채팅", icon: "💬" },
              { id: "analytics", name: "분석", icon: "📊" },
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
          {activeTab === "recruitment" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">구직공고 관리</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  새 공고 등록
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2">프론트엔드 개발자 모집</h3>
                    <p className="text-gray-600 text-sm mb-3">React, TypeScript 경험자 우대</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">지원자 12명</span>
                      <button className="text-blue-600 text-sm hover:text-blue-800">상세보기</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "conference" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">학회 관리</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  새 학회 등록
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2">AI 기술 컨퍼런스</h3>
                    <p className="text-gray-600 text-sm mb-3">2024.03.15 - 서울대학교</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">참가자 45명</span>
                      <button className="text-blue-600 text-sm hover:text-blue-800">상세보기</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "event" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">이벤트 관리</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  새 이벤트 등록
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2">기업 설명회</h3>
                    <p className="text-gray-600 text-sm mb-3">2024.03.20 - 연세대학교</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">참가자 23명</span>
                      <button className="text-blue-600 text-sm hover:text-blue-800">상세보기</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "chat" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">채팅</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">김</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">김학생</h3>
                      <p className="text-gray-600 text-sm">안녕하세요, 지원서 제출했습니다.</p>
                    </div>
                    <div className="text-sm text-gray-500">2시간 전</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">분석</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">총 공고 수</h3>
                  <p className="text-3xl font-bold text-blue-600">15</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">총 지원자 수</h3>
                  <p className="text-3xl font-bold text-green-600">127</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">활성 학생 수</h3>
                  <p className="text-3xl font-bold text-purple-600">89</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">설정</h2>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">기업 정보</h3>
                  <p className="text-gray-600 text-sm">회사명, 주소, 연락처 등 기본 정보를 관리합니다.</p>
                  <button className="mt-2 text-blue-600 text-sm hover:text-blue-800">수정하기</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">알림 설정</h3>
                  <p className="text-gray-600 text-sm">이메일, SMS 알림 설정을 관리합니다.</p>
                  <button className="mt-2 text-blue-600 text-sm hover:text-blue-800">수정하기</button>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">결제 정보</h3>
                  <p className="text-gray-600 text-sm">수수료 결제 및 청구서 관리를 합니다.</p>
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

