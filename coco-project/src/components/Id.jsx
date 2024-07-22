import styled from "styled-components";

function Id() {
  return (
    <IdAll>
      <IdTitle>아이디</IdTitle>
      <IdInput type="text" placeholder="아이디를 입력하세요"></IdInput>
    </IdAll>
  );
}

const IdTitle = styled.div`
  font-size: 16px;
`;

const IdAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centers;
  gap: 12px;
`;

const IdInput = styled.input`
  width: 502.574px;
  padding: 22.57px 0px 26.52px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  outline: none;
`;

export default Id;
