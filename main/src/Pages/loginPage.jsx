import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "../header";
import github from "../assets/githublogo.svg";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/See'); // 페이지 이동
      setIsLoading(false);
    }, 1000); // 로딩 시뮬레이션 (1초)
  };

  return (
    <>
      <Header />
      <PageContainer>
        <LoginContainer>
          <Title>로그인</Title>
          <Subtitle>
            깃허브로 <Highlight>시작하기</Highlight>
          </Subtitle>
          <LoginButton disabled={isLoading} onClick={handleLogin}>
            <GithubIcon src={github} />
            {isLoading ? "로그인 중..." : "github로 로그인"}
          </LoginButton>
        </LoginContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  user-select: none;

  /* 초기 상태 설정 */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1.2s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border: 2px solid rgb(252, 236, 236);
  border-radius: 12px;
  background-color: #1f1f1f; /* 컨테이너 배경 색상 */
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #aaa;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Highlight = styled.span`
  color: #ffca28; /* 노란색 강조 */
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 240px;
  height: 40px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#fff" : "#e0e0e0")};
  }
`;

const GithubIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;
