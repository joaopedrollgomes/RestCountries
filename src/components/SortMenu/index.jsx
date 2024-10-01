import React, { useState } from 'react';
import { FaSort } from 'react-icons/fa';
import {
  SortContainer,
  SortIconWrapper,
  SortLabel,
  SortOptions,
  SortOptionButton,
  Submenu,
  SubmenuOption
} from './SortMenuStyles';

const SortMenu = ({ setSortCriteria }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Função para alternar o submenu ativo
  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  // Função para aplicar a ordenação
  const handleSort = (criteria) => {
    setSortCriteria(criteria);
    setShowSortOptions(false);
  };

  return (
    <SortContainer
      onMouseEnter={() => setShowSortOptions(true)}
      onMouseLeave={() => setShowSortOptions(false)}
    >
      <SortIconWrapper>
        <FaSort />
        <SortLabel>Ordenar</SortLabel>
      </SortIconWrapper>

      {showSortOptions && (
        <SortOptions>
          <li>
            <SortOptionButton onClick={() => toggleSubmenu('name')}>
              Nome
            </SortOptionButton>
            {activeSubmenu === 'name' && (
              <Submenu>
                <SubmenuOption onClick={() => handleSort('name-asc')}>
                  A-Z
                </SubmenuOption>
                <SubmenuOption onClick={() => handleSort('name-desc')}>
                  Z-A
                </SubmenuOption>
              </Submenu>
            )}
          </li>
          <li>
            <SortOptionButton onClick={() => toggleSubmenu('population')}>
              População
            </SortOptionButton>
            {activeSubmenu === 'population' && (
              <Submenu>
                <SubmenuOption onClick={() => handleSort('population-asc')}>
                  Menor para maior
                </SubmenuOption>
                <SubmenuOption onClick={() => handleSort('population-desc')}>
                  Maior para menor
                </SubmenuOption>
              </Submenu>
            )}
          </li>
          <li>
            <SortOptionButton onClick={() => toggleSubmenu('area')}>
              Área
            </SortOptionButton>
            {activeSubmenu === 'area' && (
              <Submenu>
                <SubmenuOption onClick={() => handleSort('area-asc')}>
                  Menor para maior
                </SubmenuOption>
                <SubmenuOption onClick={() => handleSort('area-desc')}>
                  Maior para menor
                </SubmenuOption>
              </Submenu>
            )}
          </li>
        </SortOptions>
      )}
    </SortContainer>
  );
};

export default SortMenu;