import styled from "styled-components";
import { Profile } from "../components/adminPage/Profile";
import { AfterHeader } from "../components/header/AfterHeader";
import { StudentComplain } from "../components/myPage/StudentComplain";
import { Footer } from "../components/footer/Footer";

export const StudentMyPage = () => {
  return (
    <Container>
      <AfterHeader isMember={true} isStudent={true} />
      <MainContainer>
        <Profile />
        <StudentComplain />
      </MainContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
`;

const MainContainer = styled.div`
  display: flex;
`;
