import styled from "styled-components";
import COCOLogo from "../../assets/COCOLogo.svg";

export const WriteHeader = () => {
  return (
    <HeaderAll>
      <Logo src={COCOLogo} />
      <NavAll>
        <BoardNav>게시판</BoardNav>
        <WriteNav>글 작성</WriteNav>
        <MyPageNav>마이페이지</MyPageNav>
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
  color: #4f4cff;
  font-weight: 700;
  cursor: pointer;
`;

const WriteNav = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
`;

const MyPageNav = styled.div`
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
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
