import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/movie">Movies</Link>
        <Link to="/hotel">Hotels</Link>
        <Link to="/cake">Cakes</Link>
        <Link to="/car1">Cars</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
        <Link to="/forms">Form</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/coupon">Coupon</Link>
      </nav>
      <nav>
      </nav>
    </div>
  )
}

export default Header
