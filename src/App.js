import React from 'react';
import Navigation from './Components/Header';
import HeroSection from './Components/Herosection';
import WhyUsSection from './Components/WhyChooseUs';
import TestimonialsSection from './Components/Testimonial';
import BlogSection from './Components/BlogSection';
import ContactSection from './Components/Contact';
import Footer from './Components/Footer';
import StatsSection from './Components/StatsSction';
import WhoCanEnroll from './Components/WhoCanEnrool';
import PopularCourses from './Components/OurPopularCourses';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HeroSection/>
      <StatsSection/>
      <WhyUsSection />
      <WhoCanEnroll/>
      <PopularCourses/>
      <TestimonialsSection/>
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
