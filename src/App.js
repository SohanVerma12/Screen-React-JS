/*
/!*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*!/


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data);
      alert('Registered successfully!');
    } catch (err) {
      console.error(err.response.data.message);
      alert('Registration failed!');
    }
  };

  return (
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <br />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <br />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
  );
}

export default App;
*/

// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          {currentPage === 'login' ? (
              <button onClick={() => navigateTo('register')}>Go to Register</button>
          ) : (
              <button onClick={() => navigateTo('login')}>Go to Login</button>
          )}
        </div>
      </Router>
  );
}

export default App;


/*

// App.js
import React, { useState } from 'react';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
      <div>
        {currentPage === 'login' ? (
            <div>
              <Login />
              <button onClick={() => navigateTo('register')}>Go to Register</button>
            </div>
        ) : (
            <div>
              <Register />
              <button onClick={() => navigateTo('login')}>Go to Login</button>
            </div>
        )}
      </div>
  );
}

export default App;
*/
