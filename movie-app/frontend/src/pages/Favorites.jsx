import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { MovieCard } from "../components/MoviesCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h1>Your Favorite Movies ❤️</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
