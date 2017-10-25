export const UPDATE_MOVIE_DETAILS = 'UPDATE_MOVIE_DETAILS';

export const getMovieDetails = (id) => dispatch => (
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=91135b831e8672e2d1ac915b92fe4d2e`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            dispatch({
                type: UPDATE_MOVIE_DETAILS,
                payload: result
            });

            return result;
        })
);
