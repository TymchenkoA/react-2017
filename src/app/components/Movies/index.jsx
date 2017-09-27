import React, {Component} from 'react';

import MovieItem from '../MovieItem/index.jsx';

import './index.less';

export class Movies extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const emptyElement = (
            <div className="content__empty">
                <span>No films found</span>
            </div>
        );

        return (
            <div className="content__movies">
                {this.props.movies.length > 0
                    ? this.props.movies.map((item, index) => (
                        <MovieItem
                            data={item}
                            key={index}
                        />
                    )) : emptyElement}
            </div>
        )
    }
}
