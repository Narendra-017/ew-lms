import React from "react";
import "./Programs.css";

function Programs() {

  return (
    <main>
      <section className="course-container">
        <h1>Internship Program</h1>
        <h2>Domains</h2>
        <div className="courses">
          <div className="cyber-security-course card">
            <h3>Cyber Security</h3>
            <p>Cybersecurity is the practice of protecting systems, networks, and data from cyber threats and attacks. It involves securing sensitive information, preventing unauthorized access, and ensuring the integrity and availability of digital assets. A strong cybersecurity framework is essential for safeguarding businesses and individuals in the digital age.</p>
            <button>Know More <span>&rarr;</span></button>
          </div>
          <div className="web-development-course card">
            <h3>Web Development</h3>
            <p>Web development involves building and maintaining websites, focusing on creating functional, visually appealing, and user-friendly online experiences. It combines coding, design, and innovation to bring ideas to life on the web.</p>
            <button>Know More <span>&rarr;</span></button>
          </div>
          <div className="cloud-computing card">
            <h3>Cloud Computing</h3>
            <p>Cloud computing delivers on-demand access to data, applications, and storage over the internet. It enables businesses and individuals to work flexibly, scale efficiently, and innovate without managing physical infrastructure.</p>
            <button>Know More <span>&rarr;</span></button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Programs;