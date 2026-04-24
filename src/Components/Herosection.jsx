import React from 'react';
import styles from '../Styles/Herosection.module.css';
import anandsir from "../Assets/AnandSir.JPG";
export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Master Traders Academy</h1>
        <p className={styles.subtitle}>
          Learn from industry experts and master the art of profitable trading. 
          Transform your financial future with our comprehensive courses.
        </p>
        
        <div className={styles.certifications}>
          <span className={styles.badge}>ISO Certified</span>
          <span className={styles.badge}>NISM Certified</span>
          <span className={styles.badge}>2025 Best Academy Award</span>
        </div>

        <div className={styles.buttonGroup}>
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('courses')}
          >
            Explore Courses
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Get Started Today
          </button>
        </div>
      </div>

      <div className={styles.logoDisplay}>
        <img src={anandsir} alt="Master Traders Academy Logo" />
      </div>
    </section>
  );
}
