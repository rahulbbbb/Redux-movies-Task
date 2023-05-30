import React from 'react';
import { useSelector } from 'react-redux';

function Favourites() {
    const favMovieState = useSelector((state)=>state.favMovie);
  return (
    <div>Favourites
        {
            favMovieState.favMovie.map((Movies)=> <div>{Movies.Title}</div>)
        }
    </div>
  )
}

export default Favourites;