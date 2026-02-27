import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Users, Lock, ChevronRight, ShoppingBag, LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onLogout }) => {
  const menu = [
    { name: "Dashboard", icon: <Users size={20} />, path: "/" },
    { name: "Products", icon: <ShoppingBag size={20} />, path: "/products" },
    { name: "Carts", icon: <ShoppingCart size={20} />, path: "/carts" },
    { name: "Users", icon: <Users size={20} />, path: "/users" },
    { name: "Auth", icon: <Lock size={20} />, path: "/auth" },
  ];

  return (
    <aside className="sidebar">
      <h1>Menu</h1>
      <nav className="nav-list">
        {menu.map((item, idx) => (
          <NavLink 
            key={idx} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <div className="item-left">
              {item.icon}
              <span>{item.name}</span>
            </div>
            <ChevronRight size={18} />
          </NavLink>
        ))}
      </nav> 
      
      <button className="logout-btn" onClick={onLogout}>
        <LogOut size={20} />
        <span>Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;