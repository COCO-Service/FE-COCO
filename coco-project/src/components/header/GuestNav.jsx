import styled from "styled-components";

export const GuestNav = () => {
  return (
    <Nav>
      <Logo>coco</Logo>
      <TextContainer>
        <NavText>게시판</NavText>
        <NavText>글 작성</NavText>
        <NavText>마이페이지</NavText>
      </TextContainer>
      <NavBtn>로그인</NavBtn>
    </Nav>
  );
};

const Logo = styled.a`
  font-family: "Rockwell", sans-serif;
  font-style: normal;
  font-size: 36px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
`;

const Nav = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TextContainer = styled.div`
  display: flex;
  gap: 90px;
`;

const NavText = styled.a`
  font-family: Poppins, Regular;
  font-size: 20px;
  font-weight: 400;
  margin: 0 10px 0 10px;
  color: black !important;
`;

const NavBtn = styled.button`
  background-color: #4f4cff;
  color: white !important;
  border-radius: 6px;
  width: 120px;
  height: 38px;
  font-size: 16px;
  border: transparent;
  text-align: center;
`;
