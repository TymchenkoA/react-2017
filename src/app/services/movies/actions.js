export const UPDATE_MOVIES_DATA = 'UPDATE_MOVIES_DATA';

export const getMovies = (query) => dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=91135b831e8672e2d1ac915b92fe4d2e&query=${query}`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            dispatch({
                type: UPDATE_MOVIES_DATA,
                payload: result.results
            })
        })
};