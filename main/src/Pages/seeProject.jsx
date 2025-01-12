import React from "react";
import styled from "styled-components";
import { Header } from "../header";
import { SubHeader } from "../subheader";
import { Project } from "../components/MainPage/project"

export const SeeProject = () => {
  return (
    <>
      <Container>
        <Header />
        <SubHeader />
        <Project />
      </Container>
    </>
  )
}



const Container = styled.div`
  
`