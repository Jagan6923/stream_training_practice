import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import CarouselComponent from "./Carousel";
import MovieCard from "./MovieCard";
import Cake from "./Cake";
import Employee from "./Employee";
import Hotel from "./Hotel";

function App() {

  const moviesList = [
    {
      name: "The Shawshank Redemption",
      hero: "Tim Robbins",
      rating: 9.3,
      release: 1994,
      poster: "https://rukminim2.flixcart.com/image/480/640/jr6o13k0/poster/p/n/7/medium-hope-shawshank-redemption-poster-for-room-office-13-inch-original-imafdfbysget3wb4.jpeg?q=90",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption."
    },
    {
      name: "The Godfather",
      hero: "Marlon Brando",
      rating: 9.2,
      release: 1972,
      poster: "https://m.media-amazon.com/images/I/61k7Mx2IjzL._AC_UF894,1000_QL80_.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name."
    },
    {
      name: "The Dark Knight",
      hero: "Christian Bale",
      rating: 9.0,
      release: 2008,
      poster: "https://m.media-amazon.com/images/I/71dwS9phhCL.jpg",
      description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan."
    },
    {
      name: "Pulp Fiction",
      hero: "John Travolta",
      rating: 8.9,
      release: 1994,
      poster: "https://m.media-amazon.com/images/I/61Z4YX7EbtL._AC_UF894,1000_QL80_.jpg",
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption. Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary."
    },
    {
      name: "The pursuit of Happyness",
      hero: "Will Smith",
      rating: 8.0,
      release: 2006,
      poster: "https://cdng.europosters.eu/pod_public/1300/263601.jpg",
      description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career. The Pursuit of Happyness is a 2006 American biographical drama film directed by Gabriele Muccino and starring Will Smith."
    }
  ]

  const cakesList = [
    {
      name: "Chocolate Cake",
      poster: "../src/assets/cake1.jfif"
    },
    {
      name: "Vanilla Cake",
      poster: "../src/assets/cake2.jfif"
    },
    {
      name: "Choco caramel Cake",
      poster: "../src/assets/cake3.jfif"
    },
    {
      name: "Butter Scotch Cake",
      poster: "../src/assets/cake4.jfif"
    },
    {
      name: "Red Velvet Cake",
      poster: "../src/assets/cake5.jfif"
    }
  ]

  const hotel = [{
    id: 1,
    name: "Rajesh Bhavan",
    cuisine: "South Indian - Vegetarian",
    rating: 4.5,
    eta: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YauAcY-GV2e1uHNjJxY2v1YhWlBaAYOylHjWoLT11Q&s=10",
    isOpen: true
  },
  {
    id: 2,
    name: "Dinesh Hotel",
    cuisine: "Thailand - Non Vegetarian",
    rating: 4.0,
    eta: 25,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghiUIvbwm_ljLCuEwjDJwKrT_VD6NHAFaOHsaq8D6HA&s=10",
    isOpen: true
  },
  {
    id: 3,
    name: "Rafeek Hotel",
    cuisine: "Mandi",
    rating: 4.2,
    eta: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibrKAStr-H2Q7J69Bf1bcJeLurdrjiANgxGkJG00i6w&s=10",
    isOpen: false
  },
  {
    id: 4,
    name: "Anand Hotel",
    cuisine: "South Indian ",
    rating: 4.2,
    eta: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNHrkpwTS_juirqlpHaLtl1-h_ttq-ae2-XHeQvMX0EA&s=10",
    isOpen: false
  },
  {
    id: 5,
    name: "Karthi Vilas",
    cuisine: "South Indian - Non Vegetarian",
    rating: 4.2,
    eta: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL83UMvrDMg-GsQOMlVVrYIANOy8uTXMR7kOPbDL-Xxg&s=10g",
    isOpen: true
  }
  ]

  return (
    <>
      {/* <Header/>
      <CarouselComponent/>
      <Home/>
      <Footer/> */}
      <MovieCard movies={moviesList} />
      {/* <Cake cakes={cakesList} /> */}
      {/* <Employee/> */}
      <Hotel hotel={hotel} />

    </>
  );
}

export default App;
