import React, {Component}  from 'react';
import ResultsFilterItem from '../ResultsFilterItem/index.jsx';

import './index.less';

class ResultsFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeButton: this.props.activeButton
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(activeButton) {
        if (this.state.activeButton === activeButton) {
            return;
        }

        this.setState({
            activeButton
        });

        this.props.onClick(activeButton);
    }

    isActiveButton(button) {
        return this.state.activeButton === button;
    }
    render() {
        const {children, options} = this.props;

        return (
            <div className="search-results-filter">
                <label className="search-results-filter__label">Sort by</label>
                {
                    options ? options.map(option => (
                            <ResultsFilterItem key={option.value} isActive={this.isActiveButton(option.value)}
                                              label={option.label} onClick={() => this.onClick(option.value)}
                            />
                        )
                    ) : children
                }
            </div>
        );
    }
}

export default ResultsFilter;
