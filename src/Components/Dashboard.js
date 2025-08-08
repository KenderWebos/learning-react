import React from 'react';

const Dashboard = () => {
  const data = {
    users: Math.floor(Math.random() * 1000),
    products: Math.floor(Math.random() * 500),
    orders: Math.floor(Math.random() * 300),
    revenue: (Math.random() * 10000).toFixed(2),
  };

  return (
    <div>
      <h1>📊 Dashboard</h1>
      <ul>
        <li>Total Users: {data.users}</li>
        <li>Total Products: {data.products}</li>
        <li>Total Orders: {data.orders}</li>
        <li>Revenue: ${data.revenue}</li>
      </ul>
    </div>
  );
};

export default Dashboard;
