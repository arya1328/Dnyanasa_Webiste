import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h5>Contact</h5>
          <p>Email: contact@dnyanasa.org</p>
          <p>Phone: +91 12345 67890</p>
        </div>
        <div className="footer-column">
          <h5>Address</h5>
          <p>Dnyanasa Foundation</p>
          <p>123 Knowledge Street</p>
          <p>Pune, Maharashtra 411001</p>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>

      <div className="footer-credit">
        <p>© {new Date().getFullYear()} Dnyanasa Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
