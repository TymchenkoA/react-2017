import reducer from './reducer';
import { UPDATE_MOVIES_DATA } from './actions';

describe('Movies reducer', () => {
    it('should update movies data', () => {
        const moviesData = [
            {id: 1},
            {id: 2}
        ];
        const action = {
            type: UPDATE_MOVIES_DATA,
            payload: moviesData
        };
        const updatedStore = reducer({}, action);

        expect(updatedStore).toEqual(moviesData);
    });

    it('should return previous version of state for unknown action', () => {
        const state = {
            id: 'some_id'
        };
        const action = {
            type: 'some_type'
        };
        const updatedStore = reducer(state, action);

        expect(state).toEqual(updatedStore);
    });
});
