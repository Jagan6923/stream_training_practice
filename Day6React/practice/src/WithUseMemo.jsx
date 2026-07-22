import React, { useMemo, useState } from "react";

const WithUseMemo = () => {
    const [name, setName] = useState("");

    const [cart, setCart] = useState([
        { id: 1, price: 1000 },
        { id: 2, price: 2500 },
        { id: 3, price: 3000 },
    ]);

    const total = useMemo(() => {
        console.log("Calculating Total amount");

        // Assume expensive calculation
        for (let i = 0; i < 100000000; i++) { }

        return cart.reduce((total, item) => total + item.price, 0);
    }, [cart]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const addCartItem = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <div>
            <h2>Total - {total}</h2>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={handleNameChange}
            />
            <button onClick={() => addCartItem({ id: cart.length + 1, price: 5000 })}>Add Item</button>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <p>Item ID: {item.id}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default WithUseMemo;
