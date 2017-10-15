import { UPDATE_GENRES } from './actions';

export default function (state = [], action) {
    switch (action.type) {
        case UPDATE_GENRES: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}