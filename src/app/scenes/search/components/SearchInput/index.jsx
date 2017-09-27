import React from 'react';

import './index.less';

const SearchInput= (props) => (
    <input
        type="search"
        name="query"
        aria-label="search query"
        placeholder="Search"
        className="search-box-textfield"
        value={props.value}
        onChange={props.onChange}
    />
);

export default SearchInput;
