import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Services.css';
import servicesData from '../../JSON DB/Services.json';
import ServicePopup from '../ServicePopup/ServicePopup';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const handleServiceRequest = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center'
  }, [Autoplay({ delay: 10000, stopOnInteraction: false })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="services" id="Services">
      <div className="services-container">
        <div className="services-header">
          <h2>Services I Offer</h2>
        </div>
        
        <div className="services-slider">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="embla__slide service-slide"
                  style={{ background: service.background }}
                >
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button className="service-btn" onClick={() => handleServiceRequest(service)}>Request Service</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-btn prev-btn" onClick={scrollPrev}>
            &#8249;
          </button>
          <button className="slider-btn next-btn" onClick={scrollNext}>
            &#8250;
          </button>
          
          <div className="slider-dots">
            {services.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === selectedIndex ? 'active' : ''}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Service Popup */}
      <ServicePopup 
        service={selectedService}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </section>
  );
};

export default Services;