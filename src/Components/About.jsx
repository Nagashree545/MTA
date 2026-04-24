import React from 'react';
import styles from '../Styles/About.module.css';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>About Us</h1>
          <p className={styles.subtitle}>
            Welcome to Master Traders Academy
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.container}>
          <div className={styles.welcomeContent}>
            <h2 className={styles.sectionTitle}>Where Learning Meets Confidence in the World of Stock Market</h2>
            <p className={styles.welcomeText}>
              At Master Traders Academy, we are passionate about transforming individuals into skilled, confident and independent traders.
            </p>
            <p className={styles.welcomeText}>
              Our mission is to make stock market education simple, structured and practical - empowering our learners to make informed decisions and achieve consistent success in the market. We specialize in Swing Trading, Long-Term investing and Active Trading Strategies; ensuring that every learner gains a comprehensive understanding of market dynamics, risk management and profitable execution.
            </p>
            <p className={styles.welcomeText}>
              What sets us apart is our team of experienced mentors who bring years of real-market expertise and teaching excellence. Their personalized guidance and mentorship help you navigate market complexities with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className={styles.whatSetsApart}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👨‍🏫</div>
              <h3>Expert Mentors</h3>
              <p>
                Our team of experienced mentors bring years of real-market expertise and teaching excellence. Their personalized guidance helps you navigate market complexities with confidence and clarity.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>
                Master multiple trading strategies from swing trading to long-term investing with our structured and practical learning approach.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎯</div>
              <h3>Practical Learning</h3>
              <p>
                Learn by doing. Our hands-on approach ensures you gain real-world trading experience and market confidence.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3>Risk Management</h3>
              <p>
                Master the art of protecting your capital while maximizing returns through proven risk management strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.missionContent}>
            <p>
              Master Traders Academy is committed to democratizing stock market education and making high-quality trading knowledge accessible to everyone. We believe that financial independence should not be limited to a select few.
            </p>
            <p>
              Our mission is to empower individuals with the skills, knowledge, and confidence needed to make informed trading decisions and achieve consistent success in the market. Through comprehensive education, practical training, and expert mentorship, we aim to transform lives and create a generation of confident, independent traders.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <div className={styles.visionContent}>
            <p>
              To be the premier stock market training academy, recognized for excellence in transforming ordinary individuals into extraordinary traders. We envision a community of confident investors who understand market dynamics, manage risks effectively, and achieve their financial goals through informed decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Master Traders Academy?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Expert-Led Training</h4>
                <p>Learn from industry professionals with proven trading experience</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Comprehensive Strategies</h4>
                <p>Master swing trading, long-term investing, and active trading techniques</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Practical Support</h4>
                <p>Ongoing mentorship and live trading sessions for real-world application</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Flexible Learning</h4>
                <p>Choose online, offline, or blended learning options that fit your schedule</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Risk Management Focus</h4>
                <p>Learn to protect your capital while maximizing profitable opportunities</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Community Support</h4>
                <p>Join a community of traders committed to continuous learning and growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Ready to Start Your Trading Journey?</h2>
          <p>Join Master Traders Academy today and take your first step towards financial independence.</p>
          <button className={styles.ctaButton}>Explore Our Courses</button>
        </div>
      </section>
    </div>
  );
}
