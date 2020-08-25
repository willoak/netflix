import React from 'react';
import './featuredMovie.css';

const FeaturedMovie = (props) => {
    return (
        <>
            <div className="bg" style={{background:`https://image.tmdb.org/t/p/originals${props.item.backdrop_path}`}}>
                {props.item.backdrop_path}
            </div>
            <h1>{ props.item.original_name }</h1>
        </>
    )
}

export default FeaturedMovie;