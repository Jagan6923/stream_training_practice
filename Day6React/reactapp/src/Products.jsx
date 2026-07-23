import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { ThemeContext } from "./ThemeContext";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState("");
    const [search, setSearch] = useState("");
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDarkTheme = theme === "dark";


    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                // console.log(response.data);
                // products = response.data;
                setProducts(response.data);
            })
            .catch((error) => {
                // console.log(error);
                setErr(error.message);
            });
    }, []);

    //   if (products.length == 0) {
    //     return <Loader />;
    //   }

    if (err) {
        return <h1>{err}</h1>;
    }

    return (
        <div className={`theme-page ${isDarkTheme ? "theme-dark" : "theme-light"}`}>
            <h1>Products</h1>
            <div className="d-flex justify-content-center">
                <button className="btn theme-toggle-btn" onClick={toggleTheme}>
                    Switch to {isDarkTheme ? "Light" : "Dark"} Theme
                </button>
            </div>
            <input type="text" placeholder="Search products..." className="searchbox"  onChange={(e) => setSearch(e.target.value)} value={search} />
            <div className="d-flex flex-wrap justify-content-center">
                {products
                    .filter((product) =>
                        product.description.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((product) => {
                        return <ProductList product={product} key={product.id} />;
                    })}
            </div>
        </div>
    );
};

export default Products;
