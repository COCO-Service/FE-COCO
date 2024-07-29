import { Route, Routes } from "react-router-dom";
import { AdminSignUpPage } from "./pages/AdminSignUpPage";
import { SignUpStartPage } from "./pages/SignUpStartPage";
import { StudentSignUpPage } from "./pages/StudentSignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { GuestMainPage } from "./pages/GuestMainPage";
import { AdminMainPage } from "./pages/AdminMainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/adminsignUp" element={<AdminSignUpPage />} />
      <Route path="/signupstart" element={<SignUpStartPage />} />
      <Route path="/studentsignUp" element={<StudentSignUpPage />} />
      <Route path="/adminmain" element={<AdminMainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/guestmain" element={<GuestMainPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};
