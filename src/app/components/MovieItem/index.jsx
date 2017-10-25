import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './index.less';

class MovieItem extends Component {

    constructor(props) {
        super(props);

        this.goToDetails = this.goToDetails.bind(this);
    }

    goToDetails() {
        this.props.history.push(`/film/${this.props.data.id}`);
    }

    getGenreName(ids) {
        return ids.map(item => {
            const genre = this.props.genres.find(genre => genre.id === item);

            return genre && genre.name;
        });
    }

    render() {
        const {original_title, release_date, genre_ids, poster_path} = this.props.data;
        const path = `https://image.tmdb.org/t/p/w500${poster_path}`;
        const release = release_date.slice(0,4);
        const genres = this.getGenreName(genre_ids).join(" ");

        return (
            <div className="movie-item" onClick={this.goToDetails}>
                <img src={path} alt='' className="movie-item__img"/>
                <div>
                    <div className="movie-item__info">
                        <div className="movie-item__title">{original_title}</div>
                        <div className="movie-item__release">{release}</div>
                    </div>
                    <div className="movie-item__category">{genres}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => (
    {
        genres: store.genres
    }
);

export default connect(mapStateToProps)(withRouter(MovieItem));
