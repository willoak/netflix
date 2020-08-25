import React from 'react';
import './filmesItem.css';

const FilmesItem = ({title, items}) => {

    return (
        <div className="movie-row">
            <h2>{title}</h2>
            <div className="movie-area">
                <div className="movie-list">
                    {
                        items.results.length > 0 && items.results.map( (item, key) => (
                            <div key={key} className="movie-item">
                                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FilmesItem;