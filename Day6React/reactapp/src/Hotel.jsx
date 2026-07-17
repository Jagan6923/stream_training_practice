import React, { useState } from 'react'

const RestaurantCard = ({ item }) => {
  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(true)
    setLikeCount((prev) => prev + 1)
  }

  if (!item) {
    return <p className='text-center mt-4'>No restaurant data available.</p>
  }

  return (
    <div key={item.id} className='hotel'>
      <img src={item.image} alt={item.name} width="200" />
      <div className='hotel-content'>
        <h2>{item.name}</h2>
        <p>Cuisine: {item.cuisine}</p>
        <p>Rating: {item.rating}</p>
        <p>ETA: {item.eta} mins</p>
        <p>Status: {item.isOpen ? "Open" : "Closed"}</p>
        <button className='btn btn-primary' onClick={handleLike}>
          {isLiked ? '🩷 Liked' : 'Like'}
        </button>
        <p>Likes: {likeCount}</p>
      </div>
    </div>
  )
}

const Hotel = ({ hotel = [] }) => {
  if (hotel.length === 0) {
    return <p className='text-center mt-4'>No hotels available right now.</p>
  }

  return (
    <div>
      <div>
      <h1>Welcome to the Jagan Hotel</h1>
      {hotel.map((item)=>(
        <RestaurantCard key={item.id} item={item} />
      ))}
    </div>
    </div>
  )
}

export default Hotel
