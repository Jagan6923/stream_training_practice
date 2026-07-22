import React, { useState } from "react";

const WithoutUseMemo = () => {
  const [name, setName] = useState("");

  const [cart] = useState([
    { id: 1, price: 1000 },
    { id: 2, price: 2500 },
    { id: 3, price: 3000 },
  ]);

  const calculateTotal = () => {
    console.log("Calculating Total amount");

    // Assume expensive calculation
    for (let i = 0; i < 100000000; i++) {}

    return cart.reduce((total, item) => total + item.price, 0);
  };

  const total = calculateTotal();

  return (
    <div>
      <h2>Total - {total}</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default WithoutUseMemo;
 