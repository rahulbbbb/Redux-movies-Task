import React, { useEffect } from "react";
import { setLoading, getAllMovies } from "./MovieSlice";
import { addMovie } from "./FavMovieSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Movies.module.css";

function Movies () {
    const moviesState = useSelector((state)=> state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setLoading(!moviesState.loading));
        dispatch(getAllMovies());
    },[])
    
    function handleFavs(key) {
        console.log("added", key)
        dispatch(addMovie(key))
    }

    return(
        <div>
            <h2>All movies</h2>
            <div className={styles.movieContainer} >
            {
                moviesState.movies.map((movies)=>{
                    return (                    
                    <div className={styles.movieCard} key={movies.imdbID}> 
                    <img className={styles.image} src={movies.Poster} alt="poster"/>
                    <h3 className={styles.name}>{movies.Title}</h3>
                    <span>({movies.Year})</span>
                    <br></br>
                    <button onClick={()=>handleFavs(movies)} className={styles.button}>Add to fav</button>
                    </div>
                    )
                    }
                )
            }
            </div>
        </div>

    )
}

export default Movies;