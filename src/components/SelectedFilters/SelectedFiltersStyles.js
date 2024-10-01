import styled from 'styled-components';

// Contêiner para todos os botões de filtro adicionados
export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

// Estilo para os botões
export const FilterButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: #20b2aa; /* Altera para um tom mais claro ao passar o mouse */
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #00cec9;
  }
`;