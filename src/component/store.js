import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from './MovieSlice';
import { FavMovieReducer } from './FavMovieSlice';

const store= configureStore({
    reducer:{
        movies : movieReducer,
        favMovie : FavMovieReducer
    }
})

export default store;