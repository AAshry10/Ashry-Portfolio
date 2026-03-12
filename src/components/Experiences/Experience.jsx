import React, { useState, useEffect } from 'react';
import './Experience.css';
import experienceData from '../../JSON DB/Experience.json';
import CertificatePopup from '../CertificatePopup/CertificatePopup';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  const getCourses = () => experiences.find(exp => exp.id === 1)?.courses || [];
  const getPositions = () => experiences.find(exp => exp.id === 2)?.positions || [];
  const getEducation = () => experiences.find(exp => exp.id === 3)?.Education || [];

  const handleCertificateClick = (certificateImage) => {
    setSelectedCertificate(certificateImage);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedCertificate(null);
  };

  const renderExperienceCategory = (category, items) => (
    <div className="experience-category">
      <h3 className="category-title">{category}</h3>
      <div className="experience-items">
        {items.map((item, index) => (
          <div key={index} className="experience-item">
            {category === 'Courses' ? (
              <>
                <h4 className="item-title">{item.courseName}</h4>
                <p className="item-institution">{item.institution}</p>
                <p className="item-duration">{item.duration}</p>
                {(item.certificateImage) && (
                  <button 
                    className="certificate-btn"
                    onClick={() => handleCertificateClick(item.certificateImage)}
                  >
                    <i className="fa-solid fa-certificate"></i>
                    Certificate
                  </button>
                )}
              </>
            ) : category === 'Work Experience' ? (
              <>
                <h4 className="item-title">{item.title}</h4>
                <p className="item-company">
                  <a href={item.CompanyWebsiteURL} target="_blank" rel="noopener noreferrer">
                    @ {item.company}
                  </a>
                </p>
                <p className="item-meta">
                  <span className="item-duration">{item.duration}</span>
                </p>
                <span className="employment-type">{item.emplymentType}</span>
                {item.certificateImage && (
                  <button 
                    className="certificate-btn"
                    onClick={() => handleCertificateClick(item.certificateImage)}
                  >
                    <i className="fa-solid fa-certificate"></i>
                    Certificate
                  </button>
                )}
              </>
            ) : (
              <>
                <h4 className="item-title">{item.degree}</h4>
                <p className="item-institution">{item.university}</p>
                <p className="item-duration">{item.duration}</p>
                {item.certificateImage && (
                  <button 
                    className="certificate-btn"
                    onClick={() => handleCertificateClick(item.certificateImage)}
                  >
                    <i className="fa-solid fa-certificate"></i>
                    Certificate
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <h2>My Experience</h2>
      </div>

      <div className="experience-container">
        {renderExperienceCategory('Work Experience', getPositions())}
        {renderExperienceCategory('Education', getEducation())}
        {renderExperienceCategory('Courses', getCourses())}
      </div>

      <CertificatePopup 
        certificate={selectedCertificate} 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup}
      />
    </section>
  );
};

export default Experience;
