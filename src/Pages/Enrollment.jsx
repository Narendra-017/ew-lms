import React from 'react';
import './Enrollment.css'; 

const Enrollment = () => {
    return (
        <div>
            <h1>Affordable and Student Friendly Prices</h1>
            <div className="card-container">
                <div className="card1">
                    <h4>SELF PACED</h4>
                    <h3>₹5000</h3>
                    <ul>
                        <li>Recorded Lectures</li>
                        <li>Real Time Projects</li>
                        <li>4+ Hrs of Live Sessions</li>
                        <li>One On One Doubt Sessions</li>
                        <li>Certifications</li>
                        <li>Mentor Support</li>
                    </ul>
                    <button className="pay-btn">Pay Now</button>
                </div>
                
                <div className="card2">
                    <h4>MENTOR LED</h4>
                    <h3>₹9000</h3>
                    <ul>
                        <li>Recorded Lectures</li>
                        <li>Real Time Projects</li>
                        <li>4+ Hrs of Live Sessions</li>
                        <li>One On One Doubt Sessions</li>
                        <li>Certifications</li>
                        <li>Mentor Support</li>
                    </ul>
                    <button className="pay-btn">Pay Now</button>
                </div>

                <div className="card3">
                    <h4>ADVANCE</h4>
                    <h3>₹13000</h3>
                    <ul>
                        <li>Recorded Lectures</li>
                        <li>Real Time Projects</li>
                        <li>4+ Hrs of Live Sessions</li>
                        <li>One On One Doubt Sessions</li>
                        <li>Certifications</li>
                        <li>Mentor Support</li>
                        <li>Placement Guidance</li>
                        <li>Interview Assistance</li>
                    </ul>
                    <button className="pay-btn">Pay Now</button>
                </div>
            </div>
        </div>
    );
}

export default Enrollment;
