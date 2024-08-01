import styled from "styled-components";

export const WriteTitle = () => {
  return (
    <TitleAll>
      <Title>제목</Title>
      <TitleInput type="text" placeholder="제목을 입력하세요"></TitleInput>
    </TitleAll>
  );
};

const TitleAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 500;
`;

const TitleInput = styled.input`
  width: 1363px;
  padding: 20px 0px 20px 32px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  background: #fff;
  font-family: "Pretendard";
  color: #666;
  font-size: 23px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
`;
