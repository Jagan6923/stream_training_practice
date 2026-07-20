import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [name, setName] = useState("Aaditya");
  const [age, setAge] = useState(20);

  const ageHandler = () => {
    setAge(21);
  };

  useEffect(() => {
    console.log("This method is called on every render");
  });

  useEffect(() => {
    console.log("This method is called only for the first time");
  }, []);

  useEffect(() => {
    console.log("This method is called based on the dependancy - age ");
  }, [age]);

  return (
    <div>
      {console.log("Component is rendered")}
      <h1>Life Cycle</h1>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <button onClick={ageHandler}>Update Age</button>
      <button onClick={() => setName("Sandeep")}>Update Name</button>
    </div>
  );
};

export default LifeCycle;