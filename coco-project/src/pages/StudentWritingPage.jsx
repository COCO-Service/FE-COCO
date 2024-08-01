import styled from "styled-components";
import { WriteTitle } from "../components/WritePage/WriteTitle";
import { WritePlace } from "../components/WritePage/WritePlace";
import { WriteDetail } from "./../components/WritePage/WriteDetail";
import { WriteAttachment } from "./../components/WritePage/WriteAttachment";
import { WriteDate } from "../components/WritePage/WriteDate";
import { WriteHeader } from "../components/header/WriteHeader";

export const StudentWritingPage = () => {
  return (
    <WriteAll>
      <WriteHeader />
      <WriteHeadAll>
        <WriteTitle />
        <WritePlace />
        <AttachmentDateAll>
          <WriteAttachment />
          <WriteDate />
        </AttachmentDateAll>
      </WriteHeadAll>
      <WriteDetail />
    </WriteAll>
  );
};

const WriteAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-bottom: 97px;
`;

const WriteHeadAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-top: 40px;
`;

const AttachmentDateAll = styled.div`
  display: flex;
  gap: 42px;
`;
