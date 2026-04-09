import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import './Footer.css';
import Logo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left Section - Logo and Description */}
          <div className="footer-left">
            <div className="footer-logo">
              <img src={Logo} alt='Image' />
            </div>

            <p className="footer-description">
              Mentored over 60000+ healthcare career aspirants across the world
              Dr. Akram Ahmad is a renowned personality whose experience, skills,
              and qualifications in pharmacy and healthcare empower people from
              every walk of life.
            </p>
          </div>

          {/* Middle Section - Navigation */}
          <div className="footer-nav">
            <div className="nav-column">
              <h4>Explore</h4>
              <a href="#journey">Journey</a>
              <a href="#mission">Mission & Vision</a>
              <a href="#initiatives">Initiatives & Work</a>
              <a href="#media">Media & Awards</a>
            </div>

            <div className="nav-column">
              <h4>Contact</h4>
              <a href="tel:+918071722349">+91 08071722349</a>
              <a href="tel:+918071722349">+91 08071722349</a>
              <div className="footer-right-contact">
                <div className="footer-social">
                  <a href="https://wa.me/" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                  </a>
                  <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <Instagram size={20} />
                  </a>
                  <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Social Icons */}
          <div className="footer-right">
            <div className="footer-social">
              <a href="https://wa.me/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
              </a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© Copyright 2025 All rights reserved</p>
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy & Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;