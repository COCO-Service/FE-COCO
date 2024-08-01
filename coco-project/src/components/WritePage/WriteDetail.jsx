import styled from "styled-components";

export const WriteDetail = () => {
  return (
    <DetailAll>
      <Title>내용</Title>
      <DetailInput placeholder="내용을 입력하세요"></DetailInput>
    </DetailAll>
  );
};

const DetailAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 27px;
  font-weight: 500;
  width: 1363px;
`;

const DetailInput = styled.textarea`
  outline: none;
  color: #666;
  font-size: 23px;
  width: 1363px;
  height: 467px;
  padding: 20px 0px 20px 32px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: 0.5px solid #878787;
  background: #fff;
  font-family: "Pretendard";
`;
