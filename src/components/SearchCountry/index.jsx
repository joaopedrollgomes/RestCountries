import React from 'react';
import { SearchInput, SearchContainer, SearchIcon } from './SearchCountryStyles';
import { FaSearch } from 'react-icons/fa';

function SearchCountry({ value, onChange }) {
  return (
    <SearchContainer>
       <SearchIcon>
        <FaSearch />
      </SearchIcon>
      <SearchInput type="text" placeholder="Pesquisar países..." value={value} onChange={onChange} />
    </SearchContainer>
  );
}

export default SearchCountry;