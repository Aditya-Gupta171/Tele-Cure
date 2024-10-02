// src/components/Admin/ManageDoctors.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/admin/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admin/doctors/${id}`);
      setDoctors(doctors.filter(doctor => doctor.id !== id));
    } catch (error) {
      console.error('Error deleting doctor', error);
    }
  };

  return (
    <div>
      <h3 className="text-2xl mb-4">Manage Doctors</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id}>
              <td className="border px-4 py-2">{doctor.id}</td>
              <td className="border px-4 py-2">{doctor.username}</td>
              <td className="border px-4 py-2">
                <button onClick={() => handleDelete(doctor.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctors;
