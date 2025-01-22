import React from "react";
import styled from "styled-components";
import { Header } from "../header";
import { SubHeader } from "../components/MainPage/subheader";
import { Project } from "../components/MainPage/project"
import { Writing } from "../components/MainPage/writing";

export const MainProject = () => {

  return (
    <>
      <Container>
        <Header />
        <SubHeader />
      </Container>
    </>
  );
};



const Container = styled.div`
  
`