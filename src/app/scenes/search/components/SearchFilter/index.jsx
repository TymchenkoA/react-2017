import React, {Component} from 'react';
import SearchFilterItem from '../SearchFilterItem/index.jsx';

import './index.less';

export class SearchFilter extends Component {
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
            <div className="search-box-filter">
                <label className="search-box-filter__label">Search by</label>
                {
                    options ? options.map(option => (
                            <SearchFilterItem key={option.value} isActive={this.isActiveButton(option.value)}
                                         label={option.label} onClick={() => this.onClick(option.value)}
                            />
                        )
                    ) : children
                }
            </div>
        );
    }
}

export default SearchFilter;
