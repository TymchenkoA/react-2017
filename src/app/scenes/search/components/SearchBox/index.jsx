import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import SearchInput from '../SearchInput/index.jsx';
import SearchFilter from '../SearchFilter/index.jsx';

import './index.less';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.options = [
            {
                value: 'title',
                label: 'Title'
            }, {
                value: 'director',
                label: 'Director'
            }
        ];

        this.state = {
            value: '',
            activeButton: 'title'
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.search = this.search.bind(this);
        this.switchFilter = this.switchFilter.bind(this);
    }

    switchFilter(activeButton) {
        if (this.state.activeButton !== activeButton) {
            this.setState({ activeButton });
        }
    }

    onValueChange(event) {
        const value = event.target.value;

        this.setState({
            value
        });
    }

    search() {
        this.props.history.push(`/search/${this.state.activeButton}/${this.state.value}`);
    }

    render() {
        const {value, activeButton} = this.state;

        return (
            <div className="search-box container">
                <div className="search-box__title">Find your movie</div>
                <SearchInput value={value} onChange={this.onValueChange}/>
                <div className="search-box-filter-wrapper">
                    <SearchFilter
                        options={this.options}
                        activeButton={activeButton}
                        onClick={this.switchFilter}
                    />
                    <button type="button" className="search-box__button" onClick={this.search} >Search</button>
                </div>
            </div>
        );
    }
}

export default withRouter(SearchBox);
