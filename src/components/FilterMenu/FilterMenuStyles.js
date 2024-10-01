import styled from 'styled-components';

// Contêiner principal para o filtro
export const FilterContainer = styled.div`
  position: relative;
  display: inline-block;
`;
// Icone do filtro
export const FilterIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #f1f1f1;
`;

// Rótulo do filtro
export const FilterLabel = styled.span`
  margin-right: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #00cec9;
`;

// Lista de opções do filtro
export const FilterOptions = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #2f3640;
  border: 1px solid #00cec9;
  position: absolute;
  top: 18px;
  right: 0;
  width: 200px;
  z-index: 1000;
  border-radius: 5px;
`;

// Botão de opção do filtro
export const FilterOptionButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: #dcdde1;

  &:hover {
    background-color: #34495e;
  }
`;

// Submenu de opções
export const Submenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  left: 100%;
  top: 0;
  color: #dcdde1;
  background-color: #2f3640;
  border: 1px solid #00cec9;
  width: 200px;
`;

// Opção do submenu
export const SubmenuOption = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #34495e;
  }
`;