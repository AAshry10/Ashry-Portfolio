import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services'; // About component (renamed from Services)
import Portfolio from './components/Portfolio/Portfolio';
import TeckStack from './components/TeckStack/TeckStack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectInfo from './components/ProjectInfo/ProjectInfo';

// Main Portfolio Page Component
const MainPage = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .techstack-container, .portfolio-box, .Contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'right' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });
  }, []);

  return (
    <>
      <Header />
      <Home />
      <TeckStack />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:projectId" element={<ProjectInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
