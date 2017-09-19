import React from 'react';
import SearchInput from '../SearchInput/index.jsx';
import SearchFilter from '../SearchFilter/index.jsx';

import './index.less';

const SearchBox = () => (
    <div className="search-box container">
        <div className="search-box__title">Find your movie</div>
        <SearchInput />
        <div className="search-box-filter-wrapper">
            <SearchFilter />
            <button type="button" className="search-box__button">Search</button>
        </div>
    </div>
);

export default SearchBox;
