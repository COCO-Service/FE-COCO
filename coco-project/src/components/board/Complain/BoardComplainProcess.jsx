import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const BoardComplainProcess = ({ process }) => {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState();
  const handleSelect = (e) => {
    setSelected(e.target.textContent);
  };
  return (
    <Container pathname={pathname}>
      {pathname === "/adminComplainPage1" || pathname === "/adminBoardPage1" ? (
        <details>
          <summary>{selected || "-"}</summary>
          <div onClick={handleSelect}>
            <p>미완</p>
          </div>
          <div onClick={handleSelect}>
            <p>완료</p>
          </div>
        </details>
      ) : (
        <p>{process}</p>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  border-bottom: 1px solid #cacaca;
  padding: 10px;
  display: flex;
  justify-content: center;
  & > details > summary {
    text-align: center;
    width: 100%;
    cursor: pointer;
  }
  & > details > div {
    background-color: white;
    width: 100px;
    height: 40px;
    border: 1px solid #cacaca;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px 7px 0 0;
    position: relative;
  }
  & > details > div:nth-of-type(2) {
    background-color: white;
    width: 100px;
    height: 40px;
    border: 1px solid #cacaca;
    border-radius: 0 0 7px 7px;
  }
  & > details > div:nth-of-type(1) > p {
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(242, 155, 155, 0.32);
    border: 0.5px solid rgb(255, 0, 0);
    box-shadow: 0px 0px 5px 2px rgba(255, 0, 0, 0.4);
    border-radius: 4px;
  }
  & > details > div:nth-of-type(2) > p {
    width: 80%;
    height: 60%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(126, 155, 255, 0.32);
    border: 0.5px solid rgb(0, 0, 255);
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 255, 0.4);
  }
`;
