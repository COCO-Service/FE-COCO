import styled from "styled-components";
import COCOLogo from "../../assets/COCOLogo.svg";
import { useLocation } from "react-router-dom";
import { css } from "styled-components";

export const WriteHeader = () => {
  const { pathname } = useLocation();

  return (
    <HeaderAll>
      <Logo src={COCOLogo} />
      <NavAll>
        <BoardNav pathname={pathname}>게시판</BoardNav>
        <WriteNav pathname={pathname}>글 작성</WriteNav>
        <MyPageNav pathname={pathname}>마이페이지</MyPageNav>
      </NavAll>
      <LogoutBtn>로그아웃</LogoutBtn>
    </HeaderAll>
  );
};

const Logo = styled.img`
  display: flex;
  align-items: center;
  margin: 52px;
`;

const HeaderAll = styled.div`
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  gap: 525px;
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
    pathname === "/"
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
    pathname === "/StudentWritingPage" || pathname === "/AdminWritingPage"
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

const LogoutBtn = styled.div`
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
