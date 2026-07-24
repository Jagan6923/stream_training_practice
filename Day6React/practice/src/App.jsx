import Admin from './Admin'
import Dashboard from './Dashboard'
import Callback from './Callback'
import MarketStock from './MarketStock'
import Sample from './Sample'
import styles from './h2.module.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import WithoutUseMemo from './WithoutUseMemo';
import WithUseMemo from './WithUseMemo';
import useToggle from './useToggle';
import PropsDrilling from './PropsDrilling'
import WithUseContext from './WithUseContext'
import Counter from './Counter'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'

import { useState, useCallback } from 'react';
const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  let { isOpen, toggle } = useToggle();

  const greet = useCallback(() => {
    console.log(`Hello, Good Morning!`);
  }, [count]);


  // const greet = () => {
  // //   console.log(`Hello, Good Morning! - without useCallback`);
  // }

  return (
    <>
      {/* <Routes>
        <Route path="/market" element={<MarketStock />} />
        <Route path="/sam" element={<Sample />} />
        <Route path="/" element={<Home />} />
      </Routes> */}
      {/* <WithoutUseMemo /> */}
      {/* <WithUseMemo /> */}

      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      {count} */}
      {/* <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

      {/* <Callback greet={greet} /> */}

      {/* <button onClick={toggle}>
        {isOpen ? 'Hide description' : 'View description'}        
      </button>

      <p>{isOpen.toString()}</p>

      {isOpen && <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, rem.</h1>} */}

      {/* <PropsDrilling/> */}
      {/* <WithUseContext/> */}

      {/* <Counter /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-user" element={
          <ProtectedRoute allowedRoles={["Admin"]}>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path="/counter" element={

          <ProtectedRoute allowedRoles={["Admin", "User"]}>
            <Counter />
          </ProtectedRoute>
        } />
      </Routes>

    </>
  )
}

export default App
