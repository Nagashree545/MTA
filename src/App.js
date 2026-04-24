import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
