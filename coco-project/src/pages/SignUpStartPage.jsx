// 사용하지 않는 페이지입니다.

import styled from "styled-components";
import { StudentBtn } from "../components/StudentPage/StudentBtn";
import { AdminBtn } from "./../components/adminPage/AdminBtn";

export const SignUpStartPage = () => {
  return (
    <SignUpStartAll>
      <SignUpTitleAll>
        <SignUpStartTitleDiv>
          <SignUpTitle>회원가입</SignUpTitle>
          <SignUpSubTitle>서비스를 이용할려면 회원가입하세요</SignUpSubTitle>
        </SignUpStartTitleDiv>
      </SignUpTitleAll>
      <BtnAll>
        <StudentBtn></StudentBtn>
        <AdminBtn></AdminBtn>
      </BtnAll>
    </SignUpStartAll>
  );
};

const SignUpStartAll = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 136px;
  background-color: #ffffff;
`;

const SignUpTitleAll = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

const SignUpStartTitleDiv = styled.div`
  width: 1557px;
  padding: 34px 0px 44px 63px;
  border-radius: 6px;
  border: solid 0.5px #878787;
  box-shadow: 0px 4px 20px 0px rgba(159, 159, 159, 0.25);
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`;
const SignUpTitle = styled.div`
  font-size: 36px;
  font-weight: 500;
`;

const SignUpSubTitle = styled.div`
  color: #bdbdbd;
  font-size: 20px;
  font-weight: 400;
`;

const BtnAll = styled.div`
  /* width: 100vw;
  height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 222px;
`;
