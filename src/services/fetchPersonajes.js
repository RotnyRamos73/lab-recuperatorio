const API_URL = "https://rickandmortyapi.com/api/character";

export async function fetchPersonajes() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Error ${response.status}: no se pudo obtener los personajes`);
  }

  const data = await response.json();
  return data.results; // arreglo con los primeros 20 personajes
}