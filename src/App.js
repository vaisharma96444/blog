import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Blog from './Blog';
import CreateBlog from './CreateBlog';
import { BlogProvider } from './BlogContext'; // Import the BlogProvider

import './style.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <BlogProvider> {/* Wrap the Router with BlogProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </Router>
      </BlogProvider> {/* End of BlogProvider */}
    </div>
  );
}

export default App;
