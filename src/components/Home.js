import React from 'react';

const Home = () => {
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
            I am a Frontend Developer
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
