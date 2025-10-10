import React from 'react';
import './ServicePopup.css';

const ServicePopup = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="service-popup-overlay" onClick={handleOverlayClick}>
      <div className="service-popup">
        {/* Close Button */}
        <button className="service-popup-close" onClick={onClose}>
          <i className="fa-solid fa-times"></i>
        </button>

        {/* Service Logo */}
        <div className="service-popup-logo">
          <i className={service.popuplogo || "fa-solid fa-code"}></i>
        </div>

        {/* Service Title */}
        <h2 className="service-popup-title">{service.title}</h2>

        {/* Service Description */}
        <p className="service-popup-description">
          { service.description}
        </p>

        {/* Key Features Section */}
        <div className="service-popup-features">
          <h3 className="service-popup-features-title">Key Features:</h3>
          <ul className="service-popup-features-list">
            {service.popupfeatureslist && service.popupfeatureslist.length > 0 ? (
              service.popupfeatureslist.map((feature, index) => (
                <li key={index} className="service-popup-feature">
                  <i className="fa-solid fa-check service-popup-check"></i>
                  {feature}
                </li>
              ))
            ) : (
              // Default features based on service type
              service.id === 1 ? (
                <>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    Modern technology stack
                  </li>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    Responsive design principles
                  </li>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    Performance optimization
                  </li>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    Best practices implementation
                  </li>
                </>
              ) : (
                <>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    Custom theme development
                  </li>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    App integration
                  </li>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    E-commerce optimization
                  </li>
                  <li className="service-popup-feature">
                    <i className="fa-solid fa-check service-popup-check"></i>
                    Mobile-first approach
                  </li>
                </>
              )
            )}
          </ul>
        </div>

        {/* DM for Service Request Button */}
        <button 
          className="service-popup-btn"
          onClick={() => {
            const message = `Hi! I'm interested in your ${service.title} service. Could you please provide more details?`;
            const whatsappUrl = `https://wa.me/201140241672?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            onClose();
          }}
        >
          <i className="fa-brands fa-whatsapp"></i>
          DM for service request
        </button>
      </div>
    </div>
  );
};

export default ServicePopup;
