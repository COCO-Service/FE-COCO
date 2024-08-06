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
      <Logo src={COCOLogo} alt="COCO Logo" />
      <NavAll>
        <BoardNav
          pathname={pathname}
          onClick={() => navigate("/adminboardpage")}
        >
          게시판
        </BoardNav>
        <WriteNav pathname={pathname} onClick={() => navigate("/writingpage")}>
          글 작성
        </WriteNav>
        <MyPageNav pathname={pathname} onClick={() => navigate("/mypage")}>
          마이페이지
        </MyPageNav>
      </NavAll>
      {isMember ? (
        <Profile>
          <img
            src={isStudent ? "student.jpg" : "teacher.jpg"}
            alt="프로필 사진"
          />
          <p>{`name ${isStudent ? "학생" : "선생님"}`}</p>
          <LogoutBtn>로그아웃</LogoutBtn>
        </Profile>
      ) : (
        <LoginBtn>로그인</LoginBtn>
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

const LoginBtn = styled.button`
  background-color: #4f4cff;
  color: white;
  border-radius: 6px;
  width: 120px;
  height: 38px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const NavAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
`;

const NavItem = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  ${({ isActive }) =>
    isActive
      ? css`
          color: #4f4cff;
          font-weight: 700;
        `
      : css`
          color: #111111;
        `}
`;

const BoardNav = styled(NavItem)``;
const WriteNav = styled(NavItem)``;
const MyPageNav = styled(NavItem)``;

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
