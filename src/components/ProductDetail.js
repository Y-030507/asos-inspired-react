import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from './CartContext';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [currentImage, setCurrentImage] = useState(0);  // For gallery

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    if (!selectedSize) return alert('Select a size');
    addToCart(product, selectedSize);
    alert('Added to cart!');
  };

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <main>
      <div className="product-detail">
        <div className="gallery">
          <button onClick={prevImage}>Prev</button>
          <img src={product.images[currentImage]} alt={product.name} />
          <button onClick={nextImage}>Next</button>
        </div>
        <div className="details">
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="">Select Size</option>
            {product.size.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;