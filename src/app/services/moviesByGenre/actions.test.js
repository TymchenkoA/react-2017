import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { findMoviesByGenre, MOVIES_BY_GENRE } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Get Movies By Genre', () => {
    it('should send a request and dispatch an action with movies genre data', done => {
        const mockResponse = {
            results: [{ id: 'some_id'}]
        };
        const store = mockStore({});
        const expectedActions = [{
            type: MOVIES_BY_GENRE,
            payload: mockResponse.results
        }];
        const genre = 16;

        fetchMock.getOnce(`https://api.themoviedb.org/3/discover/movie?api_key=91135b831e8672e2d1ac915b92fe4d2e&with_genres=${genre}`, {
            body: mockResponse,
            headers: { 'content-type': 'application/json' }
        });

        function callback () {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        }
        store.dispatch(findMoviesByGenre(genre)).then(callback);
    });

});
