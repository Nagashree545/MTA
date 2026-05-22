import React from "react";
import styles from "../Styles/OptionMastery.module.css";

import heroImage from "../Assets/optionhunterforcourses.jpg";
import { Link } from "react-router-dom";

export default function OptionMastery() {

  const learningPoints = [
    {
      number: "01",
      title: "Options Fundamentals",
      desc: "Understand the core concepts of options trading, strike prices, premiums, expiry, and market movement analysis.",
    },
    {
      number: "02",
      title: "Strategic Thinking",
      desc: "Build structured decision-making skills through disciplined market observation and logical trading approaches.",
    },
    {
      number: "03",
      title: "Risk Awareness",
      desc: "Learn the importance of risk control, capital management, and emotional discipline in trading.",
    },
    {
      number: "04",
      title: "Market Psychology",
      desc: "Develop confidence and patience by understanding market behavior and trading psychology.",
    },
  ];

  const benefits = [
    "Structured options learning",
    "Professional market understanding",
    "Confidence-focused education",
    "Risk management awareness",
    "Trading psychology learning",
    "Beginner-friendly approach",
  ];

  return (
    <div className={styles.page}>

      {/* HERO SECTION */}
      <section className={styles.hero}>

        <div className={styles.overlay}></div>

        <div className={styles.container}>

          {/* LEFT */}
          <div className={styles.left}>

            <div className={styles.badge}>
              OPTION MASTERY PROGRAM
            </div>

            <h1 className={styles.title}>
              Learn <span>Option Mastery</span>
              <br />
              With Confidence
            </h1>

            <p className={styles.subtitle}>
              A specialized options learning experience designed to help
              individuals understand options concepts, market psychology,
              disciplined decision-making, and structured market analysis.
            </p>

            <div className={styles.tags}>
              <span>Options Basics</span>
              <span>Strategies</span>
              <span>Risk Control</span>
              <span>Market Psychology</span>
            </div>

            <div className={styles.buttonGroup}>

              <Link
                to="/contactpage"
                className={styles.primaryBtn}
              >
                Join Now
              </Link>

              <Link
                to="/courses"
                className={styles.secondaryBtn}
              >
                Explore Courses
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div className={styles.right}>

            <div className={styles.imageCard}>
              <img
                src={heroImage}
                alt="Option Mastery Stock Market Learning"
              />
            </div>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>ABOUT OPTION MASTERY</p>

            <h2>
              Structured Learning For Options Understanding
            </h2>

          </div>

          <div className={styles.aboutGrid}>

            <div className={styles.aboutCard}>
              <h3>Professional Learning</h3>

              <p>
                Build a strong understanding of options concepts
                through structured and discipline-focused education.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <h3>Strategic Approach</h3>

              <p>
                Learn how to approach market opportunities with
                patience, confidence, and thoughtful planning.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <h3>Long-Term Growth</h3>

              <p>
                Focus on improving market awareness and developing
                disciplined trading habits for consistent learning.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* LEARNING SECTION */}
      <section className={styles.learningSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>WHAT YOU WILL LEARN</p>

            <h2>
              Build Strong Trading Habits
            </h2>

          </div>

          <div className={styles.learningGrid}>

            {learningPoints.map((item, index) => (
              <div
                key={index}
                className={styles.learningCard}
              >

                <div className={styles.number}>
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* BENEFITS */}
      <section className={styles.benefitSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.benefitWrapper}>

            <div className={styles.benefitLeft}>

              <p className={styles.smallTitle}>
                WHY CHOOSE OPTION MASTERY
              </p>

              <h2>
                Designed For Better Market Understanding
              </h2>

              <p>
                Option Mastery focuses on helping learners improve
                their understanding of options concepts, trading
                discipline, market psychology, and risk awareness
                through a structured educational experience.
              </p>

            </div>

            <div className={styles.benefitRight}>

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={styles.benefitItem}
                >

                  <span>✔</span>

                  <p>{item}</p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* SEO CONTENT */}
      <section className={styles.seoSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>OPTIONS LEARNING</p>

            <h2>
              Learn Options Trading Concepts With Clarity
            </h2>

          </div>

          <div className={styles.seoContent}>

            <p>
              Option Mastery is designed for individuals who want to
              improve their understanding of options trading concepts,
              market psychology, disciplined strategies, and risk
              awareness through structured stock market education.
            </p>

            <p>
              Whether you are exploring options basics or looking to
              strengthen your market understanding, this learning
              experience focuses on confidence-building, strategic
              thinking, and disciplined market participation.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className={styles.ctaSection}>

        <div className={styles.ctaBox}>

          <h2>
            Start Your Options Learning Journey Today
          </h2>

          <p>
            Build confidence, discipline, and market understanding
            with a structured options learning experience.
          </p>

          <Link
            to="/contactpage"
            className={styles.ctaBtn}
          >
            Connect With Us
          </Link>

        </div>

      </section>

    </div>
  );
}