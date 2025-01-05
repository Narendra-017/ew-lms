import React from 'react';
import './Web-programs.css';

const WebDevelopment = () => {
    return (
        <div className="main-container">
            <div className="textarea">
                <h4>Internship &gt; CSE/IT &gt; Web Development</h4>
                <h1>Web Development Training</h1>
                <p>
                    With our program on Full-Stack Web Development you will be able
                    to code, design, and program commercial-grade websites. Develop
                    your skills in HTML5, CSS & Backend Programming and start your
                    career as a standout Full-Stack Web Developer.
                </p>
                <button id="enroll">Enroll for this program</button>
            </div>
            <div className="image">
                <img 
                    src="/images/Web1.jpg" 
                    alt="Web Development Training" 
                />
            </div>
        </div>
    );
};

export default WebDevelopment;
