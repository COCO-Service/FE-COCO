import styled from "styled-components";
import ProfileImg from "../../assets/ProfileImg.svg";

export const Profile = () => {
  return (
    <ProfileDiv>
      <Title>내 정보</Title>
      <ProfileSvg src={ProfileImg} alt="프로필 이미지" />
      <NameAll>
        <Id>leehando12</Id>
        <Name>이한도</Name>
      </NameAll>
      <Logout>로그아웃</Logout>
    </ProfileDiv>
  );
};

const NameAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116.183px;
  height: 51.883px;
  border-radius: 6px;
  background: #4f4cff;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;

const Id = styled.div`
  color: #acacac;
  font-size: 16px;
  font-weight: 300;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 300;
`;

const ProfileSvg = styled.img``;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 320px;
  height: 475px;
  border-radius: 10px;
  border: 0.5px solid #878787;
  background-color: #ffffff;
  margin: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  width: 62.56px;
  height: 42.439px;
  flex-direction: column;
`;
