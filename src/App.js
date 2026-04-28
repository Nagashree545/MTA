import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Header';
import Footer from './Components/Footer';
import CoursesSection from './Components/CoursesSection';
import BlogSection from './Components/BlogSection';
import ContactPage from './Components/Contactpage';
import PrivacyPolicy from './Components/PrivacyP{olicy';
import RefundPolicy from './Components/RefundPolicy';
import TermsAndConditions from './Components/TermsAndCondition';
import ScrollToTop from './Components/ScrollToTop';
import Resources from './Components/Resourcespage';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path='/courses' element={<CoursesSection/>}/>
        <Route path="/blog" element={<BlogSection/>}/>
        <Route path="/contactpage" element={<ContactPage/>}/>
        <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
        <Route path="/refundpolicy" element={<RefundPolicy/>}/>
        <Route path='/termsandcondition' element={<TermsAndConditions/>}/>
        <Route path='/resources' element={<Resources/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
