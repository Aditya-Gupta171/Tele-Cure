// src/components/Patient/BookAppointment.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookAppointment = () => {
  const [form, setForm] = useState({ doctorId: '', problem: '' });
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

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API endpoint
      await axios.post('http://localhost:8080/api/patient/appointments', form);
      alert('Appointment booked successfully.');
      setForm({ doctorId: '', problem: '' });
    } catch (error) {
      console.error('Error booking appointment', error);
      alert('Failed to book appointment.');
    }
  };

  return (
    <div className="max-w-md">
      <h3 className="text-2xl mb-4">Book Appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Select Doctor</label>
          <select name="doctorId" value={form.doctorId} onChange={handleChange} required className="w-full border p-2 rounded">
            <option value="">--Select Doctor--</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.username}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block">Problem Description</label>
          <textarea name="problem" value={form.problem} onChange={handleChange} required className="w-full border p-2 rounded"></textarea>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
