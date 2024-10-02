// src/components/Doctor/ManageAppointments.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/doctor/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/doctor/appointments/${id}/complete`);
      setAppointments(appointments.map(app => app.id === id ? { ...app, status: 'Completed' } : app));
    } catch (error) {
      console.error('Error updating appointment', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl mb-4">My Appointments</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Patient</th>
            <th className="border px-4 py-2">Problem</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id}>
              <td className="border px-4 py-2">{app.id}</td>
              <td className="border px-4 py-2">{app.patientUsername}</td>
              <td className="border px-4 py-2">{app.problem}</td>
              <td className="border px-4 py-2">{app.status}</td>
              <td className="border px-4 py-2">
                {app.status === 'Assigned' && (
                  <button onClick={() => handleUpdate(app.id)} className="bg-green-500 text-white px-2 py-1 rounded">Mark as Completed</button>
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
