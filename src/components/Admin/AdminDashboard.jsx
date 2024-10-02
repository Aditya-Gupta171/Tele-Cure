// src/components/Admin/AdminDashboard.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ManageDoctors from './ManageDoctors';
import ManagePatients from './ManagePatients';
import ManageAppointments from './ManageAppointments';

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl mb-4">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="doctors" className="text-blue-600 hover:underline">Manage Doctors</Link>
          <Link to="patients" className="text-blue-600 hover:underline">Manage Patients</Link>
          <Link to="appointments" className="text-blue-600 hover:underline">Manage Appointments</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="w-3/4 p-4">
        <Routes>
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="patients" element={<ManagePatients />} />
          <Route path="appointments" element={<ManageAppointments />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
