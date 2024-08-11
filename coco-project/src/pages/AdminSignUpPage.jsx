import Logo from "../assets/COCO.svg";
import PassWord from "../components/PassWord";
import styled from "styled-components";
import Id from "./../components/Id";
import { PassWordReturn } from "../components/PassWordReturn";
import Name from "./../components/Name";
import { SignUpBtn } from "../components/StudentPage/SignUpBtn";
import AdminNum from "./../components/adminPage/AdminNum";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const AdminSignUpPage = () => {
  const [password, setPassword] = useState("");
  const [passwordReturn, setPasswordReturn] = useState("");

  const [inputs, setInputs] = useState({
    id: "",
    password1: "",
    password2: "",
  });

  const { id, password1, password2 } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log(password1, password2)
    if (password1 != "" && password2 != "") {
      if (password1 == password2) {
        console.log(inputs);
      } else {
        console.log("비밀번호가 다릅니다. 다시 입력해주세요");
      }
    }
  }, [password1, password2, id]);

  const navigate = useNavigate();
  const LoginNavClick = () => {
    navigate("/Login");
  };

  return (
    <SignUpContainer>
      <SignUpAll>
        <SignUpContents>
          <SignUpContentsAll>
            <SignUpAllHead>
              <CocoLogo src={Logo} alt="로고 이미지" />
              <SignUpSubHead>
                <SignUpTitle>회원가입</SignUpTitle>
                <SignUpSubTitle>
                  서비스를 이용할려면 회원가입하세요
                </SignUpSubTitle>
              </SignUpSubHead>
            </SignUpAllHead>
            <InputAll>
              <Id onChange={onChange} value={id} name="id" />
              <PassWord
                onChange={onChange}
                value={password1}
                name="password1"
                $password={password}
                $setPassword={setPassword}
              />
              <PassWordReturn
                onChange={onChange}
                value={password2}
                name="password2"
                $passwordReturn={passwordReturn}
                $setPasswordReturn={setPasswordReturn}
              />
              <Name />
              <AdminNum />
            </InputAll>
          </SignUpContentsAll>
          <FooterAll>
            <FooterBtnCheck>
              <CheckBoxLabel>
                <CheckBoxInput type="checkbox" />
                <CheckBoxText>개인정보 제공 동의</CheckBoxText>
              </CheckBoxLabel>
              <SignUpBtn />
            </FooterBtnCheck>
            <LoginAll>
              <LoginTitle>이미 계정이 있으신가요?</LoginTitle>
              <LoginNav onClick={LoginNavClick}>로그인</LoginNav>
            </LoginAll>
          </FooterAll>
        </SignUpContents>
      </SignUpAll>
    </SignUpContainer>
  );
};

const FooterAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 62.28px;
`;

const FooterBtnCheck = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30.61px;
`;

const SignUpContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 41px;
`;

const SignUpSubHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SignUpAllHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const LoginNav = styled.div`
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

const LoginTitle = styled.div`
  color: #7d7d7d;
  font-size: 16px;
  font-weight: 300;
`;
const LoginAll = styled.div`
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
  gap: 14.69px;
`;

const SignUpSubTitle = styled.h4`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

const SignUpTitle = styled.h1`
  font-size: 31px;
  font-weight: bold;
`;

const CocoLogo = styled.img`
  width: 103px;
  height: 26px;
`;

const SignUpAll = styled.div`
  /* width: 600px; */
  /* padding: 60px 42px;/ */
  height: 1178px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
`;

const SignUpContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 42.69px;
  margin: 42px 59px;
`;

const SignUpContainer = styled.div`
  display: flex;
  margin: 55px 0px;
  justify-content: center;
  align-items: center;
`;
