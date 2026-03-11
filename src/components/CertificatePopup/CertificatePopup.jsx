import React from 'react';
import './CertificatePopup.css';

const CertificatePopup = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="certificate-popup-overlay" onClick={handleOverlayClick}>
      <div className="certificate-popup-container">
        
        {/* Certificate Image */}
        <div className="certificate-popup-content">
          <img
            src={certificate}
            alt="Certificate"
            className="certificate-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificatePopup;
