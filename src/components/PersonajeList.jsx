import PersonajeCard from "./PersonajeCard";

function PersonajeList({ personajes, favoritos, onToggleFavorito }) {
  return (
    <div className="grid">
      {personajes.map((personaje) => (
        <PersonajeCard
          key={personaje.id}
          personaje={personaje}
          esFavorito={favoritos.some((fav) => fav.id === personaje.id)}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </div>
  );
}

export default PersonajeList;