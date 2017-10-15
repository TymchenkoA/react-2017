import { SET_ACTIVE_MOVIE_ID } from './actions';
import { UPDATE_MOVIE_DETAILS } from './actions';

export default function (state = {}, action) {
    switch (action.type) {
        case SET_ACTIVE_MOVIE_ID:
            return Object.assign({}, state, {
                id: action.payload
            });
        case UPDATE_MOVIE_DETAILS:
            return Object.assign({}, state, {
                details: action.payload
            });
        default: {
            return state;
        }
    }
}