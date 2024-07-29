import styled from "styled-components";

export const SideSlide = () => {
  return (
    <Container>
      <Board>게시판</Board>
      <div>민원 확인</div>
      <div>공지 확인</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;

  & > div {
  }
`;

const Board = styled.div``;
