import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function StudentMyPage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [studentInfo, setStudentInfo] = useState({
    name: "김학생",
    email: "student@university.ac.kr",
    phone: "010-1234-5678",
    university: "서울대학교",
    major: "컴퓨터공학과",
    grade: "3학년",
    studentId: "2021001234",
    bio: "프론트엔드 개발에 관심이 많은 학생입니다.",
    skills: ["React", "JavaScript", "TypeScript", "Node.js"],
    interests: ["웹개발", "모바일앱", "AI/ML"]
  });

  const handleBack = () => {
    navigate("/student-main");
  };

  const handleSave = () => {
    // 저장 로직
    setIsEditing(false);
    console.log("학생 정보 저장:", studentInfo);
  };

  const handleInputChange = (field, value) => {
    setStudentInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillAdd = (skill) => {
    if (skill && !studentInfo.skills.includes(skill)) {
      setStudentInfo(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const handleSkillRemove = (skill) => {
    setStudentInfo(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
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
              <h1 className="text-xl font-bold text-gray-900">학생 마이페이지</h1>
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
            <h2 className="text-2xl font-bold text-gray-900">프로필 정보</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {isEditing ? "취소" : "수정하기"}
            </button>
          </div>

          <div className="space-y-6">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
              {isEditing ? (
                <input
                  type="text"
                  value={studentInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.name}</p>
              )}
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              {isEditing ? (
                <input
                  type="email"
                  value={studentInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.email}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={studentInfo.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.phone}</p>
              )}
            </div>

            {/* 대학교 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">대학교</label>
              {isEditing ? (
                <input
                  type="text"
                  value={studentInfo.university}
                  onChange={(e) => handleInputChange("university", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.university}</p>
              )}
            </div>

            {/* 전공 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전공</label>
              {isEditing ? (
                <input
                  type="text"
                  value={studentInfo.major}
                  onChange={(e) => handleInputChange("major", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.major}</p>
              )}
            </div>

            {/* 학년 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">학년</label>
              {isEditing ? (
                <select
                  value={studentInfo.grade}
                  onChange={(e) => handleInputChange("grade", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="1학년">1학년</option>
                  <option value="2학년">2학년</option>
                  <option value="3학년">3학년</option>
                  <option value="4학년">4학년</option>
                  <option value="대학원생">대학원생</option>
                </select>
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.grade}</p>
              )}
            </div>

            {/* 학번 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">학번</label>
              {isEditing ? (
                <input
                  type="text"
                  value={studentInfo.studentId}
                  onChange={(e) => handleInputChange("studentId", e.target.value)}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.studentId}</p>
              )}
            </div>

            {/* 자기소개 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">자기소개</label>
              {isEditing ? (
                <textarea
                  value={studentInfo.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={4}
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p className="text-gray-900 p-3 bg-gray-50 rounded-md">{studentInfo.bio}</p>
              )}
            </div>

            {/* 기술 스택 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">기술 스택</label>
              {isEditing ? (
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {studentInfo.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                      >
                        {skill}
                        <button
                          onClick={() => handleSkillRemove(skill)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="기술을 입력하고 Enter를 누르세요"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSkillAdd(e.target.value);
                        e.target.value = '';
                      }
                    }}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {studentInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 관심 분야 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">관심 분야</label>
              {isEditing ? (
                <div className="space-y-2">
                  {["웹개발", "모바일앱", "AI/ML", "데이터분석", "게임개발", "보안"].map((interest) => (
                    <label key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={studentInfo.interests.includes(interest)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStudentInfo(prev => ({
                              ...prev,
                              interests: [...prev.interests, interest]
                            }));
                          } else {
                            setStudentInfo(prev => ({
                              ...prev,
                              interests: prev.interests.filter(i => i !== interest)
                            }));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700">{interest}</span>
                    </label>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {studentInfo.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
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

