import { useState } from "react";
import OpenEye from "../assets/OpenEye.svg";
import CloseEye from "../assets/CloseEye.svg";
import styled from "styled-components";

export const PasswordReturn = ({
  $passwordReturn,
  $setPasswordReturn,
  ...props
}) => {
  const [showPswd, setShowPswd] = useState(false);

  const handleChangePasswordReturn = (e) => {
    $setPasswordReturn(e.target.value);
  };

  const toggleShowPswd = () => {
    setShowPswd((prevShowPswd) => !prevShowPswd);
  };

  return (
    <PassWordReturnAll>
      <PassWordReturnTitle>비밀번호 확인</PassWordReturnTitle>
      <FakePassWordReturnDiv>
        <PassWordReturnInput
          type={showPswd ? "text" : "password"}
          placeholder="비밀번호를 다시 입력하세요"
          onChange={handleChangePasswordReturn}
          value={$passwordReturn}
          required
          {...props}
        />
        <PassWordReturnEyes
          onClick={toggleShowPswd}
          className="PassWordReturnEyes"
        >
          {showPswd ? (
            <img src={OpenEye} alt="Show PasswordReturn" />
          ) : (
            <img src={CloseEye} alt="Hide PasswordReturn" />
          )}
        </PassWordReturnEyes>
      </FakePassWordReturnDiv>
    </PassWordReturnAll>
  );
};

const FakePassWordReturnDiv = styled.div`
  width: 536.64px;
  height: 66.08px;
  position: relative;
`;

const PassWordReturnEyes = styled.div`
  position: absolute;
  top: 18.5px;
  right: 52px;
  cursor: pointer;
`;

const PassWordReturnTitle = styled.div`
  font-size: 16px;
`;

const PassWordReturnAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 12px;
`;

const PassWordReturnInput = styled.input`
  width: 502.574px;
  padding: 22px 0px 22px 32.08px;
  border-radius: 6px;
  border: 0.6px solid #282828;
  outline: none;
`;


