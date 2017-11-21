import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {matchRoutes} from 'react-router-config';

import routes from './app/routes';
import configureStore from './app/store';
import App from './app';

function renderFullPage (html, preloadedState) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <link rel="stylesheet" href="/assets/bundle.css" />
      </head>
      
      <body>
        <div id="root">${html}</div>
        <script>
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\4003c')}
        </script>
      </body>
      
      <script src="/assets/bundle.js"></script>
    </html>
  `;
}

function handlerRender (req, res) {
    const store = configureStore();

    const branch = matchRoutes(routes, req.url);
    const promises = branch.map(({ route, match }) => {
        const { fetchData } = route.component;

        if(!(fetchData instanceof Function)) {
            return Promise.resolve(null);
        }

        return fetchData(store.dispatch, match);
    });
    return Promise.all(promises)
        .then(() => {
            const context ={};
            const app = (
                <Provider store={store}>
                    <StaticRouter location ={req.url} context={context}>
                        <App  />
                    </StaticRouter>
                </Provider>
            );

            const html = renderToString(app);

            if(context.url) {
                return res.redirect(context.url);
            }

            const preloadedState = store.getState();
            res.send(renderFullPage(html, preloadedState));
        });
}

export default handlerRender;