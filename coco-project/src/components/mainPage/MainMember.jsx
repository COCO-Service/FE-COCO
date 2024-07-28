import styled from "styled-components";
import profileImg1 from "../../assets/profile.png";
import profileImg2 from "../../assets/profile2.png";

export const MainMember = () => {
  return (
    <MemberContainer>
      <div>
        <Img src={profileImg1} alt="" />
        <p>BE 이해나</p>
      </div>
      <div>
        <Img src={profileImg2} alt="" />
        <p>BE 임한성</p>
      </div>
      <div>
        <Img src={profileImg2} alt="" />
        <p>BE 황인준</p>
      </div>
      <div>
        <Img src={profileImg2} alt="" />
        <p>FE 박지연</p>
      </div>
      <div>
        <Img src={profileImg2} alt="" />
        <p>FE 지도현</p>
      </div>
    </MemberContainer>
  );
};

const MemberContainer = styled.div`
  width: 74.06vw;
  height: 34.42vh;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    overflow: hidden;
  }

  & > div > p {
    font-family: "Poppins";
    font-weight: bold;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;
