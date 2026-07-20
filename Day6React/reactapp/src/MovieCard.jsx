import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Seat from './Seat';

const getImageFileName = (posterUrl = "") => {
    const cleanUrl = posterUrl.split('?')[0];
    const segments = cleanUrl.split('/');
    return segments[segments.length - 1] || "poster.jpg";
};

const MovieItem = ({ movie }) => {
    const [isViewDescription, setIsViewDescription] = useState(false);


    const totalSeats = 15;
    const [seats, setSeats] = useState(Array(totalSeats).fill(true));

    const availableSeats = seats.filter((isAvailable) => isAvailable).length;
    const selectedSeats = totalSeats - availableSeats;

    const handleSeatToggle = (seatIndex) => {
        setSeats((prevSeats) => prevSeats.map((seat, index) => (
            index === seatIndex ? !seat : seat
        )));
    };

    if(!movie) {
        return <p className='text-center mt-4'>No movies available right now.</p>
    }

    return (
        <div className='movie'>
            <h3 className='movie-title'>{movie.name}</h3>
            <div className='movie-content'>
                <Link to={`/movie/${movie.id}/${getImageFileName(movie.poster)}`}>
                    <img src={movie.poster} alt={movie.name} width="200" />
                </Link>
                <div className='movie-info'>
                    <p>Hero: {movie.hero}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Release: {movie.release}</p>
                    <p>Genre: {movie.genre}</p>
                    {isViewDescription && <p>{movie.description}</p>}
                    <button
                        className='btn btn-secondary'
                        style={{ color: "black" }}
                        onClick={() => setIsViewDescription(!isViewDescription)}
                    >
                        {isViewDescription ? "Hide Description" : "View Description"}
                    </button>
                    <Link className='btn btn-warning m-2' to={`/movie/${movie.id}/${getImageFileName(movie.poster)}`}>
                        View Full Details
                    </Link>
                    <p>Available Seats: {availableSeats}</p>
                    <p>Selected Seats: {selectedSeats}</p>
                    <div className='seat-container'>
                        {seats.map((isAvailable, index) => (
                            <div key={index} className='seat-wrapper'>
                                <Seat
                                    isAvailable={isAvailable}
                                    onToggle={() => handleSeatToggle(index)}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className='btn btn-info m-2'
                        disabled={selectedSeats === 0}
                    >
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </div>
    )
}

const MovieCard = ({ movies = [] }) => {
    if (movies.length === 0) {
        return <p className='text-center mt-4'>No movies available right now.</p>
    }

    return (
        <div className='movie-container'>
            {movies.map((movie) => (
                <MovieItem movie={movie} key={movie.id} />
            ))}
        </div>
    )
}

export const MovieDetails = ({ movies = [] }) => {
    const { id, img } = useParams();
    const selectedMovie = movies.find((movie) => (
        movie.id === Number(id) && getImageFileName(movie.poster) === img
    ));

    if (!selectedMovie) {
        return <p className='text-center mt-4'>Movie not found.</p>;
    }

    const relatedMovies = movies
        .filter((movie) => movie.name !== selectedMovie.name && movie.genre === selectedMovie.genre)
        .slice(0, 3);

    return (
        <div className='movie-details'>
            <div className='movie'>
                <h2 className='movie-title'>{selectedMovie.name}</h2>
                <div className='movie-content'>
                    <img src={selectedMovie.poster} alt={selectedMovie.name} />
                    <div className='movie-info'>
                        <p><strong>Hero:</strong> {selectedMovie.hero}</p>
                        <p><strong>Genre:</strong> {selectedMovie.genre}</p>
                        <p><strong>Rating:</strong> {selectedMovie.rating}</p>
                        <p><strong>Release:</strong> {selectedMovie.release}</p>
                        <p><strong>Description:</strong> {selectedMovie.description}</p>
                    </div>
                </div>
            </div>

            <div className='movie cast-section'>
                <h3 className='movie-title'>Cast</h3>
                <div className='cast-grid'>
                    {selectedMovie.cast.map((person) => (
                        <div className='cast-card' key={person.name}>
                            <img src={person.image} alt={person.name} />
                            <p><strong>{person.name}</strong></p>
                            <p>{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='movie related-movies'>
                <h3 className='movie-title'>More Movies Like This</h3>
                {relatedMovies.length > 0 ? (
                    <div className='cast-grid'>
                        {relatedMovies.map((movie) => (
                            <Link
                                key={movie.id}
                                className='related-link'
                                to={`/movie/${movie.id}/${getImageFileName(movie.poster)}`}
                            >
                                <img src={movie.poster} alt={movie.name} />
                                <p>{movie.name}</p>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p>No similar movies found.</p>
                )}
            </div>
        </div>
    );
}

export default MovieCard
