import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import './index.less';

class MovieItem extends Component {

    constructor(props) {
        super(props);

        this.goToDetails = this.goToDetails.bind(this);
    }

    goToDetails() {
        this.props.history.push(`/film/${this.props.data.show_title}`);
    }

    render() {
        const {show_title, release_year, category, poster} = this.props.data;

        return (
            <div className="movie-item" onClick={this.goToDetails}>
                <img src={poster} alt='' className="movie-item__img"/>
                <div>
                    <div className="movie-item__info">
                        <div className="movie-item__title">{show_title}</div>
                        <div className="movie-item__release">{release_year}</div>
                    </div>
                    <div className="movie-item__category">{category}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieItem);
