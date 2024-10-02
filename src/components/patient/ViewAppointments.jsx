// src/components/Patient/ViewAppointments.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/patient/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/patient/appointments/${id}`);
      setAppointments(appointments.filter(app => app.id !== id));
    } catch (error) {
      console.error('Error cancelling appointment', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl mb-4">My Appointments</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Doctor</th>
            <th className="border px-4 py-2">Problem</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(app => (
            <tr key={app.id}>
              <td className="border px-4 py-2">{app.id}</td>
              <td className="border px-4 py-2">{app.doctorUsername}</td>
              <td className="border px-4 py-2">{app.problem}</td>
              <td className="border px-4 py-2">{app.status}</td>
              <td className="border px-4 py-2">
                {app.status === 'Pending' && (
                  <button onClick={() => handleCancel(app.id)} className="bg-red-500 text-white px-2 py-1 rounded">Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppointments;
