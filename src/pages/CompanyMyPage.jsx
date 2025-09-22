import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function CompanyMyPage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [companyInfo, setCompanyInfo] = useState({
    name: "테크스타트업",
    email: "contact@techstartup.com",
    phone: "02-1234-5678",
    address: "서울특별시 강남구 테헤란로 123",
    description: "혁신적인 기술로 세상을 바꾸는 스타트업입니다.",
    website: "https://www.techstartup.com",
    industry: "IT/소프트웨어",
    size: "10-50명",
    established: "2020"
  });

  const handleBack = () => {
    navigate("/company-main");
  };

  const handleSave = () => {
    // 저장 로직
    setIsEditing(false);
    console.log("기업 정보 저장:", companyInfo);
  };

  const handleInputChange = (field, value) => {
    setCompanyInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="로고" className="h-8 w-8 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">기업 마이페이지</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                ← 뒤로가기
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">기업 정보</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {isEditing ? "취소" : "수정하기"}
            </button>
          </div>

          <div className="space-y-6">
            {/* 회사명 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">회사명</label>
              {isEditing ? (
                <input
                  type="text"
                  value={companyInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.name}</p>
              )}
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              {isEditing ? (
                <input
                  type="email"
                  value={companyInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.email}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={companyInfo.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.phone}</p>
              )}
            </div>

            {/* 주소 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
              {isEditing ? (
                <input
                  type="text"
                  value={companyInfo.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.address}</p>
              )}
            </div>

            {/* 회사 소개 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">회사 소개</label>
              {isEditing ? (
                <textarea
                  value={companyInfo.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.description}</p>
              )}
            </div>

            {/* 웹사이트 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">웹사이트</label>
              {isEditing ? (
                <input
                  type="url"
                  value={companyInfo.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.website}</p>
              )}
            </div>

            {/* 업종 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">업종</label>
              {isEditing ? (
                <select
                  value={companyInfo.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="IT/소프트웨어">IT/소프트웨어</option>
                  <option value="금융">금융</option>
                  <option value="의료">의료</option>
                  <option value="교육">교육</option>
                  <option value="제조업">제조업</option>
                  <option value="기타">기타</option>
                </select>
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.industry}</p>
              )}
            </div>

            {/* 회사 규모 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">회사 규모</label>
              {isEditing ? (
                <select
                  value={companyInfo.size}
                  onChange={(e) => handleInputChange("size", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1-10명">1-10명</option>
                  <option value="10-50명">10-50명</option>
                  <option value="50-100명">50-100명</option>
                  <option value="100-500명">100-500명</option>
                  <option value="500명 이상">500명 이상</option>
                </select>
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.size}</p>
              )}
            </div>

            {/* 설립년도 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">설립년도</label>
              {isEditing ? (
                <input
                  type="number"
                  value={companyInfo.established}
                  onChange={(e) => handleInputChange("established", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{companyInfo.established}년</p>
              )}
            </div>

            {/* 저장 버튼 */}
            {isEditing && (
              <div className="flex justify-end space-x-4 pt-6 border-t">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  저장
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

