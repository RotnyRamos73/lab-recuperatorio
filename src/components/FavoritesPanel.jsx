function FavoritesPanel({ favoritos, onQuitar }) {
  return (
    <aside className="favoritos">
      <h3>Favoritos ({favoritos.length})</h3>

      {favoritos.length === 0 ? (
        <p>Aún no has marcado favoritos.</p>
      ) : (
        <ul>
          {favoritos.map((fav) => (
            <li key={fav.id}>
              <img src={fav.image} alt={fav.name} />
              <span>{fav.name}</span>
              <button onClick={() => onQuitar(fav.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default FavoritesPanel;