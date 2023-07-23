import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <Link to="/blog">Go to Blog</Link>
    </div>
  );
};

export default Dashboard;
