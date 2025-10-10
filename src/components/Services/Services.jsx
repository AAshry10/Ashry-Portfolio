import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Front-End Development",
      description: "Create stunning, responsive websites with modern technologies like React, JavaScript, HTML5, and CSS3. I build user-friendly interfaces that deliver seamless experiences across all devices.",
      background: "linear-gradient(135deg, #764ba2 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Building Shopify Sites",
      description: "Professional Shopify store development with custom themes, apps integration, and e-commerce optimization. Boost your online sales with a beautifully designed and fully functional store.",
      background: "linear-gradient(135deg, #667eea 0%, #667eea 100%)"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center'
  }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

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
                    <button className="service-btn">Request Service</button>
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
    </section>
  );
};

export default Services;