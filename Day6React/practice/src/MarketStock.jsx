import React, { useState } from "react";
import Button from "./Button";
import "./App.css";
const MarketStock = () => {
  let [stock, setStock] = useState(0);

  const stockHandler = (type, val) => {
    // console.log("This function is called only after the button click");
    // stock = stock + 1;
    // setStock(stock + 1); // 1
    // setStock(stock + 1); // 1
    // setStock(stock + 1); // 1
    if (type == "Add") {
      setStock((prev) => prev + val); // 0 + 1 = 1
    } else {
      setStock((prev) => (prev < val ? 0 : prev - val)); // 0 + 1 = 1
    }
    // setStock((prev) => prev + 1); // 0 + 1 = 1
    // setStock((prev) => prev + 1); // 1 + 1 = 2
    // setStock((prev) => prev + 1); // 2 + 1 = 3

    // console.log(stock);
  };

  //   const sayHello = () => {
  //     console.log("Helloooooooo");
  //   };

  return (
    <div>
      <h1>Market Stock</h1>
      <h2>The stock is {stock}</h2>
      {/* <button className="btn btn-info" onClick={stockHandler}>
        Add Stock
      </button> */}

      <Button val={50} type="Add" stockHandler={stockHandler} />
      <Button val={100} type="Add" stockHandler={stockHandler} />
      <Button val={50} type="Reduce" stockHandler={stockHandler} />
      <Button val={100} type="Reduce" stockHandler={stockHandler} />
      <Button val={7} type="Add" stockHandler={stockHandler} />
      {/* <button
        className="btn btn-info"
        onClick={() => {
          stockHandler("add", 50);
        }}
      >
        Add Stock with 50
      </button>
      <button
        className="btn btn-info ms-3"
        onClick={() => {
          stockHandler("add", 100);
        }}
      >
        Add Stock with 100
      </button>
      <button
        className="btn btn-info ms-3"
        onClick={() => {
          stockHandler("reduce", 50);
        }}
      >
        Reduce Stock with 50
      </button>
      <button
        className="btn btn-info ms-3"
        onClick={() => {
          stockHandler("reduce", 100);
        }}
      >
        Reduce Stock with 100
      </button> */}
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
 