import React, { useState } from 'react';
import { useCart } from './CartContext';

function Checkout() {
  const { cart, getTotal } = useCart();
  const [form, setForm] = useState({ name: '', address: '', card: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checkout (no real payment)
    alert('Order placed! (Simulated)');
  };

  return (
    <main>
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        {cart.map(item => <p key={item.id}>{item.name} x {item.quantity} - ${item.price * item.quantity}</p>)}
        <h3>Total: ${getTotal().toFixed(2)}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Card Number"
          value={form.card}
          onChange={(e) => setForm({ ...form, card: e.target.value })}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </main>
  );
}

export default Checkout;