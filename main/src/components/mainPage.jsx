import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background.svg';
import logoImage from '../assets/mainlogo.svg';

export const MainPage = () => {
  return (
    <Container>
      <Header>
        <Logo src={logoImage}></Logo>
      </Header>
      <Content>
        <Subtitle>전문 프로젝트 소개 서비스</Subtitle>
        <Title>자신있는 프로젝트</Title>
        <Title>지금 바로 뽐내보세요</Title>
        <Button>지금 바로 시작하기</Button>
      </Content>
      <Backgroundtext>Retfolio</Backgroundtext>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  user-select: none;
`;

const Header = styled.header`
  width: 100%;
  float: left;
`;

const Logo = styled.img`
  width: 7%;
  margin-left: 121px;
  margin-top: 20px;
`;

const Content = styled.div`
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 15px 25px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 45px;

  &:hover {
    background-color: #0056b3;
    transition: 0.5s ease;
  }
`;

const Backgroundtext = styled.h1`
  font-size: 128px;
  color: #ffffff10;
  margin-right: 77%;
  bottom: 120px;
  position: relative;
`