import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import Error from './Error';
import Products from './Products';

const App = lazy(() => import('./App'));
const Car = lazy(() => import('./Car'));
const Car1 = lazy(() => import('./Car1'));
const Cake = lazy(() => import('./Cake'));
const Hotel = lazy(() => import('./Hotel'));
const MovieCard = lazy(() => import('./MovieCard'));
const MovieDetails = lazy(() =>
    import('./MovieCard').then((module) => ({ default: module.MovieDetails }))
);

const withSuspense = (Component, props = {}) => (
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

const moviesList = [
    {
        id: 1,
        name: "The Shawshank Redemption",
        hero: "Tim Robbins",
        genre: "Drama",
        rating: 9.3,
        release: 1994,
        poster: "https://rukminim2.flixcart.com/image/480/640/jr6o13k0/poster/p/n/7/medium-hope-shawshank-redemption-poster-for-room-office-13-inch-original-imafdfbysget3wb4.jpeg?q=90",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        cast: [
            {
                name: "Tim Robbins",
                role: "Andy Dufresne",
                image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tim_Robbins_2012_Shankbone.JPG"
            },
            {
                name: "Morgan Freeman",
                role: "Ellis Boyd 'Red' Redding",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Morgan_Freeman_Deauville_2018.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "The Godfather",
        hero: "Marlon Brando",
        genre: "Crime",
        rating: 9.2,
        release: 1972,
        poster: "https://m.media-amazon.com/images/I/61k7Mx2IjzL._AC_UF894,1000_QL80_.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        cast: [
            {
                name: "Marlon Brando",
                role: "Vito Corleone",
                image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Marlon_Brando_1955.jpg"
            },
            {
                name: "Al Pacino",
                role: "Michael Corleone",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Al_Pacino.jpg"
            }
        ]
    },
    {
        id: 3,
        name: "The Dark Knight",
        hero: "Christian Bale",
        genre: "Action",
        rating: 9.0,
        release: 2008,
        poster: "https://m.media-amazon.com/images/I/71dwS9phhCL.jpg",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        cast: [
            {
                name: "Christian Bale",
                role: "Bruce Wayne / Batman",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Christian_Bale-7835.jpg"
            },
            {
                name: "Heath Ledger",
                role: "Joker",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Heath_Ledger.jpg"
            }
        ]
    },
    {
        id: 4,
        name: "Pulp Fiction",
        hero: "John Travolta",
        genre: "Crime",
        rating: 8.9,
        release: 1994,
        poster: "https://m.media-amazon.com/images/I/61Z4YX7EbtL._AC_UF894,1000_QL80_.jpg",
        description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        cast: [
            {
                name: "John Travolta",
                role: "Vincent Vega",
                image: "https://upload.wikimedia.org/wikipedia/commons/8/87/John_Travolta_Cannes_2018.jpg"
            },
            {
                name: "Samuel L. Jackson",
                role: "Jules Winnfield",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg"
            }
        ]
    },
    {
        id: 5,
        name: "The pursuit of Happyness",
        hero: "Will Smith",
        genre: "Drama",
        rating: 8.0,
        release: 2006,
        poster: "https://cdng.europosters.eu/pod_public/1300/263601.jpg",
        description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
        cast: [
            {
                name: "Will Smith",
                role: "Chris Gardner",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Will_Smith_2023.jpg"
            },
            {
                name: "Jaden Smith",
                role: "Christopher Jr.",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Jaden_Smith_2023.jpg"
            }
        ]
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
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: withSuspense(App)
            },
            {
                path: "home",
                element: withSuspense(App)
            },
            {
                path: "car",
                element: withSuspense(Car)
            },
            {
                path: "car1",
                element: withSuspense(Car1)
            },
            {
                path: "cake",
                element: withSuspense(Cake, { cakes: cakesList })
            },
            {
                path: "movie",
                element: withSuspense(MovieCard, { movies: moviesList })
            },
            {
                path: "movie/:id/:img",
                element: withSuspense(MovieDetails, { movies: moviesList })
            },
            {
                path: "hotel",
                element: withSuspense(Hotel, { hotel: hotelList })
            },
            {
                path: "products",
                element: withSuspense(Products)
            }
        ]
    }
]);

export default Router
