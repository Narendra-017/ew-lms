import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaYoutube, FaTelegram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://t.me/joinchat/3qDdcVA7NR1lOGQ1" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://www.linkedin.com/company/engineers-world-pvt-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/engineer_s__world/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@engineers_world_pvt" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/team">Our Team</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email:engineersworldofficial@gmail.com</p>
          <p>Phone: +91 7997700218</p>
          <p>Address: Venkampet road, sircilla, Telangana, 505301</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Engineers World. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;