import React, { useState } from "react";
import styled from "styled-components";
import { Header } from '../header';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStartClick = () => {
    setIsTransitioning(true); // 애니메이션 시작
    setTimeout(() => {
      navigate('/Login'); // 페이지 이동
    }, 1000); // 애니메이션 지속 시간과 일치
  };

  return (
    <>
      <Container isTransitioning={isTransitioning}>
        <Header />
        <Content>
          <Subtitle>전문 프로젝트 소개 서비스</Subtitle>
          <TitleContainer>
          <Title>자신있는 프로젝트</Title>
          <Title>지금 바로 뽐내보세요</Title>
          </TitleContainer>
          <Button onClick={handleStartClick}>지금 바로 시작하기</Button>
        </Content>
        <Backgroundtext>Retfolio</Backgroundtext>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  user-select: none;
  transition: opacity 1s ease, transform 1s ease;
  opacity: ${({ isTransitioning }) => (isTransitioning ? 0 : 1)};
  transform: ${({ isTransitioning }) =>
    isTransitioning ? "scale(0.95)" : "scale(1)"};
`;

const Content = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const TitleContainer = styled.div`
  text-align: center;
  height: 50%;
  padding: 0; /* 추가 패딩 제거 */
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  margin: 0; /* 상하 여백 제거 */
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
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
`;
