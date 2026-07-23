import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
const ProductList = ({ product }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`card ${theme === "dark" ? "theme-card-dark" : "theme-card-light"}`} style={{ width: "14rem", height: "auto", margin: "6px", padding: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs. {product.price}</p>
                <p className="card-text">Rs. {product.category}</p>
                <p className="card-text">Rating: {product.rating.rate}⭐</p>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductList;


export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [err, setErr] = useState("");
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDarkTheme = theme === "dark";

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                setErr(error.message);
            });
    }, [id]);

    if (err) {
        return <h1>{err}</h1>;
    }

    if (!product) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className={`theme-page ${isDarkTheme ? "theme-dark" : "theme-light"}`}>
            <div className="d-flex justify-content-center">
                <button className="btn theme-toggle-btn" onClick={toggleTheme}>
                    Switch to {isDarkTheme ? "Light" : "Dark"} Theme
                </button>
            </div>
            <div className="product-details-container">
                <img src={product.image} className="product-details-image" alt={product.title} />
                <div className="product-details-content">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Rs. {product.price}</p>
                    <p className="card-text">Rs. {product.category}</p>
                    <p className="card-text">Rating: {product.rating.rate}⭐</p>
                    <p className="card-text">Count: {product.rating.count}</p>
                    <button style={{ marginTop: "10px", color: "#ffffff", backgroundColor: "#007bff", cursor: "pointer" }}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}