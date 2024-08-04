import styled from "styled-components";
import TeacherImg from "../../assets/TeacherImg.svg";
import { useNavigate } from "react-router-dom";

function AdminBtn() {
  const navigate = useNavigate();
  const AdminBtnClick = () => {
    navigate("/AdminSignUp");
  };
  return (
    <StudentWindowAll>
      <AdminBtnContent>
        <AdminBtnImg src={TeacherImg} alt="선생님 이미지" />
        <StudentButton onClick={AdminBtnClick}>선생님</StudentButton>
      </AdminBtnContent>
    </StudentWindowAll>
  );
}

const AdminBtnContent = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 29px;
`;

const AdminBtnImg = styled.img``;

const StudentWindowAll = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px 0px rgba(0, 0, 0, 0.05);
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

export default AdminBtn;
