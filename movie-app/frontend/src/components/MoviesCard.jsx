import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export function MovieCard({ movie }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  function onFavoriteClick() {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <button 
          onClick={onFavoriteClick} 
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
        >
          ♥
        </button>
      </div>

      <div className="content">
        <h3>{movie.title}</h3>
        <p>Released: {movie.release_date}</p>
      </div>
    </div>
  );
}
