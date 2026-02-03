import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import products from '../data/products.json';

function Products() {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);  // setFilteredProducts is used in useEffect below
  const [filters, setFilters] = useState({
    price: 'All',
    size: 'All',
    color: 'All',
    category: searchParams.get('category') || 'All',
    search: searchParams.get('search') || ''
  });

  useEffect(() => {
    let filtered = products.filter(p => {
      return (filters.category === 'All' || p.category === filters.category) &&
             (filters.price === 'All' || (filters.price === '$0-50' ? p.price <= 50 : p.price > 50)) &&
             (filters.size === 'All' || p.size.includes(filters.size)) &&
             (filters.color === 'All' || p.color === filters.color) &&
             (filters.search === '' || p.name.toLowerCase().includes(filters.search.toLowerCase()));
    });
    setFilteredProducts(filtered);  // Explicitly using setFilteredProducts here
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <main>
      <aside className="filters">
        <h3>Filters</h3>
        <select name="price" value={filters.price} onChange={handleFilterChange}>
          <option>Price: All</option><option>$0-50</option><option>$50+</option>
        </select>
        <select name="size" value={filters.size} onChange={handleFilterChange}>
          <option>Size: All</option><option>S</option><option>M</option><option>L</option>
        </select>
        <select name="color" value={filters.color} onChange={handleFilterChange}>
          <option>Color: All</option><option>Blue</option><option>Red</option><option>Black</option>
        </select>
        <select name="category" value={filters.category} onChange={handleFilterChange}>
          <option>Category: All</option><option>Men</option><option>Women</option><option>Sale</option><option>New Arrivals</option>
        </select>
      </aside>
      <section className="product-list">
        {filteredProducts.map(p => (
          <div key={p.id} className="product-card">
            <img src={p.images[0]} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Products;