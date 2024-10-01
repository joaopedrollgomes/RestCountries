import React from 'react';
import { FilterButton, FiltersWrapper } from './SelectedFiltersStyles';

//Exibe os filtros selecionados e permite removê-los
const SelectedFilters = ({ selectedFilters, onRemoveFilter }) => {
  return (
    <FiltersWrapper>
      {selectedFilters.map((filter) => (
        <FilterButton key={filter} onClick={() => onRemoveFilter(filter)}>
          {filter} &times;
        </FilterButton>
      ))}
    </FiltersWrapper>
  );
};

export default SelectedFilters;