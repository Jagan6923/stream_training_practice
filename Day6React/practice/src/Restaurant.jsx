import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  let RestaurantList = [
    {
      id: 1,
      name: "Taaza Kitchen",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a22a6b9b929ad67eade096288d3f92b7",
      rating: "4.7",
      cuisine: "South Indian",
      eta: "25- 30 mins",
      isOpen: "true",
    },
    {
      id: 2,
      name: "Burger King",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      rating: "4.3",
      cuisine: "Burgers, Fries, American",
      eta: "20- 30 mins",
      isOpen: "false",
    },
    {
      id: 3,
      name: "Swiss Castle",
      eta: "20-25 minutes",
      cuisine: "Bakery, Sweets, Deserts",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kocrpndwg8w5bjaediua",
      rating: "4.6",
      isOpen: "false",
    },
    {
      id: 4,
      name: "Koi & Co",
      eta: "20-25 minutes",
      cuisine: "Burgers, Fries, American",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/af33b81798b11deba338e94b7585d348",
      rating: "4.4",
      isOpen: "false",
    },
    {
      id: 5,
      name: "Humming Bird Cafe",
      eta: "20-25 minutes",
      cuisine: "Burgers, Fries, American",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,e_grayscale,c_fill/ou7e0tfj9ra6hdr2gzcc",
      rating: "3.8",
      isOpen: "true",
    },
  ];

  let [filteredList, setFilteredList] = useState(RestaurantList);
  let [isClicked, setIsClicked] = useState(false);

  const RestHandler = () => {
    const filteredRestaurants = RestaurantList.filter(
      (restaurant) => restaurant.rating > 4
    );

    setFilteredList(filteredRestaurants);
    setIsClicked(true);
  };

  const showAllRestaurants = () => {
    setFilteredList(RestaurantList);
    setIsClicked(false);
  };

  return (
    <div>
      <h1>Restaurants</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {!isClicked ? (
          <button className="btn btn-secondary" onClick={RestHandler}>
            Top Rated Restaurants
          </button>
        ) : (
          <button className="btn btn-secondary" onClick={showAllRestaurants}>
            Show All Restaurants
          </button>
        )}

        {/* Lists and keys */}
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
 