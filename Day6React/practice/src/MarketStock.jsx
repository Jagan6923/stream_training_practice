import React, { useState } from "react";
import "./App.css";
const MarketStock = () => {
  let [stock, setStock] = useState(0);

  const stockHandler = (amount = 1) => {
    // console.log("This function is called only after the button click");
    // stock = stock + 1;
    // setStock(stock + 1); // 1
    // setStock(stock + 1); // 1
    // setStock(stock + 1); // 1

    setStock((prev) => prev + amount); // 0 + 1 = 1
    // setStock((prev) => prev + 1); // 1 + 1 = 2
    // setStock((prev) => prev + 1); // 2 + 1 = 3

    // console.log(stock);
  };

  //   const sayHello = () => {
  //     console.log("Helloooooooo");
  //   };
  const removeHandler = (amount = 1) => {
    setStock((prev) => (prev > 0 ? prev - amount : 0));
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Market Stock</h1>
      <h2>The stock is {stock}</h2>
      <button className="btn btn-info" onClick={stockHandler}>
        Add Stock
      </button>
      <button className="btn btn-info" onClick={removeHandler} style={{ marginLeft: "5px" , backgroundColor: "red" }}>
        Remove Stock
      </button>
      <button className="btn btn-info" onClick={() => stockHandler(50)}>Add 50</button>
      <button className="btn btn-info" onClick={() => stockHandler(100)}>Add 100</button>

      <button className="btn btn-info" onClick={() => removeHandler(50)}>Remove 50</button>
      <button className="btn btn-info" onClick={() => removeHandler(100)}>Remove 100</button>
      {/* <button
        style={{ marginLeft: "5px" }}
        className="btn btn-info"
        onClick={sayHello()}
      >
        Say Hello
      </button> */}
    </div>
  );
};

export default MarketStock;
