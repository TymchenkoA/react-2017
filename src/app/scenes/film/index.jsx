import React, { Component } from 'react';
import { Movies } from '../../components/Movies/index.jsx';
import { MovieBanner } from './components/MovieBanner/index.jsx';
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {getMovieDetails} from '../../services/activeMovie/actions';
import {findMoviesByGenre} from '../../services/moviesByGenre/actions';

import './index.less';

class FilmPage extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData(props) {
        props.getMovieDetails(props.match.params.query)
            .then(movie => {
                props.findMoviesByGenre(movie.genres[0].id);
            });
    }

    componentDidMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.query !== this.props.match.params.query) {
            this.getData(nextProps);
        }
    }

    goBack() {
        //this.props.history.goBack();
        this.props.history.push('/');
    }

    render() {
        const movie = this.props.activeMovie.details || {};
        const path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const genre = movie && movie.genres && movie.genres[0].name;

        return (
            <div className="film-page">
                <div className="header">
                    <div className="header-background">
                        <div className="logo-wrapper container">
                            <span className="logo">netflixroulette</span>
                            <button type="button" className="back-button" onClick={this.goBack}>Search</button>
                        </div>
                        <MovieBanner
                            title={movie.title}
                            release={movie.release_date}
                            rating={movie.vote_average}
                            duration={movie.runtime}
                            url={path}
                            summary={movie.overview}
                            production={movie.production_countries}
                        />
                    </div>
                    <div className="search-results-wrapper">
                        <div className="container"> Films by genre: {genre}</div>
                    </div>
                </div>
                <section className="content-wrapper container">
                    <div className="content">
                        <Movies movies={this.props.moviesByGenre} />
                    </div>
                </section>

            </div>
        );
    }
}

const mapStateToProps = store => (
    {
        activeMovie: store.activeMovie,
        moviesByGenre: store.moviesByGenre
    }
);

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovieDetails,
        findMoviesByGenre
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilmPage));
