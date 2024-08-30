import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">Embedchat</div>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen && isMobile ? 'open' : ''}`}>
          <li><a href="#use-cases" onClick={() => isMobile && setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#integrations" onClick={() => isMobile && setIsMenuOpen(false)}>Integrations</a></li>
          <li><a href="#pricing" onClick={() => isMobile && setIsMenuOpen(false)}>Pricing</a></li>
          <li><a href="#resources" onClick={() => isMobile && setIsMenuOpen(false)}>Resources</a></li>
          <li><a href="#resources" onClick={() => isMobile && setIsMenuOpen(false)}>Blog</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="gradient-button login-button">Log In</button>
      
          <button className="gradient-button signup-button">Get started - it's free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
