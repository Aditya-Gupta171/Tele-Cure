// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Admin/AdminDashboard';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import PatientDashboard from './components/Patient/PatientDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/doctor/*" element={<DoctorDashboard />} />
          <Route path="/patient/*" element={<PatientDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
