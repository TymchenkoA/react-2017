import React from 'react';

import './index.less';

const SearchFilter = () => (
    <div className="search-box-filter">
        <label className="search-box-filter__label">Search by</label>
        <button type="button" className="search-box-filter__button search-box-filter__button_active">Title</button>
        <button type="button" className="search-box-filter__button">Director</button>
    </div>
);

export default SearchFilter;
