import React from "react";

const ProductList = ({ product }) => {
    return (
        <div className="card" style={{ width: "14rem", height: "auto", margin: "6px", padding: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs. {product.price}</p>
                <p className="card-text">Rs. {product.category}</p>
                <p className="card-text">Rating: {product.rating.rate}⭐</p>
            </div>
        </div>
    );
};

export default ProductList;
