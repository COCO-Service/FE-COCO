import styled from "styled-components";
<<<<<<< Updated upstream
import { Profile } from "../components/adminPage/Profile";
import { AfterHeader } from "../components/header/AfterHeader";
import { StudentComplain } from "../components/myPage/StudentComplain";
=======
import { AfterHeader } from "../components/header/AfterHeader";
>>>>>>> Stashed changes
import { Footer } from "../components/footer/Footer";

export const StudentMyPage = () => {
  return (
    <Container>
<<<<<<< Updated upstream
      <AfterHeader isMember={true} isStudent={true} />
      <MainContainer>
        <Profile />
        <StudentComplain />
      </MainContainer>
=======
      <AfterHeader />
      <MainContainer></MainContainer>
>>>>>>> Stashed changes
      <Footer />
    </Container>
  );
};

<<<<<<< Updated upstream
const Container = styled.div`
  background-color: white;
`;

const MainContainer = styled.div`
  display: flex;
`;
=======
const Container = styled.div``;

const MainContainer = styled.div``;
>>>>>>> Stashed changes
