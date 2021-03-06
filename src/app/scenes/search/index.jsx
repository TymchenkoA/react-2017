import React, { Component } from 'react';
import SearchBox from './components/SearchBox/index.jsx';
import SearchSummary from './components/SearchSummary/index.jsx';
import { getGenres } from '../../services/genres/actions';

import './index.less';

export default class SearchPage extends Component {
    static fetchData (dispatch) {
        return dispatch(getGenres());
    }

    render() {
        const {type, query} = this.props.match.params;

        return (
            <div className="search-page">
                <div className="header">
                    <div className="header-background">
                        <div className="logo-wrapper container">
                            <span className="logo">netflixroulette</span>
                        </div>
                        <SearchBox />
                    </div>
                </div>
                <SearchSummary
                    type={type}
                    query={query}
                />
            </div>
        );
    }
}
