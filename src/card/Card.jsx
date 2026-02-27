import React, { useState, useEffect } from 'react';
import { ShoppingBasket, Calendar, User, Eye } from 'lucide-react';
import './Card.css';

const Card = () => {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="cards-page">
      <div className="page-header">
        <h1>Shopping Carts</h1>
        <div className="cart-count">Total: {carts.length}</div>
      </div>

      <div className="table-container">
        <table className="big-table">
          <thead>
            <tr>
              <th>Cart ID</th>
              <th>User ID</th>
              <th>Date</th>
              <th>Products Quantity</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => (
              <tr key={cart.id}>
                <td className="id-cell">
                  <div className="cart-id-box">
                    <ShoppingBasket size={18} />
                    <span>#{cart.id}</span>
                  </div>
                </td>
                <td className="user-cell">
                  <User size={16} /> User ID: {cart.userId}
                </td>
                <td className="date-cell">
                  <Calendar size={16} /> {new Date(cart.date).toLocaleDateString()}
                </td>
                <td>
                  <span className="qty-badge">{cart.products.length} Items</span>
                </td>
                <td>
                  <button className="btn-icon view"><Eye size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;