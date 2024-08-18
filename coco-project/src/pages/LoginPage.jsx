import Logo from "../assets/COCO.svg";
import { PassWord } from "../components/PassWord";
import styled from "styled-components";
import { Id } from "./../components/Id";
import { LoginBtn } from "./../components/LoginBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginPage = () => {
  const passwordRegEx = /^(?=.*[!@#$%^&*])(?=.{1,20}$).*/;

  const passwordCheck = (password) => {
    if (password.match(passwordRegEx) === null) {
      console.log("비밀번호 형식을 확인해주세요");
      return;
    } else {
      console.log("비밀번호 형식이 맞습니다");
    }
  };

  const navigate = useNavigate();
  const SignUpNavClick = () => {
    navigate("/signup");
  };

  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    if (name === "password") {
      passwordCheck(value);
    }
  };

  console.log(inputs);

  return (
    <LoginContainer>
      <LoginAll>
        <LoginContents>
          <LoginContentsAll>
            <LoginAllHead>
              <CocoLogo src={Logo} alt="로고 이미지" />
              <LoginSubHead>
                <LoginTitle>로그인</LoginTitle>
                <LoginSubTitle>서비스를 이용할려면 로그인하세요</LoginSubTitle>
              </LoginSubHead>
            </LoginAllHead>
            <InputAll>
              <Id onChange={onChange} value={id} name="id" />
              <PassWord onChange={onChange} value={password} name="password" />
            </InputAll>
          </LoginContentsAll>
          <FooterAll>
            <FooterBtnCheck>
              <CheckBoxLabel>
                <CheckBoxInput type="checkbox" />
                <CheckBoxText>로그인 상태 유지</CheckBoxText>
              </CheckBoxLabel>
              <LoginBtn />
            </FooterBtnCheck>
            <SignUpAll>
              <SignUpTitle>회원이 아니신가요?</SignUpTitle>
              <SignUpNav onClick={SignUpNavClick}>회원가입</SignUpNav>
            </SignUpAll>
          </FooterAll>
        </LoginContents>
      </LoginAll>
    </LoginContainer>
  );
};

const FooterAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 58.22px;
`;

const FooterBtnCheck = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42.77px;
`;

const LoginContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 57.03px;
`;

const LoginSubHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LoginAllHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const SignUpNav = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

const SignUpTitle = styled.div`
  color: #7d7d7d;
  font-size: 16px;
  font-weight: 300;
`;
const SignUpAll = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 7px;
`;

const CheckBoxText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 11.88px;
`;

const CheckBoxInput = styled.input`
  margin: 0px;
  width: 17.822px;
  height: 17.822px;
  border: 1px solid #000;
`;

const CheckBoxLabel = styled.label`
  height: 17.822px;
  display: flex;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const InputAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45.15px;
`;

const LoginSubTitle = styled.h4`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

const LoginTitle = styled.h1`
  font-size: 31px;
  font-weight: bold;
`;

const CocoLogo = styled.img`
  width: 103px;
  height: 26px;
`;

const LoginAll = styled.div`
  /* width: 600px; */
  /* padding: 60px 42px;/ */
  height: 832.87px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
`;

const LoginContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 29.7px;
  margin: 42px;
`;

const LoginContainer = styled.div`
  display: flex;
  margin: 55px 0px;
  justify-content: center;
  align-items: center;
`;
