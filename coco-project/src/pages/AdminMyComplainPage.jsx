import styled from "styled-components";
import { Profile } from "../components/adminPage/Profile";
import { AfterHeader } from "../components/header/AfterHeader";
import { StudentComplain } from "../components/myPage/StudentComplain";
import { Footer } from "../components/footer/Footer";
import { AdminPageSideSlide } from "../components/myPage/AdminPageSideSlide";

export const AdminMyComplainPage = () => {
  return (
    <Container>
      <AfterHeader isMember={true} isStudent={false} />
      <MainContainer>
        <Main1>
          <Profile />
          <AdminPageSideSlide />
        </Main1>
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

const Main1 = styled.div`
  display: flex;
  flex-direction: column;
`;
