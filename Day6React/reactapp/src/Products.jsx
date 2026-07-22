import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState("");
    const [search, setSearch] = useState("");


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
        <div>
            <h1>Products</h1>
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
