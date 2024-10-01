import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryGrid from "./components/CountryGrid/index";
import SearchCountry from "./components/SearchCountry/index";
import FilterMenu from "./components/FilterMenu";
import SelectedFilters from "./components/SelectedFilters";
import SortMenu from "./components/SortMenu";
import { fetchCountries } from "./services/countryCallApi";
import {
  HeaderContainer,
  SearchFilterWrapper,
  GlobalStyle,
} from "./styles/AppStyles";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // States para filtros e busca
  const [searchBase, setSearchBase] = useState("");
  const [showCountry, setShowCountry] = useState([]);
  const [countryNotFoundMessage, setCountryNotFoundMessage] = useState("");

  // Filtros
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [populationRange, setPopulationRange] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);

  // Ordenação
  const [sortCriteria, setSortCriteria] = useState("");

  // Função para buscar os países na API
  useEffect(() => {
    const getCountries = async () => {
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
        setShowCountry(countriesData);
        setLoading(false);
      } catch (error) {
        setError("Erro ao carregar os países.");
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  // Filtragem de países com base em sub-região, região e população
  useEffect(() => {
    let filtered = [...countries]; // Cria uma cópia do array de países para não modificar o original

    // Filtro por nome de país (barra de pesquisa)
    if (searchBase) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchBase.toLowerCase())
      );
    }

    // Filtro por sub-região
    if (selectedSubregion) {
      filtered = filtered.filter(
        (country) => country.subregion === selectedSubregion
      );
    }

    // Filtro por região
    if (selectedRegion) {
      filtered = filtered.filter(
        (country) => country.region === selectedRegion
      );
    }

    // Filtro por população
    if (populationRange) {
      filtered = filtered.filter((country) => {
        const population = country.population;
        if (populationRange === "menor1M") return population < 1000000;
        if (populationRange === "1M-10M")
          return population >= 1000000 && population <= 10000000;
        if (populationRange === "10M-100M")
          return population >= 10000000 && population <= 100000000;
        if (populationRange === "maior100M") return population > 100000000;
        return true;
      });
    }

    //ordenação
    if (sortCriteria === "name-asc") {
      filtered = filtered.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      ); // Ordenar por nome de A a Z
    } else if (sortCriteria === "name-desc") {
      filtered = filtered.sort((a, b) =>
        b.name.common.localeCompare(a.name.common)
      ); // Ordenar por nome de Z a A
    } else if (sortCriteria === "population-asc") {
      filtered = filtered.sort((a, b) => a.population - b.population); // Ordenar por população do menor para o maior
    } else if (sortCriteria === "population-desc") {
      filtered = filtered.sort((a, b) => b.population - a.population); // Ordenar por população do maior para o menor
    } else if (sortCriteria === "area-asc") {
      filtered = filtered.sort((a, b) => a.area - b.area); // Ordenar por área do menor para o maior
    } else if (sortCriteria === "area-desc") {
      filtered = filtered.sort((a, b) => b.area - a.area); // Ordenar por área do maior para o menor
    }

    // Verifica se nenhum país foi encontrado
    if (filtered.length === 0) {
      setCountryNotFoundMessage("Ops! País não encontrado...");
    } else {
      setCountryNotFoundMessage("");
    }

    setShowCountry(filtered);
  }, [
    searchBase,
    selectedSubregion,
    selectedRegion,
    populationRange,
    sortCriteria,
    countries,
  ]);

  //Mensagem enquanto carrega os países
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Função que lida com a mudança no input de pesquisa
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchBase(value);
  };

  // Funções para remover filtros
  const removeFilter = (filter) => {
    if (filter === selectedSubregion) {
      setSelectedSubregion("");
    } else if (filter === selectedRegion) {
      setSelectedRegion("");
    } else if (filter === populationRange) {
      setPopulationRange("");
    }

    // Remove o filtro dos ativos
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  return (
    <>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Que país é esse ?</h1>
                <HeaderContainer>
                  <SearchFilterWrapper>
                    <SearchCountry value={searchBase} onChange={handleSearch} />{/* Adiciona a barra de pesquisa */}
                    <FilterMenu
                      setSelectedSubregion={setSelectedSubregion}
                      setSelectedRegion={setSelectedRegion}
                      setPopulationRange={setPopulationRange}
                      activeFilters={activeFilters}
                      setActiveFilters={setActiveFilters}
                    /> {/* Adiciona o Filtro */}
                    <SortMenu setSortCriteria={setSortCriteria} />{" "}
                    {/* Adiciona a ordenação */}
                  </SearchFilterWrapper>
                </HeaderContainer>
                {countryNotFoundMessage && <p>{countryNotFoundMessage}</p>} {/*Mensagem "Páis não encontrado" */}
                <SelectedFilters
                  selectedFilters={[
                    selectedSubregion,
                    selectedRegion,
                    populationRange,
                  ].filter(Boolean)}
                  onRemoveFilter={removeFilter}
                />{/* Filtro que foram add */}
                <CountryGrid countries={showCountry} />{/* Lista de paises */}
              </>
            }
          />
          <Route
            path="/country/:cca3"
            element={<CountryDetails countries={countries} />}
          />{/* Pagina de detalhes */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
