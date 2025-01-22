import React, { useState } from "react";
import styled from "styled-components";

export const Project = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const cards = new Array(12).fill({
    logo: "https://via.placeholder.com/150",
    title: "Retfolio",
    subtitle: "웹사이트 포트폴리오 제작 서비스",
    rating: "⭐⭐⭐⭐⭐",
    tags: ["개인", "팀", "도전적", "창의적"],
    quote: "모든 포트폴리오를 한눈에"
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
    <Container>
      <GridContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <LogoContainer>
              <LogoImg
                src={imageSrc || card.logo}
                alt="Logo"
                onClick={triggerFileSelect}
              />
              <HiddenInput
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </LogoContainer>
            <ContentContainer>
              <Title>{card.title}</Title>
              <Subtitle>{card.subtitle}</Subtitle>
              <Rating>
                {card.rating} <RatingCount>(258)</RatingCount>
              </Rating>
              <TagContainer>
                {card.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagContainer>
              <Quote>“ {card.quote} ”</Quote>
            </ContentContainer>
          </Card>
        ))}
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  font-family: "Pretendard", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 80%;
  margin: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  padding: 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const LogoImg = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 15px;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  color: black;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #555;
  margin: 5px 0;
`;

const Rating = styled.div`
  font-size: 8px;
  margin: 5px 0;
`;

const RatingCount = styled.span`
  font-size: 10px;
  color: #999;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 2px;
  margin: 5px 0;
`;

const Tag = styled.div`
  padding: 2px 5px;
  background-color: #000;
  color: #fff;
  font-size: 6px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Quote = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #333;
  margin-top: 10px;
`;
