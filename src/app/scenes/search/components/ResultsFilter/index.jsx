import React from 'react';

import './index.less';

const ResultsFilter = () => (
    <div className="search-results-filter">
        <label className="search-results-filter__label">Sort by</label>
        <span className="search-results-filter__criterion">release date</span>
        <span className="search-results-filter__criterion search-results-filter__criterion_active">rating</span>
    </div>
);

export default ResultsFilter;
