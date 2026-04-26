import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Header';
import Footer from './Components/Footer';
import CoursesSection from './Components/CoursesSection';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path='/courses' element={<CoursesSection/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
