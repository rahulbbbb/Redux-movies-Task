import { createSlice } from "@reduxjs/toolkit";

const FavMovieSlice = createSlice({
    name:"favMovie",
    initialState:{
        favMovie:[]
    },
    reducers:{
        addMovie: (state, action)=>{
            // state.favMovie = [...state.favMovie, action.payload];
            // console.log("stateeeeee",state);
            state.favMovie = state.favMovie.push(action.payload);
        },
        deleteMovie: (state, action)=>{
            state.favMovie=state.favMovie.filter((movies)=>movies.imdbID !== action.payload)
        }
    }
})

export const { addMovie, deleteMovie } = FavMovieSlice.actions;
export const FavMovieReducer = FavMovieSlice.reducer;