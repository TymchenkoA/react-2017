import reducer from './reducer';
import { MOVIES_BY_GENRE } from './actions';

describe('Movies reducer', () => {
    it('should update movies', () => {
        const movies = [
            {id: 'some_test_id'}
        ];
        const action = {
            type: MOVIES_BY_GENRE,
            payload: movies
        };
        const updatedStore = reducer({}, action);

        expect(updatedStore).toEqual(movies);
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
