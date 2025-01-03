import React, { useState } from "react";
import styled from "styled-components";

export const InvertBtn = () => {
  const [isBlack, setIsBlack] = useState(false);

  const handleClick = () => {
    setIsBlack((prev) => !prev);

    const root = document.documentElement;

    if (!isBlack) {
      root.classList.add("invert-mode");
    } else {
      root.classList.remove("invert-mode");
    }
  };

  return (
    <>
      <Container>
        <Btn isBlack={isBlack} onClick={handleClick} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  bottom: 30px;
  margin-right: 30px;
`;

const Btn = styled.div`
  width: 30px;
  height: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${(props) => (props.isBlack ? "white" : "white")};
  color: ${(props) => (props.isBlack ? "white" : "black")};
  cursor: pointer;
  user-select: none;
  border-radius: 100px;
  border: 1px solid ${(props) => (props.isBlack ? "white" : "black")};
`;

// 전역 스타일 추가 (예: index.css 또는 App.css 파일에 추가)
