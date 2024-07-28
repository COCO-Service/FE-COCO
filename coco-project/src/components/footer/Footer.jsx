import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterUpperContainer>
        <div>
          <a href="">소개</a>
          <a href="">이용약관</a>
          <a href="">개인정보처리방침</a>
          <a href="">청소년보호방침</a>
          <a href="">시스템문의</a>
          <a href="">시스템안내</a>
        </div>
        <a href="">이용자서비스</a>
      </FooterUpperContainer>
      <FooterUnderContainer>
        <div>
          <p>대덕소프트웨어 마이스터고등학교</p>
          <p>대표담당자: 이해나 대전광역시 대덕sw마이스터고</p>
          <p>E_mail : shickcoong777@dsm.hs.kr</p>
        </div>
        <div>
          <p>고객센터 1557-1557</p>
          <p>운영시간: 평일 09:00~18:00</p>
          <p>고객센터 바로가기 &gt;</p>
        </div>
      </FooterUnderContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  margin-top: 50px;
`;

const FooterUpperContainer = styled.div`
  background-color: #ededed;
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  font-size: 14px;
  font-family: "Noto Sans KR", "Regular";

  & > div > :nth-child(3) {
    color: #095a20;
  }
  & > div {
    display: flex;
    gap: 30px;
  }
`;

const FooterUnderContainer = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #505050;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  & > div:nth-child(1) > p:nth-child(1) {
    font-size: 15px;
    color: black;
    font-weight: 700;
  }
  & > div:nth-child(2) > p:nth-child(1) {
    font-size: 20px;
    color: black;
    font-weight: 600;
  }
`;
