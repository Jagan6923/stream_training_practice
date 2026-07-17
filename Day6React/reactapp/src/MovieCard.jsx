import React, { useState } from 'react'
import Seat from './Seat';

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
                <img src={movie.poster} alt={movie.name} width="200" />
                <div className='movie-info'>
                    <p>Hero: {movie.hero}</p>
                    <p>Rating: {movie.rating}</p>
                    <p>Release: {movie.release}</p>
                    {isViewDescription && <p>{movie.description}</p>}
                    <button
                        className='btn btn-secondary'
                        style={{ color: "black" }}
                        onClick={() => setIsViewDescription(!isViewDescription)}
                    >
                        {isViewDescription ? "Hide Description" : "View Description"}
                    </button>
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
                <MovieItem movie={movie} key={movie.name} />
            ))}
        </div>
    )
}

export default MovieCard
