import React, { useState } from "react";
import styled from "styled-components";
import { Project } from "./project";
import { Writing } from "./writing";

export const SubHeader = () => {
  const [activePage, setActivePage] = useState("project");

  const renderPage = () => {
    switch (activePage) {
      case "project":
        return <Project />;
      case "writing":
        return <Writing />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <MainContainer>
        {["프로젝트", "내가쓴글", "소개"].map((text, index) => (
          <Title
            key={index}
            onClick={() =>
              setActivePage(
                text === "프로젝트"
                  ? "project"
                  : text === "내가쓴글"
                  ? "writing"
                  : "intro"
              )
            }
            isActive={
              activePage ===
              (text === "프로젝트"
                ? "project"
                : text === "내가쓴글"
                ? "writing"
                : "intro")
            }
          >
            {text}
          </Title>
        ))}
      </MainContainer>
      <PageContainer>{renderPage()}</PageContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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

const PageContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
