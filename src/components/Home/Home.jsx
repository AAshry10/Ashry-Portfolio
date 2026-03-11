import React, { useState, useEffect, useMemo } from 'react';
import Experiences from "../../JSON DB/Experience.json";
import './Home.css';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => ['Software Engineer', 'Frontend Developer', 'Shopify Developer', 'Odoo Implementer'], []);

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
    link.href = '/assets/Ashry CV.pdf'; // Change this to your actual CV file
    link.download = 'Ashry CV.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Check if there are positions in Experience.json
  const hasPositions = Experiences.some(exp => exp.positions && exp.positions.length > 0);

  return (
    <section className="home" id="home">
      <div className="home-content">
        {!hasPositions && (
          <div className="availability-badge">Open to work</div>
        )}
        {hasPositions && (
          <div className="current-position-badge">
            {Experiences[1].positions[0].title} @&nbsp;
            <a
              href={Experiences[1].positions[0].CompanyWebsiteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Experiences[1].positions[0].company}
            </a>
          </div>
        )}
        <h1>
          Hi — I'm Ahmed ELashry. <br />
          <span className="multiple-text">
            I am a{" "}
            <span className="typings-highlight">
              {displayedText}
              <span className="cursor">|</span>
            </span>
          </span>
        </h1>
        <p>
          Motivated Software Engineer with experience in front-end web
          development and enterprise software support. Skilled in building
          responsive web applications using React.js and . Experienced in
          working with Odoo ERP systems, providing technical support, system
          configuration, and troubleshooting for business operations. Passionate
          about creating efficient digital solutions, improving user experience,
          and continuously learning new technologies
        </p>

        <div className="hero-buttons">
          <button onClick={handleDownloadCV} className="btn download-resume">
            Download Resume
          </button>
          <a href="#portfolio" className="btn-secondary see-projects">
            Explore Projects
          </a>
        </div>

        <div className="mobile-social">
          <a
            href="https://github.com/AAshry10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-elashry-026a03247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/a.ashry.615/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/+96565986338"
            target="_blank"
            rel="noopener noreferrer"
          >
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
        <img
          src="/assets/Images/Personal/Me Grad - Cropped.jpg"
          alt="Ahmed ELashry"
        />
        <div className="avatar-info">
          <h3>Ahmed ELashry</h3>
          <p>Software Engineer • Frontend Developer</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
