import { createSlice } from "@reduxjs/toolkit";

const FavMovieSlice = createSlice({
    name: "favMovie",
    initialState: {
      favMovie: [],
    },
    reducers: {
      addMovie: (state, action) => {
        state.favMovie.push(action.payload);
      },
      deleteMovie: (state, action) => {
        state.favMovie = state.favMovie.filter((movie) => movie.imdbID !== action.payload);
      },
    },
  });
  
  export const { addMovie, deleteMovie } = FavMovieSlice.actions;
  export const FavMovieReducer = FavMovieSlice.reducer;
  