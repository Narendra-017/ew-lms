import React from 'react';
import './Hr-programs.css';

const Hr = () => {
    return (
        <div className="main-container">
            <div className="textarea">
                <h4>Internship &gt; CSE/IT &gt;Human Resources</h4>
                <h1>Human Resources Training</h1>
                <p>
                With our program on Human Resources, you will develop the skills to manage, nurture, and optimize an organization's workforce. Learn key concepts in recruitment, employee relations, performance management, compensation, and HR analytics. Gain practical experience in creating a positive organizational culture and supporting talent development. Start your career as a skilled HR professional, driving success and fostering a thriving workplace environment.
                </p>
                <button id="enroll">Enroll for this program</button>
            </div>
            <div className="image">
                <img 
                    src="/images/Hr1.jpg" 
                    alt="Human Resources Training" 
                />
            </div>
        </div>
    );
};

export default Hr;
