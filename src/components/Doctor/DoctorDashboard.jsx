// src/components/Doctor/DoctorDashboard.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ManageAppointments from './ManageAppointments';

const DoctorDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl mb-4">Doctor Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="appointments" className="text-blue-600 hover:underline">My Appointments</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="w-3/4 p-4">
        <Routes>
          <Route path="appointments" element={<ManageAppointments />} />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorDashboard;
