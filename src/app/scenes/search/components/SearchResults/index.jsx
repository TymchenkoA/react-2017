import React, {Component} from 'react';
import ResultsFilter from '../ResultsFilter/index.jsx';

import './index.less';

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.options = [
            {
                value: 'release_year',
                label: 'release date'
            }, {
                value: 'rating',
                label: 'rating'
            }
        ];

        this.state = {
            filter: ''
        };

        this.switchFilter = this.switchFilter.bind(this);
    }

    switchFilter(filter) {
        if (this.state.filter !== filter) {
            this.setState({ filter });
            this.props.onChange(filter);
        }
    }

    render() {
        return (
            <div className="search-results-wrapper">
                {this.props.movies.length > 0
                    ? <div className="search-results container">
                        <div className="search-results__number">{this.props.movies.length} movie(s) found</div>
                        <ResultsFilter
                            options={this.options}
                            activeButton={this.state.filter}
                            onClick={this.switchFilter}
                        />
                    </div> : null}
            </div>
        );
    }
}

export default SearchResults;
