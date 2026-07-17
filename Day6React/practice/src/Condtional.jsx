import React from "react";

const Conditional = () => {
  let login = true; // data from the server
  let username = "Deepika";
  let cricketers = ["Virat", "Dhoni", "Rohit"];

  if (login) {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <h2 className={username == "" ? "text-info" : "text-success"}>
          Welcome to the store - {username == "" ? "Guest" : username}
        </h2>
        {cricketers.length !== 0 && <h3>I like {cricketers.join(", ")}</h3>}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <h2>Please Login......!!!!</h2>
      </div>
    );
  }
};

export default Conditional;
 