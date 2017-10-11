import React, {Component} from 'react';

import './index.less';

export class MovieBanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, release, url, rating, director, duration, summary, show_cast} = this.props;

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
                            <span className="movie-banner__duration">{duration}</span>
                        </div>
                        <div className="movie-banner__description">{summary}</div>
                        <div className="movie-banner__director">Director: {director}</div>
                        <div className="movie-banner__cast-list">Cast: {show_cast}</div>
                    </div>
                </div>
            </div>
        )
    }
}
