import React, { useState, useEffect } from 'react';
import { Eye, Trash2, Edit } from 'lucide-react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>All Products</h1>
        <button className="add-new-btn">+ Add New Product</button>
      </div>

      <div className="table-container">
        <table className="big-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td className="id-cell">#{item.id}</td>
                <td className="img-cell">
                  <div className="img-box">
                    <img src={item.image} alt={item.title} />
                  </div>
                </td>
                <td className="title-cell">
                  <div className="title-text">{item.title}</div>
                </td>
                <td>
                  <span className="badge">{item.category}</span>
                </td>
                <td className="price-cell">${item.price}</td>
                <td>
                  <div className="action-group">
                    <button className="btn-icon view"><Eye size={20} /></button>
                    <button className="btn-icon edit"><Edit size={20} /></button>
                    <button className="btn-icon delete"><Trash2 size={20} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;