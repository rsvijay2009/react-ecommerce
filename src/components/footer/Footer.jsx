import React from "react";
import "./footer.css";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Social Icons Section */}
        <div className="footer-column">
          <h4></h4>
          <div className="social-icons-row">
            <a href="#" className="icon facebook">
              <FaFacebook />
            </a>
            <a href="#" className="icon twitter">
              <FaTwitter />
            </a>
            <a href="#" className="icon instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Shipping Information</li>
            <li>Returns & Exchange</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>RSS Feed</li>
            <li>FAQs</li>
            <li>Journal</li>
            <li>Site Map</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt /> 203 Fake St. Mountain View, San Francisco,
              California, USA
            </li>
            <li>
                <FaEnvelope /> info@vegefoods.com
            </li>
            <li>
                <FaPhone /> +2 392 3929 210
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&#169; 2025 vegefoods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
