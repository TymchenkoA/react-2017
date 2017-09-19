import React, {Component} from 'react';

import './index.less';

export class MovieBanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, release, url, rating, director, duration} = this.props;

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
                            <span className="movie-banner__duration">{duration}min</span>
                        </div>
                        <div className="movie-banner__description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <div className="movie-banner__director">Director: {director}</div>
                        <div className="movie-banner__cast-list">Cast: Uma Turman</div>
                    </div>
                </div>
            </div>
        )
    }
}
