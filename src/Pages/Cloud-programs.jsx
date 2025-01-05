import React from 'react';
import './Cloud-programs.css';

const Cloud = () => {
    return (
        <div className="main-container">
            <div className="textarea">
                <h4>Internship &gt; CSE/IT &gt; Cloud computing</h4>
                <h1>Cloud Computing Training</h1>
                <p>
                With our program on Cloud Computing, you will gain the skills to design, implement, and manage scalable cloud-based solutions. Develop expertise in cloud platforms such as AWS, Azure, and Google Cloud, along with containerization, serverless computing, and cloud security. Start your journey toward becoming a highly sought-after Cloud Computing Specialist and excel in building and optimizing cloud infrastructure for businesses.
                </p>
                <button id="enroll">Enroll for this program</button>
            </div>
            <div className="image">
                <img 
                    src="/images/Cloud1.jpg" 
                    alt="Cloud computing Training" 
                />
            </div>
        </div>
    );
};

export default Cloud;
