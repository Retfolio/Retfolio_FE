import React from "react";
import styled from "styled-components";
import logoImage from '../../assets/mainlogo.svg';
import { InvertBtn } from "../../components/invertbtn";

export const Header = () => {
  return(
    <>
      <Container>
        <Logo src={logoImage}></Logo>
        <InvertBtn />
      </Container>
    </>
  )
}

const Container = styled.header`
  width: 100%;
  float: left;
`;

const Logo = styled.img`
  width: 7%;
  margin-left: 121px;
  margin-top: 20px;
`;