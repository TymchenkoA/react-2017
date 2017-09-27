import React from 'react';
import ResultsFilter from '../ResultsFilter/index.jsx';

import './index.less';

const SearchResults = () => (
    <div className="search-results container">
        <div className="search-results__number">7 movies found</div>
        <ResultsFilter />
    </div>
);

export default SearchResults;
