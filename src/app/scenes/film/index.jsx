import React, { Component } from 'react';
import { Movies } from '../../components/Movies/index.jsx';
import { MovieBanner } from './components/MovieBanner/index.jsx';
import movies from '../../components/Movies/movies.json';

import './index.less';

import img1 from '../../img/movie1.jpg';

export default class FilmPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.findMovies(this.props.match.params.query);
    }

    findMovies(query) {
        if (!query) {
            return;
        }

        fetch(movies)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    movies: result
                });
            })
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="film-page">
                <div className="header">
                    <div className="header-background">
                        <div className="logo-wrapper container">
                            <span className="logo">netflixroulette</span>
                            <button type="button" className="back-button" onClick={this.goBack}>Search</button>
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
                    </div>
                    <div className="search-results-wrapper">
                    </div>
                </div>
                <section className="content-wrapper container">
                    <div className="content">
                        <Movies movies={this.state.movies} />
                    </div>
                </section>
            </div>
        );
    }
}
