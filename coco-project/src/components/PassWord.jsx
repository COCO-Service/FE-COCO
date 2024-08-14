import { useState } from "react";
import OpenEye from "../assets/OpenEye.svg";
import CloseEye from "../assets/CloseEye.svg";
import styled from "styled-components";

export const PassWord = ({ password, setPassword, ...props }) => {
  const [showPswd, setShowPswd] = useState(false);

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPswd = () => {
    setShowPswd((prevShowPswd) => !prevShowPswd);
  };

  return (
    <PassWordAll>
      <PassWordTitle>비밀번호</PassWordTitle>
      <FakePassWordDiv>
        <PassWordInput
          type={showPswd ? "text" : "password"}
          placeholder="비밀번호를 입력하세요"
          required
          {...props}
        />
        <PassWordEyes onClick={toggleShowPswd} className="PassWordEyes">
          {showPswd ? (
            <img src={OpenEye} alt="Show Password" />
          ) : (
            <img src={CloseEye} alt="Hide Password" />
          )}
        </PassWordEyes>
      </FakePassWordDiv>
    </PassWordAll>
  );
};

const FakePassWordDiv = styled.div`
  width: 536.64px;
  height: 66.08px;
  position: relative;
`;

const PassWordEyes = styled.div`
  position: absolute;
  top: 21px;
  right: 52px;
  cursor: pointer;
`;

const PassWordTitle = styled.div`
  font-size: 16px;
`;

const PassWordAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
`;

const PassWordInput = styled.input`
  width: 502.574px;
  padding: 22px 0px 22px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  outline: none;
`;
