import React from 'react';
import HeroSection from './Herosection';
import StatsSection from './StatsSction';
import WhyUsSection from './WhyChooseUs';
import WhoCanEnroll from './WhoCanEnrool';
import PopularCourses from './OurPopularCourses';
import TestimonialsSection from './Testimonial';
import ContactSection from './Contact';
import WorkshopPopup from './Popupforworkshop';

function HomePage() {
  return (
    <div >
      <WorkshopPopup/>
      <HeroSection/>
      <StatsSection/>
      <WhyUsSection/>
      <WhoCanEnroll/>
      <PopularCourses/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  );
}

export default HomePage;
