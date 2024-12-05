import React from "react";
import "./Home.css";

function Home() {
  const handleNavigation = () => {
    window.location.href = "/Components/Footer.jsx";
  };

  return (
    <main className="homepage-container">
      <section className="heropage-container">
        <div className="heropage">
          <h1>DON'T STUDY FOR THE REAL WORLD, PREPARE FOR THE REAL WORLD.</h1>
          <p>
            At EW's Academy, you will not just get the best theoretical education,
            but we will also give you the required skills and industry exposure to
            be successful in your field.
          </p>
          <button onClick={handleNavigation}>Know More</button>
        </div>
        <div className="animation">
          
        </div>
      </section>
    </main>
  );
}

export default Home;
