// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Import the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            We are a modern furniture retailer offering a wide range of stylish
            and functional pieces for every room in your home.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Shop</a></li>
            <li><a href="/bed">Beds</a></li>
            <li><a href="/curtain">Curtains</a></li>
            <li><a href="/sofa">Sofas</a></li>
            <li><a href="/chair">Chairs</a></li>
            <li><a href="/table">Tables</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
        <h4>Follow Us</h4>
            <div className="social-links">
                <a href="https://www.facebook.com/IKEAIndia/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/ikea/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
                </a>
                <a href="https://x.com/IKEA" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/x.png" alt="Twitter" />
                </a>
                <a href="https://in.pinterest.com/IKEAUSA/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/pinterest.png" alt="Pinterest" />
                </a>
            </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 NestCreft website made by Jainish Patel.</p>
      </div>
    </footer>
  );
};

export default Footer;
