import { Route, Routes } from "react-router-dom";
import { AdminSignUpPage } from "./pages/AdminSignUpPage";
import { SignUpStartPage } from "./pages/SignUpStartPage";
import { StudentSignUpPage } from "./pages/StudentSignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { StudentWritingPage } from "./pages/StudentWritingPage";
import { AdminWritingPage } from "./pages/AdminWritingPage";
import { GuestBoardPage } from "./pages/GuestBoardPage";
import { StudentMyPage } from "./pages/StudentMyPage";
import { AdminComplainPage } from "./pages/AdminComplainPage";
import { AdminNoticePage } from "./pages/AdminNoticePage";
import { MainPage } from "./pages/MainPage";
import { AdminBoardPage } from "./pages/AdminBoardPage";
import { StudentBoardPage } from "./pages/StudentBoardPage";
import { StudentNoticePage } from "./pages/StudentNoticePage";
import { StudentComplainPage } from "./pages/StudentComplainPage";
import { AdminMyComplainPage } from "./pages/AdminMyComplainPage";
import { AdminMyNoticePage } from "./pages/AdminMyNoticePage";
import { SignUpPage } from "./pages/SignUp";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/signupSelect" element={<SignUpStartPage />} />
      <Route path="/studentSignUp" element={<StudentSignUpPage />} />
      <Route path="/studentWritingPage" element={<StudentWritingPage />} />
      <Route path="/studentMyPage" element={<StudentMyPage />} />
      <Route path="/studentBoardPage1" element={<StudentBoardPage />} />
      <Route path="/studentNoticePage1" element={<StudentNoticePage />} />
      <Route path="/studentComplainPage1" element={<StudentComplainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={<MainPage isMember={true} isStudent={false} />}
      />
      <Route path="/guestBoardPage1" element={<GuestBoardPage />} />
      <Route path="/guestComplainPage1" element={<GuestBoardPage />} />
      <Route path="/guestNoticePage1" element={<GuestBoardPage />} />
      <Route path="/adminWritingPage" element={<AdminWritingPage />} />
      <Route path="/adminSignup" element={<AdminSignUpPage />} />
      <Route path="/adminBoardPage1" element={<AdminBoardPage />} />
      <Route path="/adminComplainPage1" element={<AdminComplainPage />} />
      <Route path="/adminNoticePage1" element={<AdminNoticePage />} />
      <Route path="/adminMyComplainPage" element={<AdminMyComplainPage />} />
      <Route path="/adminMyNoticePage" element={<AdminMyNoticePage />} />
      <Route path="*" element={<div>404</div>} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};
