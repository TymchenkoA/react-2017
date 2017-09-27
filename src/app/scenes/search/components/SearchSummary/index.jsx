import React, {Component} from 'react';
import SearchResults from '../SearchResults/index.jsx';
import {Movies} from '../../../../components/Movies/index.jsx';
import movies from '../../../../components/Movies/movies.json';
import {withRouter} from 'react-router-dom';

class SearchSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.findMovies(this.props.query);
    }

    componentWillReceiveProps(nextProps) {
        this.findMovies(nextProps.query);
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

    render() {
        return (
            <section className="content-wrapper">
                <div className="search-results-wrapper">
                    <SearchResults />
                </div>
                <div className="container">
                    <div className="content">
                        <Movies movies={this.state.movies} />
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(SearchSummary);
