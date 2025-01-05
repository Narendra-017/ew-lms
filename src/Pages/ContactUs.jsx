import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="text-area">
        <h1>Contact Us</h1>
        <h2>Address</h2>
        <p>Engineers World Pvt LTD,</p>
        <h2>Phone Numbers</h2>
        <h2>+9999999999</h2>
        <h2>Email</h2>
        <p>support@EngineersWorld.com</p>
      </div>

      <div className="contact-form">
        <h3>Get In Touch</h3>
        <br />
        <input type="text" id="name" placeholder="Name" required />
        <br />
        <input type="email" id="mail" placeholder="Email" required />
        <br />
        <input type="text" id="mobile-number" placeholder="Phone Number" required />
        <br />
        <input type="text" id="institute" placeholder="Institute" required />
        <br />
        <button id="request">Request Callback</button>
        <p>
          By Submitting, I agree to <span>terms & conditions</span> and{" "}
          <span>privacy policy</span>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
