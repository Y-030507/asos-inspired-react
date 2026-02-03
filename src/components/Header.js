import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Header() {
  const { cart } = useCart();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Simple search: redirect to products with query (expand in Products.js)
    window.location.href = `/products?search=${search}`;
  };

  return (
    <header>
      <nav>
        <div className="logo">MyShop</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products?category=Men">Men</Link></li>
          <li><Link to="/products?category=Women">Women</Link></li>
          <li><Link to="/products?category=Sale">Sale</Link></li>
          <li><Link to="/products?category=New Arrivals">New Arrivals</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cart">Cart ({cart.length})</Link></li>
        </ul>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </nav>
    </header>
  );
}

export default Header;