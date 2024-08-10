import styled from "styled-components";
import { WriteTitle } from "../components/WritePage/WriteTitle";
import { WritePlace } from "../components/WritePage/WritePlace";
import { WriteDetail } from "./../components/WritePage/WriteDetail";
import { WriteAttachment } from "./../components/WritePage/WriteAttachment";
import { WriteDate } from "../components/WritePage/WriteDate";
import { AfterHeader } from "../components/header/AfterHeader";
import { Footer } from "../components/footer/Footer";

export const AdminWritingPage = () => {
  return (
    <>
      <WriteAll>
        <AfterHeader isMember={true} isStudent={false} />

        <ContentsAll>
          <WriteHeadAll>
            <NoteHeaderAll>
              <WriteTitle />
              <WritePlace />
              <AttachmentDateAll>
                <WriteAttachment />
                <WriteDate />
              </AttachmentDateAll>
            </NoteHeaderAll>
            <NoticeComplaintCheck>
              <LabelAll>
                민원 작성
                <Complaint name="catagory" type="radio" />
              </LabelAll>
              <LabelAll>
                공지 작성
                <Notice name="catagory" type="radio" />
              </LabelAll>
            </NoticeComplaintCheck>
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

const NoteHeaderAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const LabelAll = styled.label`
  font-size: 23px;
  font-weight: 500;
  display: flex;
  gap: 8px;
`;

const NoticeComplaintCheck = styled.div`
  display: flex;
  gap: 28px;
  justify-content: end;
  width: 100%;
`;

const Notice = styled.input`
  width: 24px;
`;

const Complaint = styled.input`
  width: 24px;
`;

const WriteAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 71px;
  margin-bottom: 97px;
`;

const WriteHeadAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 40px;
`;

const AttachmentDateAll = styled.div`
  display: flex;
  gap: 42px;
`;
