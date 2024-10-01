import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa'; // Library para ícones utilizados nesse projeto
import { fetchCountries } from '../../services/countryCallApi';
import {
  FilterContainer,
  FilterIconWrapper,
  FilterOptions,
  FilterOptionButton,
  Submenu,
  SubmenuOption,
  FilterLabel
} from './FilterMenuStyles';

function FilterMenu({ setSelectedSubregion, setSelectedRegion, setPopulationRange }) {
  const [isSubregionOpen, setIsSubregionOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isPopulationOpen, setIsPopulationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Para controlar o comportamento do filtro

  const [subregions, setSubregions] = useState([]);
  const [regions, setRegions] = useState([]);

  // Buscar sub-regiões e regiões da API
  useEffect(() => {
    const fetchRegionsAndSubregions = async () => {
      const data = await fetchCountries();
      
      // Sub-regiões únicas
      const uniqueSubregions = [...new Set(data.map((country) => country.subregion).filter(Boolean))];
      setSubregions(uniqueSubregions);
      
      // Regiões únicas
      const uniqueRegions = [...new Set(data.map((country) => country.region).filter(Boolean))];
      setRegions(uniqueRegions);
    };
    fetchRegionsAndSubregions();
  }, []);

  // Funções para selecionar filtros
  const handleSubregionSelect = (subregion) => {
    setSelectedSubregion(subregion); // Passa a sub-região para o App.js
    setIsSubregionOpen(false); // Fecha o submenu
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region); // Passa a região para o App.js
    setIsRegionOpen(false); // Fecha o submenu
  };

  const handlePopulationSelect = (range) => {
    setPopulationRange(range); // Passa a faixa de população para o App.js
    setIsPopulationOpen(false); // Fecha o submenu
  };

  // Controla a abertura e recolhimento do menu ao passar o mouse 
  const handleMouseEnter = () => setIsMenuOpen(true);
  const handleMouseLeave = () => setIsMenuOpen(false);

  // Função para garantir que um submenu seja aberto por vez
  const handleFilterClick = (filter) => {
    setIsSubregionOpen(filter === 'subregion' ? !isSubregionOpen : false);
    setIsRegionOpen(filter === 'region' ? !isRegionOpen : false);
    setIsPopulationOpen(filter === 'population' ? !isPopulationOpen : false);
  };

  return (
    <FilterContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <FilterIconWrapper>
        <FilterLabel>Filtros</FilterLabel>
        <FaFilter />
      </FilterIconWrapper>
      {isMenuOpen && (
        <FilterOptions>
          <li>
            <FilterOptionButton onClick={() => handleFilterClick('subregion')}>
              Filtrar por Sub-região
            </FilterOptionButton>
            {isSubregionOpen && (
              <Submenu>
                {subregions.map((subregion) => (
                  <SubmenuOption key={subregion} onClick={() => handleSubregionSelect(subregion)}>
                    {subregion}
                  </SubmenuOption>
                ))}
              </Submenu>
            )}
          </li>
          <li>
            <FilterOptionButton onClick={() => handleFilterClick('region')}>
              Filtrar por Região
            </FilterOptionButton>
            {isRegionOpen && (
              <Submenu>
                {regions.map((region) => (
                  <SubmenuOption key={region} onClick={() => handleRegionSelect(region)}>
                    {region}
                  </SubmenuOption>
                ))}
              </Submenu>
            )}
          </li>
          <li>
            <FilterOptionButton onClick={() => handleFilterClick('population')}>
              Filtrar por População
            </FilterOptionButton>
            {isPopulationOpen && (
              <Submenu>
                <SubmenuOption onClick={() => handlePopulationSelect('menor1M')}>
                  População menor que 1 milhão
                </SubmenuOption>
                <SubmenuOption onClick={() => handlePopulationSelect('1M-10M')}>
                  População entre 1 milhão e 10 milhões
                </SubmenuOption>
                <SubmenuOption onClick={() => handlePopulationSelect('10M-100M')}>
                  População entre 10 milhões e 100 milhões
                </SubmenuOption>
                <SubmenuOption onClick={() => handlePopulationSelect('maior100M')}>
                  População maior que 100 milhões
                </SubmenuOption>
              </Submenu>
            )}
          </li>
        </FilterOptions>
      )}
    </FilterContainer>
  );
}

export default FilterMenu;