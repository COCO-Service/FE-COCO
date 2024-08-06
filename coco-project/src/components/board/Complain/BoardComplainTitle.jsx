import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export const BoardComplainTitle = ({ title }) => {
  return (
    <Container>
      <p>{title}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
`;
