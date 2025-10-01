import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left - Logo */}
        <div className="footer-logo">
          <img src="/logo.png" alt="Logo" />
        </div>

        {/* Middle - Links */}
        <div className="footer-links">
          <Link to="/" className="footer-link">Menu</Link>
          <Link to="/fresh-fish" className="footer-link">Fresh Fish</Link>
          <Link to="/sea-food" className="footer-link">Sea Food</Link>
          <Link to="/small-fish" className="footer-link">Small Fish</Link>
        </div>

        {/* Right - Address */}
        <div className="footer-contact">
          <p>123 Ocean Street, Fish City</p>
          <p>WhatsApp: +91 98765 43210</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All Rights Reserved | Provided by <span>Pulpul Digital</span></p>
      </div>
    </footer>
  );
};

export default Footer;
