// src/components/Home/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/medical-consultation_1284-25273.jpg?w=740&t=st=1727939467~exp=1727940067~hmac=84d8d688e90bd3aa75539c116186534966d03cb72de14165cffe3eaa6cc09946    e')`,
      }} // Replace with your chosen image URL
    >
      <div className="bg-white bg-opacity-80 p-12 rounded-lg shadow-xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">
          Welcome to TeleCure
        </h1>
        <p className="text-xl mb-8">
          Your trusted platform for virtual medical consultations.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            to="/admin"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/doctor"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
          >
            Doctor Dashboard
          </Link>
          <Link
            to="/patient"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Patient Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
