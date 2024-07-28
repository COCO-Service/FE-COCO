import StudentSignUpPage from "./pages/StudentSignUpPage";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import LoginPage from "./pages/LoginPage";
import SignUpStartPage from "./pages/SignUpStartPage";
import { AppRouter } from "./Router";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <AppRouter />
      <GlobalStyle />
    </>
  );
}

export default App;
