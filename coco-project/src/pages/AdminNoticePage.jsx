import styled from "styled-components";
import { Footer } from "../components/footer/Footer";
import { BoardContainer } from "../components/board/BoardContainer";
import { AfterHeader } from "../components/header/AfterHeader";
import { AdminSideSlide } from "../components/board/AdminSideSlide";

export const AdminNoticePage = () => {
  return (
    <Container>
      <AfterHeader isMember={true} isStudent={false} />
      <MainContainer>
        <AdminSideSlide />
        <BoardContainer />
        <Div />
      </MainContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
`;

const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

const Div = styled.div`
  width: 202px;
  height: 164px;
`;
