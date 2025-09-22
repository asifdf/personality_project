import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    university: "",
    major: "",
    grade: "",
    studentId: "",
    companyName: "",
    industry: "",
    size: "",
    established: "",
    address: "",
    website: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 요청:", { userType, ...formData });

    // 회원가입 성공 시 해당 메인페이지로 이동
    if (userType === "company") {
      navigate("/company-main");
    } else {
      navigate("/student-main");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* 로고 */}
          <div className="text-center mb-8">
            <img src={logo} alt="로고" className="mx-auto h-16 w-16 object-contain mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">회원가입</h2>
          </div>

          {/* 사용자 타입 선택 */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">회원 유형</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setUserType("student")}
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium ${
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
                className={`flex-1 py-3 px-4 rounded-md text-sm font-medium ${
                  userType === "company"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                기업
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 기본 정보 */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">기본 정보</h3>
              
              {/* 이름/회사명 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {userType === "student" ? "이름" : "회사명"}
                </label>
                <input
                  type="text"
                  required
                  value={userType === "student" ? formData.name : formData.companyName}
                  onChange={(e) => handleInputChange(userType === "student" ? "name" : "companyName", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 전화번호 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* 학생 전용 정보 */}
            {userType === "student" && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">학생 정보</h3>
                
                {/* 대학교 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">대학교</label>
                  <input
                    type="text"
                    required
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 전공 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">전공</label>
                  <input
                    type="text"
                    required
                    value={formData.major}
                    onChange={(e) => handleInputChange("major", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 학년 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">학년</label>
                  <select
                    required
                    value={formData.grade}
                    onChange={(e) => handleInputChange("grade", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">학년을 선택하세요</option>
                    <option value="1학년">1학년</option>
                    <option value="2학년">2학년</option>
                    <option value="3학년">3학년</option>
                    <option value="4학년">4학년</option>
                    <option value="대학원생">대학원생</option>
                  </select>
                </div>

                {/* 학번 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">학번</label>
                  <input
                    type="text"
                    required
                    value={formData.studentId}
                    onChange={(e) => handleInputChange("studentId", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* 기업 전용 정보 */}
            {userType === "company" && (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">기업 정보</h3>
                
                {/* 업종 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">업종</label>
                  <select
                    required
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">업종을 선택하세요</option>
                    <option value="IT/소프트웨어">IT/소프트웨어</option>
                    <option value="금융">금융</option>
                    <option value="의료">의료</option>
                    <option value="교육">교육</option>
                    <option value="제조업">제조업</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                {/* 회사 규모 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">회사 규모</label>
                  <select
                    required
                    value={formData.size}
                    onChange={(e) => handleInputChange("size", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">회사 규모를 선택하세요</option>
                    <option value="1-10명">1-10명</option>
                    <option value="10-50명">10-50명</option>
                    <option value="50-100명">50-100명</option>
                    <option value="100-500명">100-500명</option>
                    <option value="500명 이상">500명 이상</option>
                  </select>
                </div>

                {/* 설립년도 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">설립년도</label>
                  <input
                    type="number"
                    required
                    value={formData.established}
                    onChange={(e) => handleInputChange("established", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 주소 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">주소</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* 웹사이트 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">웹사이트</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* 회원가입 버튼 */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                회원가입
              </button>
            </div>

            {/* 로그인 링크 */}
            <div className="text-center">
              <span className="text-gray-600">이미 계정이 있으신가요? </span>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

