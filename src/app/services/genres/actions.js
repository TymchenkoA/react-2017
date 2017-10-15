export const UPDATE_GENRES = 'UPDATE_GENRES';

export const getGenres = () => dispatch => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=91135b831e8672e2d1ac915b92fe4d2e`)
        .then(response => {
            return response.json();
        })
        .then(result => {
            dispatch({
                type: UPDATE_GENRES,
                payload: result.genres
            })
        })
};