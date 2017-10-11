import React, { Component } from 'react';
import { Movies } from '../../components/Movies/index.jsx';
import { MovieBanner } from './components/MovieBanner/index.jsx';
import {withRouter} from 'react-router-dom';

import './index.less';

class FilmPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {},
            movies: []
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.getMovie(this.props.match.params)
            .then(movie => {
                this.findMovies(movie.director);
            });
    }

    componentWillReceiveProps(nextProps) {
        this.getMovie(nextProps.match.params);
    }

    findMovies(director) {
         fetch(`https://netflixroulette.net/api/api.php?director=${director}`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    movies: result
                });
            })
    }

    getMovie({query}) {
        return fetch(`https://netflixroulette.net/api/api.php?title=${query}`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({
                    movie: result
                });

                return result;
            })
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        const movie = this.state.movie;

        return (
            <div className="film-page">
                <div className="header">
                    <div className="header-background">
                        <div className="logo-wrapper container">
                            <span className="logo">netflixroulette</span>
                            <button type="button" className="back-button" onClick={this.goBack}>Search</button>
                        </div>
                        <MovieBanner
                            title={movie.show_title}
                            release={movie.release_year}
                            genre={movie.category}
                            rating={movie.rating}
                            director={movie.director}
                            duration={movie.runtime}
                            url={movie.poster}
                            summary={movie.summary}
                            show_cast={movie.show_cast}
                        />
                    </div>
                    <div className="search-results-wrapper">
                        <div className="container"> Films by {movie.director}</div>
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

export default withRouter(FilmPage);
