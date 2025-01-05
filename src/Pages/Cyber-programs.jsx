import React from 'react';
import './Cyber-programs.css';

const Cyber = () => {
    return (
        <div className="main-container">
            <div className="textarea">
                <h4>Internship &gt; CSE/IT &gt;Cyber Security</h4>
                <h1>Cyber Security Training</h1>
                <p>With our program on Cyber Security, you will acquire the knowledge to protect networks, systems, and data from malicious attacks. Master essential skills in threat analysis, ethical hacking, risk management, and network security. Gain hands-on experience with security tools and techniques, and prepare for a successful career as a Cyber Security Specialist, safeguarding digital environments for organizations worldwide.
                
                </p>
                <button id="enroll">Enroll for this program</button>
            </div>
            <div className="image">
                <img 
                    src="/images/Cyber1.jpg" 
                    alt="Cyber Security Training" 
                />
            </div>
        </div>
    );
};

export default Cyber;
