import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import configureStore from './store';

const store = configureStore(window.PRELOADED_STATE);

delete window.PRELOADED_STATE;

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App  />
        </Router>
    </Provider>
    ), document.getElementById('root'));
