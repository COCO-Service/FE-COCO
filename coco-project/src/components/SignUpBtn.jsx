import styled from "styled-components";

function SignUpBtn() {
  return <SignUpBtnAll>가입하기</SignUpBtnAll>;
}

const SignUpBtnAll = styled.div`
  width: 536.64px;
  height: 66.08px;
  border-radius: 6px;
  background: #4f4cff;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default SignUpBtn;
