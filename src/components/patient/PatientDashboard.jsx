// src/components/Patient/PatientDashboard.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BookAppointment from './BookAppointment';
import ViewAppointments from './ViewAppointments';
import ViewDoctors from './ViewDoctors';

const PatientDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-xl mb-4">Patient Panel</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="doctors" className="text-blue-600 hover:underline">View Doctors</Link>
          <Link to="book" className="text-blue-600 hover:underline">Book Appointment</Link>
          <Link to="appointments" className="text-blue-600 hover:underline">My Appointments</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="w-3/4 p-4">
        <Routes>
          <Route path="doctors" element={<ViewDoctors />} />
          <Route path="book" element={<BookAppointment />} />
          <Route path="appointments" element={<ViewAppointments />} />
        </Routes>
      </div>
    </div>
  );
};

export default PatientDashboard;
