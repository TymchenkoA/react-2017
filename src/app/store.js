import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

    return store;
};