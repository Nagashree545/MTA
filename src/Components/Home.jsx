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
import FAQ from './Faq';

function HomePage() {
  return (
    <div>

      {/* SEO START */}


        <title>
           Master Traders Academy| Stock Market Trading Courses 
        </title>

        <meta
          name="description"
          content="Master Traders Academy offers professional stock market trading courses, technical analysis training, options trading, and live mentorship for beginners and advanced traders."
        />

        <meta
          name="keywords"
          content="stock market course, trading academy, options trading, technical analysis, intraday trading, trading classes"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://mastertradersacademy.in/"
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content="Master Traders Academy"
        />

        <meta
          property="og:description"
          content="Professional stock market trading courses and mentorship."
        />

        <meta
          property="og:url"
          content="https://mastertradersacademy.in/"
        />

        <meta property="og:type" content="website" />

        {/* Schema Markup */}

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Master Traders Academy",
            "url": "https://mastertradersacademy.in",
            "description": "Professional stock market trading academy offering trading courses and mentorship."
          }
          `}
        </script>


      {/* SEO END */}

      <WorkshopPopup />

      <HeroSection />

      <StatsSection />

      <WhyUsSection />

      <WhoCanEnroll />

      <PopularCourses />

      <AwardPage />

      <TestimonialsSection />

      <ContactSection />
      <FAQ/>

    </div>
  );
}

export default HomePage;