import styled from "styled-components";

export const WriteAttachment = () => {
  return (
    <AttachmentAll>
      <Title>첨부파일</Title>
      <AttachmentInput
        type="file"
        placeholder="파일을 첨부하세요"
      ></AttachmentInput>
    </AttachmentAll>
  );
};

const AttachmentAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

const Title = styled.div`
  font-size: 27px;
  font-weight: 500;
`;

const AttachmentInput = styled.input`
  &::file-selector-button {
    position: absolute;
    top: 129px;
    left: 0px;
    width: 150px;
    height: 40px;
    border-radius: 6px;
    color: #ffffff;
    font-size: 18px;
    background-color: #4f4cff;
    border: none;
    &:focus {
      outline: none;
    }
  }

  width: 995px;
  padding: 20px 0px 20px 32px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  background: #fff;
  color: #666;
  font-family: "Pretendard";
  font-size: 23px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
`;
