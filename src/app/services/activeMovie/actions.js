export const SET_ACTIVE_MOVIE_ID = 'SET_ACTIVE_MOVIE_ID';
export const UPDATE_MOVIE_DETAILS = 'UPDATE_MOVIE_DETAILS';

export const setActiveMovieId = (id) => {
    return {
        type: 'SET_ACTIVE_MOVIE_ID',
        payload: id
    };
};

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
