import styled from "styled-components";
import { WriteTitle } from "../components/WritePage/WriteTitle";
import { WritePlace } from "../components/WritePage/WritePlace";
import { WriteDetail } from "./../components/WritePage/WriteDetail";
import { WriteAttachment } from "./../components/WritePage/WriteAttachment";
import { WriteDate } from "../components/WritePage/WriteDate";
import { AfterHeader } from "../components/header/AfterHeader";
import { Footer } from "../components/footer/Footer";

export const StudentWritingPage = () => {
  return (
    <>
      <WriteAll>
        <AfterHeader isMember={true} isStudent={true} />
        <ContentsAll>
          <WriteHeadAll>
            <WriteTitle />
            <WritePlace />
            <AttachmentDateAll>
              <WriteAttachment />
              <WriteDate />
            </AttachmentDateAll>
          </WriteHeadAll>
          <WriteDetail />
        </ContentsAll>
        <CompleteBtn>작성완료</CompleteBtn>
      </WriteAll>
      <Footer />
    </>
  );
};

const ContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const CompleteBtn = styled.div`
  width: 350px;
  height: 75px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 37.5px;
  color: #ffffff;
  font-size: 26px;
  border-radius: 10px;
  background: #4f4cff;
  cursor: pointer;
`;

const WriteAll = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 71px;
  background-color: white;
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
