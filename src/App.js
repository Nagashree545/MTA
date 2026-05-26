import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
import MAsterClass from './Components/MasterClass';
import MasterTrading from './Components/MasterTrading';
import BigBull from './Components/TheBigBull';
import OptionMastery from './Components/OptionMastery';
import TradingMistakesBlog from './Components/TradingMistakesBlog';
import MarketCyclesBlog from './Components/MarketCyclesBlog';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CoursesSection />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/masterclass" element={<MAsterClass />} />
        <Route path="/mastertrader" element={<MasterTrading />} />
        <Route path="/thebigbull" element={<BigBull />} />
        <Route path="/optionmastery" element={<OptionMastery />} />
        <Route path="/blog/5tradingmistake" element={<TradingMistakesBlog/>} />
        <Route path="/blog/marketcycleblog" element={<MarketCyclesBlog/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;