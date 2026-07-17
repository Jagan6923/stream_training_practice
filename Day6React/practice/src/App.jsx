import React from 'react'
import MarketStock from './MarketStock'
import Sample from './Sample'
import styles from './h2.module.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
const App = () => {

  return (
    <>
      <Routes>
        <Route path="/market" element={<MarketStock />} />
        <Route path="/sam" element={<Sample />} />
      </Routes>
    </>
  )
}

export default App
