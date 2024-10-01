
// requisição -> API "https://restcountries.com/v3.1/all" 
export async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Erro na chamada da API");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na chamada da API:", error);
    throw error;
  }
}
