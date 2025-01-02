import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./components/mainPage";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;
