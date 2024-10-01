import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1d;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    color: #f1f1f1;
  }

  h1, p {
    display: flex;
    justify-content: center;
  }

  p {
    font-size: 64px;
    
  }

  * {
    box-sizing: border-box;
  }
`;

// Contêiner principal para o header
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #1a1a1d;
  padding: 15px;
  border-radius: 10px;
`;

// Contêiner que envolve a barra de pesquisa, filtro e ordenação
export const SearchFilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  max-width: 800px;
`;