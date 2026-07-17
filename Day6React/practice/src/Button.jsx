import React from "react";

const Button = (props) => {
  return (
    <button
      className="btn btn-info ms-3"
      onClick={() => {
        props.stockHandler(props.type, props.val);
      }}
    >
      {props.type} Stock with {props.val}
    </button>
  );
};

export default Button;
 