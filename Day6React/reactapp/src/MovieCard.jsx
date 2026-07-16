import React, { useState } from 'react'

const MovieItem = ({ movie }) => {
    const [isViewDescription, setIsViewDescription] = useState(false);

    return (
        <div className='movie'>
            <h3 className='movie-title'>{movie.name}</h3>
            <div className='movie-content'>
                <img src={movie.poster} alt={movie.name} width="200" />
                <div className='movie-info'>
                    <p>Hero: {movie.hero}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Release: {movie.release}</p>
                    {isViewDescription && <p>{movie.description}</p>}
                    <button
                        className='btn btn-secondary'
                        style={{color:"black"}}
                        onClick={() => setIsViewDescription(!isViewDescription)}
                    >
                        {isViewDescription ? "Hide Description" : "View Description"}
                    </button>
                </div>
            </div>
        </div>
    )
}

const MovieCard = ({ movies }) => {
    return (
        <div className='movie-container'>
            {movies.map((movie) => (
                <MovieItem movie={movie} key={movie.name} />
            ))}
        </div>
    )
}

export default MovieCard
