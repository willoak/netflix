import React from 'react';

const FilmesItem = ({title, items}) => {

    return (
        <div className="item">
            <h2>{title}</h2>
            <div className="movie-row">
                {
                    items.results.length > 0 && items.results.map( (item, key) => (
                        <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name}/>
                    ))

                }
            </div>


        </div>
    )
}

export default FilmesItem;