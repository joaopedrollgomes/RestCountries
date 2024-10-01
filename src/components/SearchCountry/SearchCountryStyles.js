import styled from "styled-components";

// Contêiner barra de pesquisa
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
`;

// Campo de entrada da barra
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-left: 40px;
  border: 1px solid #00cec9;
  border-radius: 5px;
  background-color: #333;
  color: #e0e0e0;
  font-size: 16px;

  &::placeholder {
    color: #7f8c8d;
  }
`;

// Estilo do ícone de pesquisa
export const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  color: #00cec9;
  font-size: 18px;
`;
