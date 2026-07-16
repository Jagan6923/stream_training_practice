import React from 'react'

const Cake = ({ cakes }) => {

    return (
        <div className='cake-container'>
            {cakes.map((cake) => (
                <div className='cake' key={cake.name}>
                    <img src={cake.poster} alt={cake.name} width="200" />
                    <h3>{cake.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cake
