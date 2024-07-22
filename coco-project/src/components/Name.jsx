import styled from "styled-components";

function Name() {
  return (
    <NameAll>
      <NameTitle>이름</NameTitle>
      <NameInput type="text" placeholder="이름을 입력하세요"></NameInput>
    </NameAll>
  );
}

const NameTitle = styled.div`
  font-size: 16px;
`;

const NameAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centers;
  gap: 12px;
`;

const NameInput = styled.input`
  width: 502.574px;
  padding: 22.57px 0px 26.52px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  outline: none;
`;

export default Name;
