import styled from "styled-components";

// Contêiner principal da página de detalhes
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #1a1a1d;
  color: #e0e0e0;
  border-radius: 10px;
`;

// Imagem da bandeira
export const FlagImage = styled.img`
  width: 250px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

// Texto com os detalhes
export const InfoText = styled.p`
  font-size: 18px;
  margin: 5px 0;
  color: #b0bec5;
`;

// Botão de voltar
export const BackButton = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  background-color: #00cec9;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #20b2aa;
  }
`;
