import { combineReducers } from 'redux';

import movies from './services/movies/reducer.js';
import genres from './services/genres/reducer.js';
import activeMovie from './services/activeMovie/reducer.js';
import moviesByGenre from './services/moviesByGenre/reducer.js';

export default combineReducers({
    movies,
    genres,
    activeMovie,
    moviesByGenre
});