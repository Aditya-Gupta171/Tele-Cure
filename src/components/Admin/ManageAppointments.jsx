// src/components/Admin/ManageAppointments.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments', error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  const handleAssign = async (appointmentId, doctorId) => {
    try {
      await axios.put(`http://localhost:8080/api/admin/appointments/${appointmentId}/assign`, { doctorId });
      fetchAppointments();
    } catch (error) {
      console.error('Error assigning doctor', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl mb-4">Manage Appointments</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Appointment ID</th>
            <th className="border px-4 py-2">Patient</th>
            <th className="border px-4 py-2">Problem</th>
            <th className="border px-4 py-2">Assigned Doctor</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id}>
              <td className="border px-4 py-2">{app.id}</td>
              <td className="border px-4 py-2">{app.patientUsername}</td>
              <td className="border px-4 py-2">{app.problem}</td>
              <td className="border px-4 py-2">{app.doctorUsername || 'Unassigned'}</td>
              <td className="border px-4 py-2">
                {!app.doctorId && (
                  <select onChange={(e) => handleAssign(app.id, e.target.value)} defaultValue="">
                    <option value="" disabled>Select Doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>{doctor.username}</option>
                    ))}
                  </select>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAppointments;
