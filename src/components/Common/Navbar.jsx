// src/components/Common/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold">TeleCure</Link>
      {user ? (
        <div className="flex items-center space-x-4">
          <span>Welcome, {user.role}</span>
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
