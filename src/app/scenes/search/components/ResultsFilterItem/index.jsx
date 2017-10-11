import React from 'react';

const ResultsFilterItem = ({isActive, label, className, onClick}) => {
    const classList = `search-results-filter__criterion ${className? className : ''} ${isActive ? 'active' : ''}`;

    return (
        <span onClick={onClick} className={classList} aria-label={label} aria-pressed={isActive}>
            { label }
        </span>
    );
};

export default ResultsFilterItem;
