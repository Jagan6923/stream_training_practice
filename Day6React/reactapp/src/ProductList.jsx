import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
const ProductList = ({ product }) => {
    return (
        <div className="card" style={{ width: "14rem", height: "auto", margin: "6px", padding: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
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
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [err, setErr] = useState("");

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
    );
}