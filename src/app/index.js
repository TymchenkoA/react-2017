import React, { Component } from 'react';
import { MovieItem } from './components/MovieItem/index.jsx';
import { MovieBanner } from './components/MovieBanner/index.jsx';
import SearchBox from './components/SearchBox/index.jsx';
import SearchResults from './components/SearchResults/index.jsx';

import './index.less';
import img1 from './img/movie1.jpg';
import img2 from './img/movie2.jpg';
import img3 from './img/movie3.jpg';
import img4 from './img/movie4.jpg';
import img5 from './img/movie5.jpg';

export default class App extends Component {
  render() {
    const movies = [{
        title: 'A Dog Purpose',
        release: '2003',
        genre: 'Comedies',
        url: img1
    },{
        title: 'A Dog Purpose',
        release: '1989',
        genre: 'Comedies',
        url: img2
    },{
        title: 'A Dog Purpose',
        release: '2016',
        genre: 'Comedies',
        url: img3
    },{
        title: 'A Dog Purpose',
        release: '2000',
        genre: 'Comedies',
        url: img4
    },{
        title: 'A Dog Purpose',
        release: '1999',
        genre: 'Comedies',
        url: img5
    }];

    return (
      <div className="netflix-app">
        <header className="header">
            <div className="header-background">
                <div className="logo-wrapper container">
                    <span className="logo">netflixroulette</span>
                    <button type="button" className="header__back-button">Search</button>
                </div>
                <MovieBanner
                    title="A Dog's Purpose"
                    release={2003}
                    genre="Comedies"
                    rating="4.1"
                    director="Quentin Tarantino"
                    duration={154}
                    url={img1}
                />
                <SearchBox />
            </div>
            <div className="search-results-wrapper">
                <SearchResults />
            </div>
        </header>
        <section className="content-wrapper container">
            <div className="content">
                {movies.map((item, index) => (
                    <MovieItem
                        data={item}
                        key={index}
                    />
                ))}
            </div>
        </section>
        <footer className="footer">
            <div className="container">
                <span className="logo">netflixroulette</span>
            </div>
        </footer>
      </div>
    );
  }
}
