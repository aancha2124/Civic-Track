import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <ul className="footer-links">
        <li><a href="#">About</a></li>
        <li><a href="#">Report Issue</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p className="footer-copyright">
        &copy; 2025 CivicTrack | A Smart India Hackathon Project
      </p>
    </footer>
  );
}

export default Footer;