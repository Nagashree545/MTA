import React, { useEffect, useState } from 'react';
import styles from '../Styles/Herosection.module.css';

import herosection1 from "../Assets/herosectionimage.png";
import herosection2 from "../Assets/anandsirhome.jpg";

import { Link } from 'react-router-dom';

export default function HeroSection() {

  /* SLIDER IMAGES */
  const images = [herosection1, herosection2];

  const [currentSlide, setCurrentSlide] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [images.length]);

  return (
    <section className={styles.hero}>

      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.content}>

          <p className={styles.tagline}>
            Professional Trading Education
          </p>

          <h1 className={styles.title}>
            Learn the Art of Trading <br />
            <span>with Master Traders Academy</span>
          </h1>

          <p className={styles.subtitle}>
            Build strong market knowledge with structured learning
            and real-time insights designed to help you understand
            trading with clarity and confidence.
          </p>

          <ul className={styles.points}>
            <li>✔ Beginner to Advanced Training</li>
            <li>✔ Strategy-Focused Learning</li>
          </ul>

          <div className={styles.buttonGroup}>

            <Link
              to="/courses"
              className={styles.exploreBtn}
            >
              Explore Courses
            </Link>

            <div className={styles.ratingBox}>
              <span className={styles.stars}>★★★★★</span>

              <p>
                <strong>4.9/5</strong> Google Reviews
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className={styles.imageWrapper}>

          <div className={styles.sliderBox}>

            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >

              {images.map((image, index) => (
                <div
                  className={styles.slide}
                  key={index}
                >
                  <img
                    src={image}
                    alt={`Trading ${index + 1}`}
                  />
                </div>
              ))}

            </div>

          </div>

          {/* DOTS */}
          <div className={styles.dots}>

            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  currentSlide === index
                    ? styles.activeDot
                    : ""
                }`}
              ></span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}