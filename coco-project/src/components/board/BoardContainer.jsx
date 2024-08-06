import styled from "styled-components";
import { BoardTable } from "./BoardTable";

export const BoardContainer = () => {
  return (
    <Container>
      <p>게시판</p>
      <BoardTable></BoardTable>
    </Container>
  );
};

const Container = styled.div`
  width: 65vw;
  height: 1200px;
  background-color: white;
  border-radius: 10px;
  border: solid 0.5px #878787;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  & > p {
    margin: 20px 20px 15px 60px;
    font-weight: bold;
    font-size: 20px;
  }
`;
