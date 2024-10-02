// src/components/Admin/ManagePatients.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManagePatients = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error fetching patients', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/patients/${id}`);
      setPatients(patients.filter(patient => patient.id !== id));
    } catch (error) {
      console.error('Error deleting patient', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl mb-4">Manage Patients</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td className="border px-4 py-2">{patient.id}</td>
              <td className="border px-4 py-2">{patient.username}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleDelete(patient.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePatients;
