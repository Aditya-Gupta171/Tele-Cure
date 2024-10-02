// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '', role: 'patient' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API endpoint
      const response = await axios.post('http://localhost:8080/api/auth/login', form);
      localStorage.setItem('user', JSON.stringify(response.data));
      if(response.data.role === 'admin') {
        navigate('/admin');
      } else if(response.data.role === 'doctor') {
        navigate('/doctor');
      } else {
        navigate('/patient');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Username</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} required className="w-full border p-2 rounded"/>
        </div>
        <div>
          <label className="block">Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required className="w-full border p-2 rounded"/>
        </div>
        <div>
          <label className="block">Role</label>
          <select name="role" value={form.role} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="admin">Admin</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
