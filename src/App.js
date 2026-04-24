import React from 'react';
import Navigation from './Components/Header';
import HeroSection from './Components/Herosection';
import CoursesSection from './Components/CoursesSection';
import WhyUsSection from './Components/WhyChooseUs';
import InstructorsSection from './Components/Intersectors';
import TestimonialsSection from './Components/Testimonial';
import BlogSection from './Components/BlogSection';
import PricingSection from './Components/Pricing';
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
      {/* <CoursesSection /> */}
      <WhyUsSection />
      <WhoCanEnroll/>
      <PopularCourses/>
      {/* <InstructorsSection /> */}
      <TestimonialsSection/>
      <BlogSection />
      {/* <PricingSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
