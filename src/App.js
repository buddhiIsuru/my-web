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


function App() {

  const location = useLocation();


  return (
    <>
      <CustomCursor />
      <Navbar />
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
