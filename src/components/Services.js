import React from 'react';

const About = () => {
  const skills = [
    'HTML5',
    'CSS3', 
    'JavaScript',
    'Bootstrap',
    'SASS',
    'OOP',
    'ECMA6',
    'AJAX',
    'JSON',
    'React.js',
  ];

  const recentWork = [
    {
      description: 'Implemented a real-time notifications system for a SaaS product.'
    },
    {
      description: 'Led frontend architecture and component library for e-commerce client.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About me</h2>
          <p>
            I build user interfaces and experiences for web products. I pay strong attention to accessibility, 
            maintainable code, and high performance. My typical stack is React, TypeScript, Tailwind CSS, and I pair 
            that with backend APIs (Django or Node) when needed.
          </p>


        </div>

        <div className="about-sidebar">
          <div className="skills-section">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="availability-section">
            <h3>Availability</h3>
            <p>Open to full-time or contract work</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

