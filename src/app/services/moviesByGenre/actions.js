export const MOVIES_BY_GENRE = 'MOVIES_BY_GENRE';

export const findMoviesByGenre = (genre) => dispatch => (
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=91135b831e8672e2d1ac915b92fe4d2e&with_genres=${genre}`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            dispatch({
                type: MOVIES_BY_GENRE,
                payload: result.results
            })
        })
);
