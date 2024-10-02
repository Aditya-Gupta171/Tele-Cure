// src/components/Patient/ViewDoctors.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/patient/doctors');
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <h3 className="text-2xl mb-4">Available Doctors</h3>
      <div className="grid grid-cols-3 gap-4">
        {doctors.map(doctor => (
          <div key={doctor.id} className="border p-4 rounded">
            <h4 className="text-xl">{doctor.username}</h4>
            {/* Add more doctor details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewDoctors;
