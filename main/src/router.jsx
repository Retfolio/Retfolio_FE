import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { MainPage } from "./Pages/mainPage";
import { LoginPage } from "./Pages/loginPage";

export const Router = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/Main" element={<MainPage />} />
          <Route path="/Login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.body`
  font-family: "Pretendard";
`;
