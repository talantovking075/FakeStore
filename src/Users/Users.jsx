import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Edit, Trash2 } from 'lucide-react';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="loading">Loading Users...</div>;

  return (
    <div className="users-page">
      <div className="page-header">
        <h1>Users Management</h1>
        <button className="add-new-btn">+ Add New User</button>
      </div>

      <div className="table-container">
        <table className="big-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Username</th>
              <th>Contact Info</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="user-info-cell">
                    <div className="user-avatar">
                      {user.name.firstname[0].toUpperCase()}
                    </div>
                    <div className="user-name-box">
                      <span className="fullname">{user.name.firstname} {user.name.lastname}</span>
                      <span className="user-id">ID: #{user.id}</span>
                    </div>
                  </div>
                </td>
                <td className="username-cell">@{user.username}</td>
                <td>
                  <div className="contact-box">
                    <span><Mail size={14} /> {user.email}</span>
                    <span><Phone size={14} /> {user.phone}</span>
                  </div>
                </td>
                <td className="location-cell">
                  <MapPin size={16} /> {user.address.city}, {user.address.street}
                </td>
                <td>
                  <div className="action-group">
                    <button className="btn-icon edit"><Edit size={18} /></button>
                    <button className="btn-icon delete"><Trash2 size={18} /></button>
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

export default Users;