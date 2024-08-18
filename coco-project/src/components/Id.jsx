import styled from "styled-components";

export const Id = ({ ...props }) => {
  return (
    <IdAll>
      <IdTitle>아이디</IdTitle>
      <IdInput
        type="text"
        placeholder="아이디를 입력하세요(5자 이상 15자 이하)"
        {...props}
        minLength="5"
        maxLength="15"
      ></IdInput>
    </IdAll>
  );
};

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
  padding: 22px 0px 22px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  background-color: #ffffff;
  outline: none;
`;
