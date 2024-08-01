import styled from "styled-components";
import { BoardNoticeTitle } from "./BoardNoticeTitle";
import { BoardNoticeWriter } from "./BoardNoticeWriter";
import { BoardNoticeDays } from "./BoardNoticeDays";
import { BoardNoticeProcess } from "./BoardNoticeProcess";
import { BoardComplainTitle } from "./BoardComplainTitle";
import { BoardComplainDays } from "./BoardComplaindays";
import { BoardComplainWriter } from "./BoardComplainWriter";
import { BoardComplainProcess } from "./BoardComplainProcess";

const noticedummy = [
  { title: "오류수정", writer: "hansung", days: "2024/02/06", process: "-" },
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
    process: "",
  },
  {
    title: "1학년 4반 문고장",
    writer: "injun",
    days: "2024/07/12",
    process: "",
  },
];

export const BoardTable = () => {
  return (
    <Container>
      <div>
        <Title>제목</Title>
        {noticedummy.map((ele, idx) => {
          return <BoardNoticeTitle title={ele.title} key={idx} />;
        })}
        {complaindummy.map((ele, idx) => {
          return <BoardComplainTitle title={ele.title} key={idx} />;
        })}
      </div>
      <div>
        <Writer>작성자</Writer>
        {noticedummy.map((ele, idx) => {
          return <BoardNoticeWriter writer={ele.writer} key={idx} />;
        })}
        {complaindummy.map((ele, idx) => {
          return <BoardComplainWriter writer={ele.writer} key={idx} />;
        })}
      </div>
      <div>
        <Days>날짜</Days>
        {noticedummy.map((ele, idx) => {
          return <BoardNoticeDays days={ele.days} key={idx} />;
        })}
        {complaindummy.map((ele, idx) => {
          return <BoardComplainDays days={ele.days} key={idx} />;
        })}
      </div>
      <div>
        <Process>처리 여부</Process>
        {noticedummy.map((ele, idx) => {
          return <BoardNoticeProcess process={ele.process} key={idx} />;
        })}
        {complaindummy.map((ele, idx) => {
          return <BoardComplainProcess days={ele.process} key={idx} />;
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  position: relative;
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
