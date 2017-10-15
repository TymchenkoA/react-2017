import React, {Component} from 'react';
import SearchResults from '../SearchResults/index.jsx';
import {Movies} from '../../../../components/Movies/index.jsx';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMovies} from '../../../../services/movies/actions';
import {getGenres} from '../../../../services/genres/actions';

import moment from 'moment';

class SearchSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }

        this.sortData = this.sortData.bind(this);
    }

    componentDidMount() {
        this.findMovies(this.props.match.params);
        this.props.getGenresProp();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            movies: nextProps.movies
        });

        if (nextProps.match.params.query !== this.props.match.params.query || nextProps.match.params.type !== this.props.match.params.type) {
            this.findMovies(nextProps.match.params);
        }
    }

    findMovies({type, query}) {
        if (!type || !query) {
            return;
        }

        this.props.getMoviesProp(type, query);
    }

    sortData(filter) {
        const newMovies = this.state.movies.sort((a,b) => {
            if (filter == 'release_date') {
                return moment(a[filter]).year() - moment(b[filter]).year();
            }
            return parseFloat(a[filter]) - parseFloat(b[filter]);
        });

        this.setState({
            movies: newMovies
        });
    }

    render() {
        return (
            <section className="content-wrapper">
                <SearchResults
                    movies={this.state.movies}
                    onChange={this.sortData}
                />
                <div className="container">
                    <div className="content">
                        <Movies movies={this.state.movies} />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = store => (
    {
        movies: store.movies
    }
);

const mapDispatchToProps = dispatch => (
    {
        getMoviesProp: (type, query) => dispatch(getMovies(type, query)),
        getGenresProp: () => dispatch(getGenres())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchSummary));
