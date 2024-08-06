import { MainBanner } from "../components/mainPage/MainBanner";
import { Footer } from "../components/footer/Footer";
import { MainComplain } from "../components/mainPage/MainComplain";
import { MainNotice } from "../components/mainPage/MainNotice";
import { MainMember } from "../components/mainPage/MainMember";
import styled from "styled-components";
import { AfterHeader } from "../components/header/AfterHeader";

export const AdminMainPage = () => {
  return (
    <Container>
      <AfterHeader isMember={true} isStudent={false} />
      <MainContainer>
        <MainBanner />
        <RightContainer>
          <MainNotice />
          <MainComplain />
        </RightContainer>
      </MainContainer>
      <MainMember />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 1220px;
  background-color: #ffffff;
`;

const MainContainer = styled.div`
  width: 74.06vw;
  display: flex;
  gap: 30px;
  margin: 28px auto 0;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
