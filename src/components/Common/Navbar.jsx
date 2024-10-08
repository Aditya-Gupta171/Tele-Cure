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
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/home" className="font-bold text-xl">
        TeleCure
      </Link>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to={`/${user.role}`} className="hover:underline capitalize">
              {user.role}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
