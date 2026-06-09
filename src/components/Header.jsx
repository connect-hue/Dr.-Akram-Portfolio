import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import logo from '../assets/logo.png';
import logoHeader from '../assets/logo-header.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    // Check initially
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Check if the current path is not the root
    if (window.location.pathname !== '/') {
      // Redirect to the root path (home page)
      window.location.href = '/';
    } else {
      // If already on the root path, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isToggled);
  };

  return (
    <div className='header-view'>
      <div className='logo-header'>
        <img src={isMobile ? logoHeader : logo} alt='Logo Added' style={{ height: '5rem', width: 'auto', marginLeft: '10px' }} className='logo-header-img' />
      </div>
      <motion.header
        className={`header ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-container">
          <nav className="nav-menu">
            <button onClick={() => scrollToSection('hero')}>Home</button>
            <button onClick={() => scrollToSection('journey')}>My Journey</button>
            <button onClick={() => scrollToSection('mission')}>Mission & Vision</button>
            <button onClick={() => scrollToSection('initiatives')}>Work</button>
            <button onClick={() => scrollToSection('media')}>Gallery</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </nav>
        </div>
      </motion.header>

      <div className="jobslly-strip">
        <p>Find high paying jobs that value you - with Jobslly</p>
        <a href="https://jobslly.in" target="_blank" rel="noopener noreferrer" className="jobslly-button">Click Here</a>
      </div>
    </div>
  );
};

export default Header;
