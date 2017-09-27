import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import SearchPage from './scenes/search/index.jsx';
import FilmPage from './scenes/film/index.jsx';

import './index.less';

export default class App extends Component {
  render() {

    return (
      <div className="netflix-app">
        <Switch>
            <Route path="/" exact component={SearchPage}/>
            <Route path="/search/:type/:query" component={SearchPage}/>
            <Route path="/film/:query" component={FilmPage}/>
            <Redirect to="/" />
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
