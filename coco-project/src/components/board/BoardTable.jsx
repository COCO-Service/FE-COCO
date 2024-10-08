import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { BoardNoticeTitle } from "./Notice/BoardNoticeTitle";
import { BoardNoticeWriter } from "./Notice/BoardNoticeWriter";
import { BoardNoticeDays } from "./Notice/BoardNoticeDays";
import { BoardNoticeProcess } from "./Notice/BoardNoticeProcess";
import { BoardComplainTitle } from "./Complain/BoardComplainTitle";
import { BoardComplainDays } from "./Complain/BoardComplaindays";
import { BoardComplainWriter } from "./Complain/BoardComplainWriter";
import { BoardComplainProcess } from "./Complain/BoardComplainProcess";

const noticedummy = [
  {
    title: "오류수정",
    writer: "hansung",
    days: "2024/02/06",
    process: "-",
  },
  {
    title: "민원 확인 완료",
    writer: "dohyun",
    days: "2024/03/01",
    process: "-",
  },
];

const complaindummy = [
  {
    title: "1학년 3반 전등고장",
    writer: "jiyeon",
    days: "2024/04/21",
    process: "미완",
  },
  {
    title: "1학년 4반 문고장",
    writer: "injun",
    days: "2024/07/12",
    process: "완료",
  },
];

export const BoardTable = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <div>
        <Title>제목</Title>

        <NoticeContents pathname={pathname}>
          {noticedummy.map((ele, idx) => {
            return <BoardNoticeTitle title={ele.title} key={idx} />;
          })}
        </NoticeContents>
        <ComplainContents pathname={pathname}>
          {complaindummy.map((ele, idx) => {
            return <BoardComplainTitle title={ele.title} key={idx} />;
          })}
        </ComplainContents>
      </div>
      <div>
        <Writer>작성자</Writer>
        <NoticeContents pathname={pathname}>
          {noticedummy.map((ele, idx) => {
            return <BoardNoticeWriter writer={ele.writer} key={idx} />;
          })}
        </NoticeContents>
        <ComplainContents pathname={pathname}>
          {complaindummy.map((ele, idx) => {
            return <BoardComplainWriter writer={ele.writer} key={idx} />;
          })}
        </ComplainContents>
      </div>
      <div>
        <Days>날짜</Days>
        <NoticeContents pathname={pathname}>
          {noticedummy.map((ele, idx) => {
            return <BoardNoticeDays days={ele.days} key={idx} />;
          })}
        </NoticeContents>
        <ComplainContents pathname={pathname}>
          {complaindummy.map((ele, idx) => {
            return <BoardComplainDays days={ele.days} key={idx} />;
          })}
        </ComplainContents>
      </div>
      <div>
        <Process>처리 여부</Process>
        <NoticeContents pathname={pathname}>
          {noticedummy.map((ele, idx) => {
            return <BoardNoticeProcess process={ele.process} key={idx} />;
          })}
        </NoticeContents>
        <ComplainContents pathname={pathname}>
          {complaindummy.map((ele, idx) => {
            return <BoardComplainProcess process={ele.process} key={idx} />;
          })}
        </ComplainContents>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  margin: 0 auto;
  & > div:nth-child(1) {
    width: 50%;
    height: 100%;
    border-right: solid 1px #cacaca;
  }
  & > div:nth-child(2) {
    width: 25%;
    border-right: solid 1px #cacaca;
  }
  & > div:nth-child(3) {
    width: 20%;
    border-right: solid 1px #cacaca;
  }
  & > div:nth-child(4) {
    width: 10%;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cacaca;
  border: solid 1px #cacaca;
  border-left: none;
  border-right: none;
`;

const Writer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cacaca;
  border: solid 1px #cacaca;
  border-left: none;
  border-right: none;
`;

const Days = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cacaca;
  border: solid 1px #cacaca;
  border-left: none;
  border-right: none;
`;

const Process = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cacaca;
  border: solid 1px #cacaca;
  border-left: none;
  border-right: none;
`;

const NoticeContents = styled.div`
  ${({ pathname }) =>
    pathname === "/adminComplainPage1"
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

const ComplainContents = styled.div`
  ${({ pathname }) =>
    pathname === "/adminNoticePage1"
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
