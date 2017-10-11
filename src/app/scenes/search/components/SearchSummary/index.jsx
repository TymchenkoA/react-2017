import React, {Component} from 'react';
import SearchResults from '../SearchResults/index.jsx';
import {Movies} from '../../../../components/Movies/index.jsx';
import {withRouter} from 'react-router-dom';

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
    }

    componentWillReceiveProps(nextProps) {
        this.findMovies(nextProps.match.params);
    }

    findMovies({type, query}) {
        if (!type || !query) {
            return;
        }

        fetch(`https://netflixroulette.net/api/api.php?${type}=${query}`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                if (result.show_title) {
                    result = [result];
                }
                this.setState({
                    movies: result
                });
            })
    }

    sortData(filter) {
        const newMovies = this.state.movies.sort((a,b) => {
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

export default withRouter(SearchSummary);
