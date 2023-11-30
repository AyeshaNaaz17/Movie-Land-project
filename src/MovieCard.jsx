import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div>
            <div className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div className="">
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.title}/>
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>
        </div>

    );
}

export default MovieCard