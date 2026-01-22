import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      setIsMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="logo-container" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
        <div className="avatar-small">
          <span>AE</span>
        </div>
        <div className="logo-text">
          <h4>Ahmed ELashry</h4>
          <span>Frontend • React.js</span>
        </div>
      </div>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          Home
        </a>
        <a href="#TeckStack" onClick={(e) => { e.preventDefault(); scrollToSection('TeckStack'); }}>
          Tech Stack
        </a>
        <a href="#Services" onClick={(e) => { e.preventDefault(); scrollToSection('Services'); }}>
          Services
        </a>
        <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          Contact
        </a>
      </nav>

      <div className="header-social">
        <a href="https://github.com/AAshry10" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ahmed-elashry-026a03247/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/a.ashry.615/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href='https://wa.me/+96565986338' target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <i 
        className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} 
        id="menu-icon"
        onClick={toggleMenu}
      ></i>
    </header>
  );
};

export default Header;
