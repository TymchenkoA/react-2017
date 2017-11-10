import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { getMovies, UPDATE_MOVIES_DATA } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Get Movies Data', () => {
    it('should send a request and dispatch an action with movies data', done => {
        const mockResponse = {
            results: [{ id: 1 }, {id: 2}]
        };
        const store = mockStore({});
        const expectedActions = [{
            type: UPDATE_MOVIES_DATA,
            payload: mockResponse.results
        }];
        const query = 'some';

        fetchMock.getOnce(`https://api.themoviedb.org/3/search/movie?api_key=91135b831e8672e2d1ac915b92fe4d2e&query=${query}`, {
            body: mockResponse,
            headers: { 'content-type': 'application/json' }
        });

        function callback () {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        }
        store.dispatch(getMovies(query)).then(callback);
    });
});
