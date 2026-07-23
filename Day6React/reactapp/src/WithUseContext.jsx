import React, { createContext, useState } from "react";
import { useContext } from "react";

const userContext = createContext();

const WithUseContext = () => {
  let [user, setUser] = useState("Priya");

  return (
    <userContext.Provider value={user}>
      <h1>Component 1</h1>
      <h2>Hello {user}</h2>
      <Component2 />
    </userContext.Provider>
  );
};

const Component2 = () => {
  return (
    <>
      <h2>Component 2</h2>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  return (
    <>
      <h2>Component 3</h2>
      <Component4 />
    </>
  );
};

const Component4 = () => {
  return (
    <>
      <h2>Component 4</h2>
      <Component5 />
    </>
  );
};

const Component5 = () => {
  const user = useContext(userContext);
  return (
    <>
      <h2>Component 5</h2>
      <h3>Hello {user} again.........</h3>
    </>
  );
};

export default WithUseContext;
 



// - Activity 
// - Build a theme switcher for react app using context API 
// user clicks a button, the theme should toggle between light and dark, and the changes should reflect across multiple components
 
// create a file - ThemeContext.jsx - createContext()
// create a provider - light/dark - toggle them - function 
// Wrap your app with ThemeProvider
 
// Use UseContext - 3 components 
// - Restaurant 
// - Movies 
// - 