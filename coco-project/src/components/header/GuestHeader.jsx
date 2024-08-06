import styled from "styled-components";
import COCOLogo from "../../assets/COCOLogo.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";

export const GuestHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <HeaderAll>
      <Logo src={COCOLogo} onClick={() => navigate("/main")} />
      <NavAll>
        <BoardNav
          pathname={pathname}
          onClick={() => navigate("/guestboardpage")}
        >
          게시판
        </BoardNav>
        <WriteNav pathname={pathname} onClick={() => navigate("/login")}>
          글 작성
        </WriteNav>
        <MyPageNav pathname={pathname} onClick={() => navigate("/login")}>
          마이페이지
        </MyPageNav>
      </NavAll>
      <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
    </HeaderAll>
  );
};

const Logo = styled.img`
  display: flex;
  align-items: center;
  margin: 52px;
  cursor: pointer;
`;

const HeaderAll = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const NavAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const BoardNav = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  ${({ pathname }) =>
    pathname === "/guestboardpage" ||
    pathname === "/guestcomplainpage" ||
    pathname === "/guestnoticepage"
      ? css`
          color: #4f4cff;
          font-weight: 700;
        `
      : css`
          color: #111111;
        `}
`;

const WriteNav = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  ${({ pathname }) =>
    // pathname === "/StudentWritingPage" || pathname === "/AdminWritingPage"
    pathname.includes("Writing")
      ? css`
          color: #4f4cff;
          font-weight: 700;
        `
      : css`
          color: #111111;
        `}
`;

const MyPageNav = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  ${({ pathname }) =>
    pathname === "/"
      ? css`
          color: #4f4cff;
          font-weight: 700;
        `
      : css`
          color: #111111;
        `}
`;

const LoginBtn = styled.div`
  border-radius: 6px;
  background: #4f4cff;
  width: 143px;
  height: 48px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  margin-right: 68px;
`;
