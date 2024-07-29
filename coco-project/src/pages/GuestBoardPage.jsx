import styled from "styled-components";
import Nav from "../components/header/Nav";
import { SideSlide } from "../components/board/SideSlide";

export const GuestBoardPage = () => {
  return (
    <Container>
      <Nav />
      <SideSlide />
    </Container>
  );
};

const Container = styled.div``;
