import { MOVIES_BY_GENRE } from './actions';

export default function (state = {}, action) {
    switch (action.type) {
        case MOVIES_BY_GENRE: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}