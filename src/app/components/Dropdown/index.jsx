import React, {Component} from 'react';

import './index.less';

export class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div className="dropdown">
                <div onClick={() => this.setState({ isOpened: !this.state.isOpened })}>Click to see content</div>
                {this.state.isOpened && <div>That's a great movie:)</div>}
            </div>
        )
    }
}
