import React from 'react';
import { ShoppingBag, Users, ShoppingCart, DollarSign } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { id: 1, title: "Total Sales", value: "$12,450", icon: <DollarSign size={24} />, color: "#38bdf8" },
    { id: 2, title: "Products", value: "154", icon: <ShoppingBag size={24} />, color: "#fb7185" },
    { id: 3, title: "Customers", value: "1,205", icon: <Users size={24} />, color: "#34d399" },
    { id: 4, title: "Orders", value: "48", icon: <ShoppingCart size={24} />, color: "#fbbf24" },
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Xush kelibsiz! Bugungi ko'rsatkichlar bilan tanishing.</p>
      </header>

      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.id} className="stat-card">
            <div className="stat-info">
              <span className="stat-title">{item.title}</span>
              <span className="stat-value">{item.value}</span>
            </div>
            <div className="stat-icon" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-content-placeholder">
        <h3>Recent Activity</h3>
        <div className="placeholder-box">Tez orada bu yerda grafiklar va so'nggi amallar paydo bo'ladi...</div>
      </div>
    </div>
  );
};

export default Dashboard;