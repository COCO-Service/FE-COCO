import styled from "styled-components";
import { MyBoardTable } from "./MyBoardTable";
import { useLocation } from "react-router-dom";

export const StudentComplain = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      {pathname === "/studentMyPage" || pathname === "/adminComplainPage" ? (
        <Text>내가 작성한 민원</Text>
      ) : (
        <Text>내가 작성한 공지</Text>
      )}
      <MyBoardTable />
    </Container>
  );
};

const Container = styled.div`
  width: 78vw;
  height: 800px;
  margin-top: 20px;
  background-color: white;
  border: 0.5px solid #878787;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 18px 20px 18px 70px;
`;
