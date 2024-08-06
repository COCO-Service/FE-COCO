import { Route, Routes } from "react-router-dom";
import { AdminSignUpPage } from "./pages/AdminSignUpPage";
import { SignUpStartPage } from "./pages/SignUpStartPage";
import { StudentSignUpPage } from "./pages/StudentSignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { GuestMainPage } from "./pages/GuestMainPage";
import { StudentWritingPage } from "./pages/StudentWritingPage";
import { AdminWritingPage } from "./pages/AdminWritingPage";
import { BoardPage } from "./pages/BoardPage";
import { AdminMainPage } from "./pages/AdminMainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/adminSignup" element={<AdminSignUpPage />} />
      <Route path="/signupSelect" element={<SignUpStartPage />} />
      <Route path="/studentSignUp" element={<StudentSignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/main" element={<GuestMainPage />} />
      <Route path="/studentWritingPage" element={<StudentWritingPage />} />
      <Route path="/adminWritingPage" element={<AdminWritingPage />} />
      <Route path="/guestBoardPage" element={<BoardPage />} />
      <Route path="/guestComplainPage" element={<BoardPage />} />
      <Route path="/guestNoticePage" element={<BoardPage />} />
      <Route path="/adminMain" element={<AdminMainPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
