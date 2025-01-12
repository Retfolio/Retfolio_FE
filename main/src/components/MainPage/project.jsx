import React, { useState } from "react";
import styled from "styled-components";


export const Project = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const cards = new Array(12).fill({
    logo: "https://via.placeholder.com/50",
    title: "Retfolio",
    subtitle: "웹사이트 포트폴리오 제작 서비스 ",
    rating: "⭐⭐⭐⭐⭐"
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
    <Container>
        <GridContainer>
          {cards.map((card, index) => (
            <Card key={index}>
              <ImgContainer>
                <LogoImg
                  src={imageSrc || "https://via.placeholder.com/150"}
                  alt="Logo"
                  onClick={triggerFileSelect}
                  />
                <HiddenInput
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  />
              </ImgContainer>
              <CardContainer>
                <Title>{card.title}</Title>
                <Subtitle>{card.subtitle}</Subtitle>
                <Button>자세히 보기</Button>
              </CardContainer>
              
            </Card>
          ))}
        </GridContainer>
      </Container>
    </>
  );
};


const Container = styled.div`
  margin-top: 20px;
  width: 88%;
  margin: auto;
  font-family: "pretendard";
`

const GridContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 40px 70px; /* 행 간격: 30px, 열 간격: 50px */
  padding: 20px;
  background-color: #000;
`;


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  float: left;
`

const Card = styled.div`
  width: 100%; /* 내부 내용 크기에 맞게 조정 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 900;
  margin: 0;
  font-family: "ejeonghan";
`;

const Subtitle = styled.p`
  font-size: 13.5px;
  font-weight: 700;
  margin: 5px 0px 5px 0px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoImg = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 20px;
`;

const HiddenInput = styled.input`
  display: none;
`;
