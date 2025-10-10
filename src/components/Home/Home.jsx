import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Software Engineer', 'Frontend Developer'];
  
  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const currentText = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayedText, currentTextIndex, isDeleting, texts]);

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the file path - update this path to your actual CV file
    link.href = '/assets/Ashry-CV.pdf'; // Change this to your actual CV file
    link.download = 'Ashry-CV.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="availability-badge">Available for hire</div>
        <h1>Hi — I'm Ahmed ELashry. <br />
          <span className="multiple-text">
            I am a <span className="typings-highlight">{displayedText}<span className="cursor">|</span></span>
          </span>
        </h1>
        <p>
          I design and build fast, accessible web interfaces. I specialize in React and 
          Bootstrap. I focus on performance, accessibility and delightful interactions. 
          Below you'll find selected projects and a short about section.
        </p>

        <div className="hero-buttons">
          <button onClick={handleDownloadCV} className="btn download-resume">Download Resume</button>
          <a href="#portfolio" className="btn-secondary see-projects">See projects</a>
        </div>

        <div className="mobile-social">
          <a href="https://github.com/AAshry10" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ahmed-elashry-026a03247/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/a.ashry.615/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href='https://wa.me/+201140241672' target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <div className="contact-info">
          <a href="mailto:ahmedmohamedsami203@gmail.com" className="email-link">
            <i className="fa-solid fa-envelope"></i>
            ahmedmohamedsami203@gmail.com
          </a>
          <span className="contact-separator">|</span>
          <span className="location">Based in Salmyia, Kuwait</span>
        </div>
      </div>

      <div className="home-img">
        <img src="/assets/Images/Personal/Me Grad - Cropped.jpg" alt="Ahmed ELashry" />
        <div className="avatar-info">
          <h3>Ahmed ELashry</h3>
          <p>Software Engineer • Frontend Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
