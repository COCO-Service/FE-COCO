import { useNavigate, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const menus = [
  { name: "내가 작성한 민원", path: "/adminMyComplainPage" },
  { name: "내가 작성한 공지", path: "/adminMyNoticePage" },
];

export const AdminPageSideSlide = () => {
  const { pathname: currentRoute } = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      {menus.map((menu, idx) => {
        return (
          <Menu
            isMatch={currentRoute === menu.path}
            key={idx}
            onClick={() => navigate(menu.path)}
          >
            {menu.name}
          </Menu>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  width: 320px;
  height: 140px;
  display: flex;
  border: 0.5px solid #878787;
  border-radius: 10px;
  font-size: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: 20px;
  & > div {
    border-radius: 10px;
    width: 90%;
    height: 37%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  & > div:hover {
    background-color: rgba(217, 217, 217, 0.4);
  }
`;

const Menu = styled.div`
  ${({ isMatch }) =>
    isMatch
      ? css`
          background-color: rgba(217, 217, 217, 0.4);
          color: #4f4cff;
          font-weight: bold;
        `
      : css`
          color: #111111;
        `}
`;
