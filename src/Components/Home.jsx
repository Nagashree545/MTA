import React from 'react';
import HeroSection from './Herosection';
import StatsSection from './StatsSction';
import WhyUsSection from './WhyChooseUs';
import WhoCanEnroll from './WhoCanEnrool';
import PopularCourses from './OurPopularCourses';
import TestimonialsSection from './Testimonial';
import ContactSection from './Contact';
import WorkshopPopup from './Popupforworkshop';
import AwardPage from './AwardPage';

function HomePage() {
  return (
    <div >
      <WorkshopPopup/>
      <HeroSection/>
      <StatsSection/>
      <WhyUsSection/>
      <WhoCanEnroll/>
      <PopularCourses/>
      <AwardPage/>
      <TestimonialsSection/>
      <ContactSection/>
    </div>
  );
}

export default HomePage;
