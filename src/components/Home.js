import React from 'react';
import products from '../data/products.json';

function Home() {
  return (
    <main>
      <section className="hero">
        <img src="/images/hero-banner.jpg" alt="Hero" />
        <h1>Welcome to MyShop</h1>
      </section>
      <section>
        <h2>Featured</h2>
        <div className="product-list">
          {products.slice(0, 4).map(p => (
            <div key={p.id} className="product-card">
              <img src={p.images[0]} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;