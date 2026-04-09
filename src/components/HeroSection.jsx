import { motion } from 'framer-motion';
import { Youtube, Linkedin, Instagram, Facebook } from 'lucide-react';
import './HeroSection.css';
import image from '../assets/healthcare.svg'
import heroImage from '../assets/image.png'
import imageMobile from '../assets/image-mobile.png'
import { useState, useEffect } from 'react';

const HeroSection = ({ onOpenContact }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 468);
    };

    // Check initially
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <img src={isMobile ? imageMobile : image} alt="Dr. Akram" className="hero-img" />
            </div>
          </div>

          <motion.div
            className="hero-bottom-left"
            style={{ marginTop: '15px' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="hero-tagline">
              <img src={heroImage} alt="Healthcare Guidance" className="hero-tagline-img" />
              <span>
                No skilled healthcare professional should be held back by geography or lack of <span style={{ color: 'rgba(196, 255, 97, 0.3)' }}>guidance</span>
              </span>
            </p>
            <div
              className="button-container"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button className="cta-button" onClick={onOpenContact}>
                Connect with me
              </button>
              <button className="cta-button2" style={{ borderRadius: '100%', padding: '12px' }} onClick={onOpenContact}>
                <span className="button-icon">{isHovering ? '→' : '➚'}</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="hero-bottom-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="social-links">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
