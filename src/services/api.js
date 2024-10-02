// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend base URL
});

// Add a request interceptor to include the token if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if(user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
