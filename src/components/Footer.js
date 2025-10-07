import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 @Ashry | All Rights Reserved</p>
      </div>

      <div className="footer-icon">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

