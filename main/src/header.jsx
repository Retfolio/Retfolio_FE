import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import logoImage from '../src/assets/mainlogo.svg';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [isBlack, setIsBlack] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = () => {
    setIsBlack((prev) => !prev);

    const root = document.documentElement;

    if (!isBlack) {
      root.classList.add("invert-mode");
    } else {
      root.classList.remove("invert-mode");
    }
  };

  const handleLogoClick = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/');
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <>
      <GlobalStyle isTransitioning={isTransitioning} />
      <Container>
        <Logo src={logoImage} onClick={handleLogoClick}></Logo>
        <Btn isBlack={isBlack} onClick={handleClick} />
      </Container>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    transition: opacity 0.8s ease, transform 0.8s ease;
    opacity: ${({ isTransitioning }) => (isTransitioning ? 0 : 1)};
    transform: ${({ isTransitioning }) =>
      isTransitioning ? "scale(0.95)" : "scale(1)"};
  }
`;

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 105px;
  height: 31px;
  cursor: pointer;
  margin: 20px 0px 0px 120px;
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
  margin: 20px 120px 0px 0px;
`;
