import React from 'react'

const RestaurantCard = ({ item }) => {
  const [likeCount, setLikeCount] = React.useState(0)
  const [isLiked, setIsLiked] = React.useState(false)

  const handleLike = () => {
    setIsLiked(true)
    setLikeCount((prev) => prev + 1)
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

const Hotel = ({ hotel }) => {
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
