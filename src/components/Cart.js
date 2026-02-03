import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <main>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={`${item.id}-${item.size}`} className="cart-item">
              <img src={item.images[0]} alt={item.name} />
              <h3>{item.name} (Size: {item.size})</h3>
              <p>${item.price} x {item.quantity}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, item.size, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
            </div>
          ))}
          <h2>Total: ${getTotal().toFixed(2)}</h2>
          <Link to="/checkout"><button>Proceed to Checkout</button></Link>
        </div>
      )}
    </main>
  );
}

export default Cart;