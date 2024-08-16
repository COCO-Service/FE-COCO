import styled, { css } from "styled-components";
import COCOLogo from "../../assets/COCOLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AfterHeader = ({ isMember, isStudent }) => {
  console.log("isMember:", isMember, "isStudent:", isStudent);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderAll>
      <Logo src={COCOLogo} alt="COCO Logo" onClick={() => navigate("/")} />
      <NavAll>
        <BoardNav
          pathname={pathname}
          onClick={
            isStudent
              ? () => navigate("/studentBoardPage1")
              : () => navigate("/adminBoardPage1")
          }
        >
          게시판
        </BoardNav>
        <WriteNav
          pathname={pathname}
          onClick={
            isStudent
              ? () => navigate("/studentWritingpage")
              : () => navigate("/adminWritingPage")
          }
        >
          글 작성
        </WriteNav>
        <MyPageNav
          pathname={pathname}
          onClick={
            isStudent
              ? () => navigate("/studentMyPage")
              : () => navigate("/adminMyComplainPage")
          }
        >
          마이페이지
        </MyPageNav>
      </NavAll>
      {isMember && (
        <Profile>
          <p>{`name ${isStudent ? "학생" : "선생님"}`}</p>
          <LogoutBtn>로그아웃</LogoutBtn>
        </Profile>
      )}
    </HeaderAll>
  );
};

AfterHeader.propTypes = {
  isMember: PropTypes.bool.isRequired,
  isStudent: PropTypes.bool.isRequired,
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
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  & > p {
    font-size: 20px;
    font-weight: 400;
  }
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
    pathname.includes("1")
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
    pathname.includes("My")
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
  margin-right: 30px;
`;
