// src/components/Common/RoleSwitcher.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSwitcher = () => {
  const navigate = useNavigate();

  const switchRole = (role) => {
    if (role === 'logout') {
      localStorage.removeItem('user');
      navigate('/');
      return;
    }

    const username = `${role.charAt(0).toUpperCase() + role.slice(1)}User`;
    localStorage.setItem('user', JSON.stringify({ username, role }));
    navigate('/home');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white bg-opacity-90 p-4 rounded shadow-lg flex space-x-2">
      <button 
        onClick={() => switchRole('admin')} 
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
        Admin
      </button>
      <button 
        onClick={() => switchRole('doctor')} 
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
      >
        Doctor
      </button>
      <button 
        onClick={() => switchRole('patient')} 
        className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
      >
        Patient
      </button>
      <button 
        onClick={() => switchRole('logout')} 
        className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default RoleSwitcher;
