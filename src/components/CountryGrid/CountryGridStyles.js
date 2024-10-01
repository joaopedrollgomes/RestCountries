import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container em grid para os países
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background-color: #1a1a1d;
  padding: 20px;
  border-radius: 10px;
`;

// Itens do GridContainer (cada país)
export const GridItem = styled.div`
  background-color: #333;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  transition: transform 0.2s ease, background-color 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-5px);
    background-color: #444;
  }
`;

// Estilização da bandeira
export const FlagImage = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
`;

// Estilização do link
export const CountryLink = styled(Link)`
  text-decoration: none;
  color: #00cec9;

  &:hover {
    color: #3ec8c1;
  }

  h2 {
    font-size: 18px;
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
  }
`;