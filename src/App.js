import React from 'react';
import './App.css';
import HomePage from './page/home-page/homepage';
import Navbar from './components/navbar/navbar';
import AboutPage from './page/about-page/aboutpage';
import ResumePage from './page/resume-page/resume';
import ProjectPage from './page/project-page/project';
import ContactPage from './page/contact-page/contact';
import CustomCursor from './components/custom-cursor/CustomCursor';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hamburg from './components/Hamburg/Hamburg';
import { useState } from 'react';
import { useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function App() {

  const location = useLocation();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  }

  return (
    <>
      {
        windowDimensions.width > 600 ?
          <CustomCursor />
          : null
      }
      <Navbar
        location={location}
        windowDimensions={windowDimensions}
      />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/project' element={<ProjectPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
