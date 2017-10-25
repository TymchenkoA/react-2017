import React, {Component} from 'react';
import SearchResults from '../SearchResults/index.jsx';
import {Movies} from '../../../../components/Movies/index.jsx';
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';
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
        this.props.getGenres();
    }

    componentWillReceiveProps(nextProps) {
        const params = this.props.match.params;
        const nextParams = nextProps.match.params;

        this.setState({
            movies: nextProps.movies
        });

        if (nextParams.query !== params.query || nextParams.type !== params.type) {
            this.findMovies(nextParams);
        }
    }

    findMovies({type, query}) {
        if (!type || !query) {
            return;
        }

        this.props.getMovies(type, query);
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMovies,
        getGenres
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchSummary));
