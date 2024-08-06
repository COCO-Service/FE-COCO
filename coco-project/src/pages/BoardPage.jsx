import styled from "styled-components";
import { SideSlide } from "../components/board/SideSlide";
import { Footer } from "../components/footer/Footer";
import { BoardContainer } from "../components/board/BoardContainer";
import { GuestHeader } from "../components/header/GuestHeader";

export const BoardPage = () => {
  return (
    <Container>
      <GuestHeader />
      <MainContainer>
        <SideSlide />
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
