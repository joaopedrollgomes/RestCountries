import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DetailsContainer,
  FlagImage,
  InfoText,
  BackButton,
} from "./CountryDetailsStyles";

function CountryDetails({ countries }) {
  const { cca3 } = useParams(); //parâmetro 'cca3' da URL do país
  const country = countries.find((c) => c.cca3 === cca3);
  const navigate = useNavigate();

  if (!country) {
    return <p>País não encontrado!</p>;
  }

  return (
    <DetailsContainer>
      <FlagImage src={country.flags.png} alt={`Bandeira de ${country.name.official}`} />
      <h1>{country.name.official}</h1>
      <InfoText>Capital: {country.capital}</InfoText>
      <InfoText>Região: {country.region}</InfoText>
      <InfoText>Sub-região: {country.subregion || "N/A"}</InfoText>
      <InfoText>População: {country.population.toLocaleString()}</InfoText>
      <InfoText>Área: {country.area.toLocaleString()} km²</InfoText>
      <InfoText>Idiomas: {Object.values(country.languages || {}).join(", ")}</InfoText>
      <InfoText>Moeda: {Object.values(country.currencies || {}).map(currency => currency.name).join(", ")}</InfoText>
      <InfoText>Fuso horário: {country.timezones.join(", ")}</InfoText>
      <InfoText>Domínio de internet: {country.tld.join(", ")}</InfoText>
      <InfoText>Código de discagem: +{country.idd.root}{country.idd.suffixes.join(", ")}</InfoText>

      {/* Botão para voltar à página inicial */}
      <BackButton onClick={() => navigate("/")}>Voltar</BackButton>
    </DetailsContainer>
  );
}

export default CountryDetails;