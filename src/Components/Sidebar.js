import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div style={{ width: '200px', background: '#2c3e50', color: '#ecf0f1', padding: '20px' }}>
    <h2>Admin Panel</h2>
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/dashboard" style={{ color: '#ecf0f1' }}>📊 Dashboard</Link></li>
        <li><Link to="/users" style={{ color: '#ecf0f1' }}>👤 Users</Link></li>
        <li><Link to="/products" style={{ color: '#ecf0f1' }}>📦 Products</Link></li>
        <li><Link to="/orders" style={{ color: '#ecf0f1' }}>🧾 Orders</Link></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
