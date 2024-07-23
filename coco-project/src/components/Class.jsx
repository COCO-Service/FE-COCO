import styled from "styled-components";

function Class() {
  return (
    <ClassAll>
      <ClassTitle>학번</ClassTitle>
      <ClassInput type="text" placeholder="학번을 입력하세요"></ClassInput>
    </ClassAll>
  );
}

const ClassTitle = styled.div`
  font-size: 16px;
`;

const ClassAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centers;
  gap: 12px;
`;

const ClassInput = styled.input`
  width: 502.574px;
  padding: 22.57px 0px 26.52px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  outline: none;
`;

export default Class;
