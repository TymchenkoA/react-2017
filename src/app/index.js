import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import 'isomorphic-fetch';
import routes from './routes';

import './index.less';

export default class App extends Component {

  render() {

    return (
      <div className="netflix-app">
        <Switch>
            {renderRoutes(routes)}
        </Switch>
        <footer className="footer">
            <div className="container">
                <span className="logo">netflixroulette</span>
            </div>
        </footer>
      </div>
    );
  }
}
