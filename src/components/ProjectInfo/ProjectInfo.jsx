import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectInfo.css';
import projectsData from '../../JSON DB/Projects.json';

const ProjectInfo = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  useEffect(() => {
    const project = projectsData.find(p => p.id === projectId);
    setCurrentProject(project);
  }, [projectId]);

  if (!currentProject) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate('/')} className="btn">
          Back to Home
        </button>
      </div>
    );
  }

  let videoContent = (
    <video controls poster={currentProject.image} className="demo-video">
      <source
        src={currentProject.video || currentProject.demoVideo}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
  if (currentProject.id === "web-portfolio") {
    videoContent = (
      <div className="coming-soon-container">
        <img
          src={currentProject.image}
          alt="Project"
          className="coming-soon-image"
        />
        <div className="coming-soon-overlay">
          <div className="coming-soon-content">
            <i className="fa-solid fa-video coming-soon-icon"></i>
            <h3>This Portfolio</h3>
            <p>You are already here !!!</p>
          </div>
        </div>
      </div>
    );
  } else if (!currentProject.demoVideo) {
    videoContent = (
      <video controls poster={currentProject.image} className="demo-video">
        <source
          src={currentProject.video || currentProject.demoVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    );
  }


  return (
    <div className="project-info">
      <div className="project-info-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Portfolio
        </button>
        <h1>{currentProject.title}</h1>
      </div>

      <div className="project-info-content">
        {/* Demo Video Section */}
        <section className="demo-section">
          <h2>Demo Video</h2>
          <div className="video-container">
            {videoContent}
          </div>
        </section>

        {/* Project Description Section */}
        <section className="description-section">
          <h2>Project Description</h2>
          <p className="project-description-text">{currentProject.detaileddescription || currentProject.description}</p>
          {currentProject.notes && <p className="project-notes">{currentProject.notes}</p>}
          <h3>Key Features</h3>
          <ul className="features-list">
            {currentProject.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Technologies Section */}
        <section className="technologies-section">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {(currentProject.technologiesArray || currentProject.technologies.split(' • ')).map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </section>
      </div>

      {/* Repository Link - Standalone at bottom */}
      <div className="repo-link-container">
        <a 
          href={currentProject.repoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="repo-link"
        >
          <i className="fa-brands fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
