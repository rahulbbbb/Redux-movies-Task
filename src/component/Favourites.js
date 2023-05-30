import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Favourites.module.css';
import { deleteMovie } from './FavMovieSlice';

function Favourites() {
  const favMovieState = useSelector((state) => state.favMovie);
  const dispatch = useDispatch();

  const handleDeleteMovie = (movieId) => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <>
      <h1>Favourites</h1>
      <div className={styles.movieContainer}>
        {Array.isArray(favMovieState.favMovie) ? (
          favMovieState.favMovie.map((movie) => (
            <div className={styles.movieCard} key={movie.imdbID}>
              <img className={styles.image} src={movie.Poster} alt="poster" />
              <h3 className={styles.name}>{movie.Title}</h3>
              <span>({movie.Year})</span>
              <br />
              <button
                className={styles.button}
                onClick={() => handleDeleteMovie(movie.imdbID)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <div>No favorite movies</div>
        )}
      </div>
    </>
  );
}

export default Favourites;
