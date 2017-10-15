import React, {Component} from 'react';

import './index.less';

export class MovieBanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, release, url, rating, duration, summary} = this.props;
        const production = this.props.production && this.props.production[0].name;

        return (
            <div className="container">
                <div className="movie-banner">
                    <img src={url} alt='' className="movie-banner__img"/>
                    <div className="movie-banner__info">
                        <div>
                            <span className="movie-banner__title">{title}</span>
                            <span className="movie-banner__rating">{rating}</span>
                        </div>
                        <div>Oscar - winning Movies</div>
                        <div>
                            <span className="movie-banner__release">{release}</span>
                            <span className="movie-banner__duration">{duration} min</span>
                        </div>
                        <div className="movie-banner__description">{summary}</div>
                        <div className="movie-banner__cast-list">Production country: {production}</div>
                    </div>
                </div>
            </div>
        )
    }
}
