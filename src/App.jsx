

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CompanyMain from "./pages/CompanyMain";
import StudentMain from "./pages/StudentMain";
import CompanyMyPage from "./pages/CompanyMyPage";
import StudentMyPage from "./pages/StudentMyPage";
import Next from "./pages/Next";
import CompanyAssign from "./pages/company_assign";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/company-main" element={<CompanyMain />} />
        <Route path="/student-main" element={<StudentMain />} />
        <Route path="/company-mypage" element={<CompanyMyPage />} />
        <Route path="/student-mypage" element={<StudentMyPage />} />
        <Route path="/next" element={<Next />} />
        <Route path="/company_assign" element={<CompanyAssign />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


