import styled from "styled-components";

export const BoardNoticeDays = () => {
  return (
    <Container>
      <p>2024/02/06</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  background-color: rgba(242, 155, 155, 20%);
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
