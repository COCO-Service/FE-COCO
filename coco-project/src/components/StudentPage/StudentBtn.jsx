import styled from "styled-components";
import StudentImg from "../../assets/StudentImg.svg";
import { useNavigate } from "react-router-dom";

function StudentBtn() {
  const navigate = useNavigate();
  const StudentBtnClick = () => {
    navigate("/StudentSignUp");
  };
  return (
    <StudentWindowAll>
      <StudentBtnContent>
        <StudentBtnImg src={StudentImg} alt="학생 이미지" />
        <StudentButton onClick={StudentBtnClick}>학생</StudentButton>
      </StudentBtnContent>
    </StudentWindowAll>
  );
}

const StudentBtnContent = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 29px;
`;

const StudentBtnImg = styled.img``;

const StudentWindowAll = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
`;

const StudentButton = styled.button`
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
  display: flex;
  width: 320px;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: none;
  background: #4f4cff;
  cursor: pointer;
`;

export default StudentBtn;
