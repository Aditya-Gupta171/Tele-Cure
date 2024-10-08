// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Update this import
// import './styles/index.css';
import './index.css'
import App from './App';

// Create a root.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
