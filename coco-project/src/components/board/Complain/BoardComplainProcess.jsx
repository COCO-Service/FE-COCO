import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const BoardComplainProcess = ({ process }) => {
  return (
    <Container>
      <p>{process}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  display: flex;
  justify-content: center;
`;
