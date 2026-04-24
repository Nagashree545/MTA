import React from 'react';
import HeroSection from './Herosection';
import StatsSection from './StatsSction';
import WhyUsSection from './WhyChooseUs';
import WhoCanEnroll from './WhoCanEnrool';
import PopularCourses from './OurPopularCourses';
import TestimonialsSection from './Testimonial';
import ContactSection from './Contact';
import BlogSection from './BlogSection';

function HomePage() {
  return (
    <div >
      <HeroSection/>
      <StatsSection/>
      <WhyUsSection/>
      <WhoCanEnroll/>
      <PopularCourses/>
      <TestimonialsSection/>
      <BlogSection/>
      <ContactSection/>
    </div>
  );
}

export default HomePage;
