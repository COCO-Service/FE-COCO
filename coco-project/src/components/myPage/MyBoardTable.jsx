import styled from "styled-components";
import { BoardNoticeTitle } from "../board/Notice/BoardNoticeTitle";
import { BoardNoticeDays } from "../board/Notice/BoardNoticeDays";
import { BoardNoticeProcess } from "../board/Notice/BoardNoticeProcess";
import { BoardComplainTitle } from "../board/Complain/BoardComplainTitle";
import { BoardComplainDays } from "../board/Complain/BoardComplaindays";
import { BoardComplainProcess } from "../board/Complain/BoardComplainProcess";
import { css } from "styled-components";
import { useLocation } from "react-router-dom";

const noticedummy = [
  {
    title: "오류수정",
    days: "2024/02/06",
    process: "-",
  },
  {
    title: "민원 확인 완료",
    days: "2024/03/01",
    process: "-",
  },
];

const complaindummy = [
  {
    title: "1학년 3반 전등고장",
    days: "2024/04/21",
    process: "미완",
  },
  {
    title: "1학년 4반 문고장",
    days: "2024/07/12",
    process: "완료",
  },
];

export const MyBoardTable = () => {
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
  height: 60%;
  display: flex;
  margin: 0 auto;
  & > div:nth-child(1) {
    width: 70%;
    height: 100%;
    border-right: solid 1px #cacaca;
  }
  & > div:nth-child(2) {
    width: 25%;
    border-right: solid 1px #cacaca;
  }

  & > div:nth-child(3) {
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
    pathname === "/studentMyPage" || pathname === "/adminMyComplainPage"
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

const ComplainContents = styled.div`
  ${({ pathname }) =>
    pathname === "/adminMyNoticePage"
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
