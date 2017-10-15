import { UPDATE_MOVIES_DATA } from './actions';

export default function (state = {}, action) {
    switch (action.type) {
        case UPDATE_MOVIES_DATA: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
