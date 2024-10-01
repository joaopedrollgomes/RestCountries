import React from 'react';
import { GridContainer, GridItem, FlagImage, CountryLink } from './CountryGridStyles';

function CountryGrid({ countries }) {
  return (
    <GridContainer>
      {countries.map((country) => (
        <GridItem key={country.cca3}> {/*chave única com base no código do país*/}
          <CountryLink to={`/country/${country.cca3}`}>
            <FlagImage src={country.flags.png} alt={`Bandeira de ${country.name.common}`} />
            <h2>{country.name.common}</h2>
            <p>Região: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </CountryLink>
        </GridItem>
      ))}
    </GridContainer>
  );
}

export default CountryGrid;
