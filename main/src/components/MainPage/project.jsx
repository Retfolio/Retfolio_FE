import React, { useState , useEffect } from "react";
import styled from "styled-components";



export const Project = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  useEffect(() => {
    const stored = localStorage.getItem("cards");
    if (stored) {
      setCards(JSON.parse(stored));
    }
  }, []);

  const [cards, setCards] = useState([

  ]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);
  

  const [savedName, setSavedName] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newCard, setNewCard] = useState({
    title: "",
    subtitle: "",
    tags: "",
    quote: "",
    logo: null
  });

  const handleImageUpload = (file) => {
    if (!file) return;
    const name = file.name.split(".")[0];
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result;
      const blob = new Blob([arrayBuffer], { type: file.type });

      fetch(`http://localhost:8090/upload?name=${encodeURIComponent(name)}`, {
        method: "POST",
        body: blob
      })
        .then((response) => response.text())
        .then((savedName) => {
          const imageUrl = `http://localhost:8090/image?name=${encodeURIComponent(savedName)}`;
          setNewCard((prev) => ({ ...prev, logo: imageUrl }));
          setSavedName(savedName);
        });
    };

    reader.readAsArrayBuffer(file);
  };

  const handleModalSubmit = () => {
    const tagList = newCard.tags.split(",").map((tag) => tag.trim());
    const quote = newCard.quote || "한줄요약이 없습니다.";
    const cardToAdd = {
      title: newCard.title,
      subtitle: newCard.subtitle,
      tags: tagList,
      logo: newCard.logo || "https://via.placeholder.com/150",
      rating: "⭐⭐⭐⭐⭐",
      quote: quote,
    };
    setCards((prev) => [cardToAdd, ...prev]);
    setIsModalOpen(false);
    setNewCard({ title: "", subtitle: "", tags: "", logo: null , quote: "" });
  };

  return (
    <Container>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <Input
              placeholder="제목"
              value={newCard.title}
              onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
            />
            <Input
              placeholder="부제목"
              value={newCard.subtitle}
              onChange={(e) => setNewCard({ ...newCard, subtitle: e.target.value })}
            />
            <Input
              placeholder="태그 (쉼표로 구분)"
              value={newCard.tags}
              onChange={(e) => setNewCard({ ...newCard, tags: e.target.value })}
            />
            <Input
              placeholder="한줄요약"
              value={newCard.quote}
              onChange={(e) => setNewCard({ ...newCard, quote: e.target.value })}
            />
            <FileInput
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
            />
            <SubmitButton onClick={handleModalSubmit}>추가</SubmitButton>
          </ModalContent>
        </ModalOverlay>
      )}

{/* 변경된 부분 */}
<DropdownContainer>
  <DropdownToggle onClick={() => setIsDropdownOpen((prev) => !prev)}>
    작업 메뉴 {isDropdownOpen ? "▲" : "▼"}
  </DropdownToggle>

  <DropdownMenu className={isDropdownOpen ? "open" : ""}>
    <DropdownButton onClick={() => setCards([])}>초기화</DropdownButton>
    <DropdownButton onClick={() => setCards((prev) => prev.slice(0, -1))}>삭제하기</DropdownButton>
    <DropdownButton onClick={() => setIsModalOpen(true)}>생성하기</DropdownButton>
  </DropdownMenu>
</DropdownContainer>




      <GridContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <LogoContainer>
              <LogoImg src={card.logo} alt="Logo" />
            </LogoContainer>
            <ContentContainer>
              <Title>{card.title}</Title>
              <Subtitle>{card.subtitle}</Subtitle>
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

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
  padding: 0px 110px 0px 0px;
  margin-right: 20px;
  box-sizing: border-box;
`;


const DropdownToggle = styled.button`
  display: flex;
  background-color: #fff;
  color: #000;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

const DropdownMenu = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  transition: max-height 1.5s ease, opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  &.open {
    max-height: 500px;
    opacity: 1;
    pointer-events: auto;
  }
`;


const DropdownButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  width: 118px;
  transition: background-color 0.5s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #000;
  }

  &:active {
    transform: scale(0.97);
  }
`;



const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 90%;
  margin: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 320px;
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
  object-fit: cover;
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

const TagContainer = styled.div`
  display: flex;
  gap: 2px;
  margin: 5px 0;
`;

const Tag = styled.div`
  padding: 5px 5px;
  background-color: #000;
  color: #fff;
  font-size: 10px;
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

const SavedNameText = styled.div`
  font-size: 10px;
  color: #666;
  margin-top: 5px;
`;

const ModalOverlay = styled.div`
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;


const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const FileInput = styled.input`
  font-size: 14px;
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
