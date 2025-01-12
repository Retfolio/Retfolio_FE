import React, { useState } from "react";
import styled from "styled-components";

export const SubHeader = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Container>
        <MainContainer>
          {["프로젝트", "내가쓴글", "소개"].map((text, index) => (
            <Title
              key={index}
              onClick={() => handleClick(index)}
              isActive={activeIndex === index}
            >
              {text}
            </Title>
          ))}
        </MainContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 85%;
  display: flex;
  color: white;
  margin: auto;
  user-select: none;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  margin-right: 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  color: ${(props) => (props.isActive ? "white" : "#ffffff8a")}; 

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: yellow;
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease-in-out;
  }

  ${(props) =>
    props.isActive &&
    `
    &::after {
      width: 100%;
    }
  `}
`;
