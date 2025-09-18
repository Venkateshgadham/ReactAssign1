import React from 'react';
import './spinner.css';

const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  </div>
);

export default LoadingSpinner;
