import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import './App.css';

import lightModeIcon from '/darklighticon/moon1.png'; // Replace with the actual path to your light mode icon
import darkModeIcon from '/darklighticon/sun1.png'; // Replace with the actual path to your dark mode icon
import Layout from './components/Layout/Layout';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  useEffect(() => {
    // Simulate loading data for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    toggleThemeClass(newTheme);
  };

  const toggleThemeClass = (newTheme) => {
    const elementsToToggle = [
      'navbar_bg',
      'home_container',
      'cardsContainer',
      'about_container',
      'portfolio_container',
      'contact_container',
      'textarea',
    ];

    elementsToToggle.forEach((elementClass) => {
      const element = document.querySelector(`.${elementClass}`);
      if (element) {
        element.classList.toggle('light-mode', newTheme === 'light');
        element.classList.toggle('dark-mode', newTheme === 'dark');
      }
    });

    const cardElements = document.querySelectorAll('.card');
    const h2Elements = document.querySelectorAll('h2');
    const inputElements = document.querySelectorAll('.input');
    const PortfCardElements = document.querySelectorAll('.cards');

    cardElements.forEach((card) => toggleClassForElement(card, newTheme));
    h2Elements.forEach((h2) => toggleClassForElement(h2, newTheme));
    inputElements.forEach((input) => toggleClassForElement(input, newTheme));
    PortfCardElements.forEach((PortfCard) => toggleClassForElement(PortfCard, newTheme));
  };

  const toggleClassForElement = (element, newTheme) => {
    if (element) {
      element.classList.toggle('light-mode', newTheme === 'light');
      element.classList.toggle('dark-mode', newTheme === 'dark');
    }
  };

  return (
    <div className={`app ${theme}`}>
      {loading ? (
        <Preloader />
      ) : (
        <div className="containersssss">
          <Router>
            <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
            </Route>
            </Routes>
            
          </Router>
        </div>
      )}

      {/* Dark mode/light mode icon */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <img
          src={theme === 'light' ? lightModeIcon : darkModeIcon}
          alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        />
      </button>
    </div>
  );
};

export default App;









