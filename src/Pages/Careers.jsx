import React, { useState, useEffect } from 'react';
import './Careers.css';  


const Careers = () => {
  return (
    <div className="careers-page">
      
      <div className="main-container">
        
        <div className="button-container">
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>

        
        <div className="cards-container">
          <a href="hr.jsx" >
            <div className="hr">HUMAN RESOURCES</div>
          </a>
          <a href="web.html">
            <div className="web">WEB DEVELOPER</div>
          </a>
          <a href="cyber.html">
            <div className="cyber">CYBER SECURITY</div>
          </a>
          <a href="cloud.html">
            <div className="cloud">CLOUD COMPUTING</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
