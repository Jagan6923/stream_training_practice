import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Cake from './Cake';
import App from './App';
import Car from './Car';
import Car1 from './Car1';
import MovieCard from './MovieCard';
import Hotel from './Hotel';
import Header from './Header';
import Footer from './Footer';

const moviesList = [
    {
        name: "The Shawshank Redemption",
        hero: "Tim Robbins",
        rating: 9.3,
        release: 1994,
        poster: "https://rukminim2.flixcart.com/image/480/640/jr6o13k0/poster/p/n/7/medium-hope-shawshank-redemption-poster-for-room-office-13-inch-original-imafdfbysget3wb4.jpeg?q=90",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        name: "The Godfather",
        hero: "Marlon Brando",
        rating: 9.2,
        release: 1972,
        poster: "https://m.media-amazon.com/images/I/61k7Mx2IjzL._AC_UF894,1000_QL80_.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        name: "The Dark Knight",
        hero: "Christian Bale",
        rating: 9.0,
        release: 2008,
        poster: "https://m.media-amazon.com/images/I/71dwS9phhCL.jpg",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
    },
    {
        name: "Pulp Fiction",
        hero: "John Travolta",
        rating: 8.9,
        release: 1994,
        poster: "https://m.media-amazon.com/images/I/61Z4YX7EbtL._AC_UF894,1000_QL80_.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    },
    {
        name: "The pursuit of Happyness",
        hero: "Will Smith",
        rating: 8.0,
        release: 2006,
        poster: "https://cdng.europosters.eu/pod_public/1300/263601.jpg",
        description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career."
    }
];

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
];

const hotelList = [
    {
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
        cuisine: "South Indian",
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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL83UMvrDMg-GsQOMlVVrYIANOy8uTXMR7kOPbDL-Xxg&s=10",
        isOpen: true
    }
];

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    );
};


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "home",
                element: <App />
            },
            {
                path: "car",
                element: <Car />
            },
            {
                path: "car1",
                element: <Car1 />
            },
            {
                path: "cake",
                element: <Cake cakes={cakesList} />
            },
            {
                path: "movie",
                element: <MovieCard movies={moviesList} />
            },
            {
                path: "hotel",
                element: <Hotel hotel={hotelList} />
            }
        ]
    }
]);

export default Router
