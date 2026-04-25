import React from 'react';
import styles from '../Styles/Herosection.module.css';
import herosection from "../Assets/herosectionimage.png";

export default function HeroSection() {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>

      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.content}>

          <p className={styles.tagline}>Professional Trading Education</p>

          <h1 className={styles.title}>
            Learn the Art of Trading <br />
            <span>with Master Traders Academy</span>
          </h1>

          <p className={styles.subtitle}>
            Build strong market knowledge with structured learning and real-time insights 
            designed to help you understand trading with clarity and confidence.
          </p>

          <ul className={styles.points}>
            <li>✔ Beginner to Advanced Training</li>
            <li>✔ Live Market Sessions</li>
          </ul>

          <div className={styles.buttonGroup}>

            <button onClick={() => scrollToSection('courses')}>
              Explore Courses
            </button>

            <div className={styles.ratingBox}>
              <span className={styles.stars}>★★★★★</span>
              <p><strong>4.9/5</strong> Google Reviews</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageBox}>
            <img src={herosection} alt="Trading" />
          </div>
        </div>

      </div>

    </section>
  );
}
