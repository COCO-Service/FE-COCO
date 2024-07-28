import styled from "styled-components";

export const MainComplain = () => {
  return (
    <Wrapper>
      <div>
        <NewComplain>최근 민원</NewComplain>
        <AddBtn>+</AddBtn>
      </div>
      <hr />
      <div>
        <p>1학년 3반 전등 고장</p>
        <p>2일 전</p>
      </div>
      <hr />
      <div>
        <p>3학년 7반 문이 고장났습니다</p>
        <p>1주 전</p>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 0.5px solid #878787;
  background-color: white;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  width: 24.84vw;
  height: 23.21vh;
  border-radius: 10px;
  padding: 8px;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 6px;
    margin: 0 auto;
  }
  & > hr {
    margin: 0 auto;
    width: 95%;
  }
`;

const AddBtn = styled.button`
  border-radius: 50px;
  background-color: #878787;
  width: 19px;
  height: 19px;
  color: #ffffff;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewComplain = styled.b`
  color: #585858;
`;
