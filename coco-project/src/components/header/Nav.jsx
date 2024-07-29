import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ isMember, isStudent }) => {
  return (
    <Nav>
      <Logo href="/">coco</Logo>
      <TextContainer>
        <NavText href="/board">게시판</NavText>
        <NavText href="/write">글 작성</NavText>
        <NavText href="/mypage">마이페이지</NavText>
      </TextContainer>
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
    </Nav>
  );
};

const Nav = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.a`
  font-family: "Rockwell", sans-serif;
  font-style: normal;
  font-size: 36px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 90px;
`;

const NavText = styled.a`
  font-family: Poppins, Regular;
  font-size: 20px;
  font-weight: 400;
  margin: 0 10px;
  color: black !important;
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

const LogoutBtn = styled(LoginBtn)``;
