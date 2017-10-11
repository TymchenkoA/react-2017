import React from 'react';

import './index.less';

const SearchFilterItem = ({isActive, label, onClick}) => {
    const classList = `search-box-filter__button ${isActive ? 'active' : ''}`;

    return (
        <button onClick={onClick} className={classList} aria-label={label} aria-pressed={isActive} type="button">
            { label }
        </button>
    );
};

export default SearchFilterItem;
