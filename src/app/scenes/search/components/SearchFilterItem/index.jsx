import React from 'react';

import './index.less';

const SearchFilterItem = ({isActive, label, className, children, onClick}) => {
    const classList = `search-box-filter__button ${className? className : ''} ${isActive ? 'active' : ''}`;

    return (
        <button onClick={onClick} className={classList} aria-label={label} aria-pressed={isActive} type="button">
            { label } { children }
        </button>
    );
};

export default SearchFilterItem;
