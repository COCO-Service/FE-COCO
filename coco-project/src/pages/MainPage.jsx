import { MainBanner } from "../components/mainPage/MainBanner";
import { Footer } from "../components/footer/Footer";
import { MainComplain } from "../components/mainPage/MainComplain";
import { MainNotice } from "../components/mainPage/MainNotice";
import { GuestHeader } from "../components/header/GuestHeader";
import { MainMember } from "../components/mainPage/MainMember";
import { AfterHeader } from "../components/header/AfterHeader";
import styled from "styled-components";
import PropTypes from "prop-types";

export const MainPage = ({ isMember, isStudent }) => {
  console.log(isMember, isStudent);
  return (
    <Container>
      {isMember ? (
        isStudent ? (
          <AfterHeader isMember={true} isStudent={true} />
        ) : (
          <AfterHeader isMember={true} isStudent={false} />
        )
      ) : (
        <GuestHeader />
      )}
      <MainContainer>
        <MainBanner />
        <RightContainer>
          <MainNotice />
          <MainComplain />
        </RightContainer>
      </MainContainer>
      <MainMember />
      <Footer />
    </Container>
  );
};

MainPage.propTypes = {
  isMember: PropTypes.bool.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

const Container = styled.div`
  width: 100vw;
  height: 1220px;
  background-color: #ffffff;
`;

const MainContainer = styled.div`
  width: 74.06vw;
  display: flex;
  gap: 30px;
  margin: 28px auto 0;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
