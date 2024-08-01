import styled from "styled-components";

export const WriteDate = () => {
  return (
    <DateAll>
      <Title>날짜</Title>
      <DateInput type="text" placeholder="날짜를 입력하세요"></DateInput>
    </DateAll>
  );
};

const DateAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 500;
`;

const DateInput = styled.input`
  width: 325px;
  padding: 20px 0px 20px 32px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  background: #fff;
  color: #666;
  font-family: "Pretendard";
  font-size: 23px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
`;
