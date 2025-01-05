import React from "react";
import './About.css';

const About = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="section1">
        <img src="/images/About1.jpg" alt="A globe symbolizing our aim and accomplishments" />
        <h1>Aim & Accomplish</h1>
      </div>

      {/* Section 2 */}
      <div className="section2">
        <h1 className="vision-title">Our Vision</h1>
        <img src="/images/About2.jpg" alt="Vision of inspiring engineers" />
        <p className="vision-text">
          Our vision is to inspire engineers of today, <br />
          expand their knowledge, <br />
          foster their innovation, <br />
          nurture their professional growth, <br />
          and equip them with the cutting-edge skills <br />
          required to tackle real-world challenges <br />
          and drive transformative impact across industries.
        </p>
      </div>

      {/* Section 3 */}
      <div className="section3">
        <h1 className="mission-title">Our Mission</h1>
        <img src="/images/About3.jpg" alt="Mission to redefine engineering education" />
        <p className="mission-text">
          Our mission is to give aspiring engineers the chance to learn and
          upskill themselves. <br />
          Through hands-on internships and industry-relevant projects, <br />
          we ensure that they step into the workforce fully equipped for
          success. <br />
          Our mission is to redefine engineering education, <br />
          bringing it back to its core essence: empowering individuals with
          practical knowledge and innovation.
        </p>
      </div>

      {/* Section 4 */}
      <div className="section4">
        <h1 className="goal-title">Our Goal</h1>
        <img src="/images/About4.jpg" alt="Goal of breaking the marks-success link" />
        <p className="goal-text">
          We aim to break the link between marks and success <br />
          and instead place emphasis on the connection between skills and
          success. <br />
          Our goal is to revolutionize the educational landscape, <br />
          transforming teaching into a practice that equips students with
          practical, job-ready skills. <br />
          Together, we hope to build a future where education leads to
          real-world impact.
        </p>
      </div>
    </div>
  );
};

export default About;
