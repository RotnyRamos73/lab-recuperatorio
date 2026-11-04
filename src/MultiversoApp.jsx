import { useState } from "react";
import { usePersonajes } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

function MultiversoApp() {
  const { personajes, cargando, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]);

  function toggleFavorito(personaje) {
    setFavoritos((prev) =>
      prev.some((f) => f.id === personaje.id)
        ? prev.filter((f) => f.id !== personaje.id)
        : [...prev, personaje]
    );
  }

  function quitarFavorito(id) {
    setFavoritos((prev) => prev.filter((f) => f.id !== id));
  }

  return (
    <div>
      <h1>Multiverso Rick and Morty</h1>

      <div className="layout">
        {cargando && <p className="mensaje">Cargando...</p>}

        {error && <p className="mensaje error">{error}</p>}

        {!cargando && !error && (
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />
        )}

        <FavoritesPanel favoritos={favoritos} onQuitar={quitarFavorito} />
      </div>
    </div>
  );
}

export default MultiversoApp;