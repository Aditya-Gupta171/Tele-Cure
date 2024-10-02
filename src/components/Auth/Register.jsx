// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', role: 'patient' });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API endpoint
      await axios.post('http://localhost:8080/api/auth/register', form);
      alert('Registration successful. Please login.');
    } catch (error) {
      alert('Registration failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">Register</h2>
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
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            {/* Admin registration can be restricted or handled separately */}
          </select>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
