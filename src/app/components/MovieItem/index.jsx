import React, {Component} from 'react';

import './index.less';

export class MovieItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, release, genre, url} = this.props.data;

        return (
            <div className="movie-item">
                <img src={url} alt='' className="movie-item__img"/>
                <div>
                    <div className="movie-item__info">
                        <div className="movie-item__title">{title}</div>
                        <div className="movie-item__release">{release}</div>
                    </div>
                    <div className="movie-item__genre">{genre}</div>
                </div>
            </div>
        )
    }
}
