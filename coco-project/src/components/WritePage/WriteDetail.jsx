import styled from "styled-components";

export const WriteDetail = () => {
  return (
    <DetailAll>
      <Detail>내용</Detail>
      <DetailInput type="text" Detailholder="내용을 입력하세요"></DetailInput>
    </DetailAll>
  );
};

const DetailAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Detail = styled.div`
  font-size: 32px;
  font-weight: 500;
`;

const DetailInput = styled.input`
  width: 1363px;
  padding: 20px 1085px 20px 32px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  background: #fff;
  color: #666;
  font-size: 23px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
`;
