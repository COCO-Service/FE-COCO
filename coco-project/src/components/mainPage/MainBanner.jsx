import styled from "styled-components";
import mainBannerImg from "../../assets/image.png";

export const MainBanner = () => {
  return (
    <Banner>
      <img src={mainBannerImg} alt="" />
    </Banner>
  );
};

const Banner = styled.div`
  width: 47.4vw;
  height: 48.42vh;
  border: 0.5px solid #878787;
  border-radius: 10px;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  & > img {
    width: 98%;
    height: 98%;
    border-radius: 10px;
  }
`;
