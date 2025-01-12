import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./Pages/mainPage";
import { LoginPage } from "./Pages/loginPage";
import { SeeProject } from "./Pages/seeProject";

export const Router = () => {
  return (
    <Container>
      <GlobalStyle>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Login" element={<LoginPage/>} />
            <Route path="/See" element={<SeeProject/>} />
          </Routes>
        </BrowserRouter>
      </GlobalStyle>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;

const GlobalStyle = styled.div`
  body {
    transition: opacity 0.8s ease, transform 0.8s ease;
    opacity: ${({ isTransitioning }) => (isTransitioning ? 0 : 1)};
    transform: ${({ isTransitioning }) =>
      isTransitioning ? "scale(0.95)" : "scale(1)"};
  }
`;
