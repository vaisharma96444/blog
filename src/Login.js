// File: Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <- Update import statement
import './style.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const defaultUsername = '111';
  const defaultPassword = '123';
  const navigate = useNavigate(); // <- Use useNavigate() hook

  const handleLogin = () => {
    if (username === defaultUsername && password === defaultPassword) {
      alert('Login successful!');
      // Redirect to Dashboard after successful login
      navigate('/blog');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='mainlogin'>
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-container">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;

























