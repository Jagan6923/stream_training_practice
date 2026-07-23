import React, { useState } from "react";

const PropsDrilling = () => {
  let [user, setUser] = useState("Jagan");

  return (
    <div>
      <h1>Component 1</h1>
      <h2>Hello {user}</h2>
      <Component2 user={user} />
    </div>
  );
};

const Component2 = ({ user }) => {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 user={user} />
    </>
  );
};

const Component3 = ({ user }) => {
  return (
    <>
      <h2>Component 3</h2>
      <Component4 user={user} />
    </>
  );
};

const Component4 = ({ user }) => {
  return (
    <>
      <h2>Component 4</h2>
      <Component5 user={user} />
    </>
  );
};

const Component5 = ({ user }) => {
  return (
    <>
      <h2>Component 5</h2>
      <h3>Hello {user} again.........</h3>
    </>
  );
};

export default PropsDrilling;
 