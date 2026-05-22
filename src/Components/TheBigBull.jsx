import React from "react";
import styles from "../Styles/Thebigbull.module.css";
import { Link } from "react-router-dom";

import heroImage from "../Assets/thebigbulldetail.png";

export default function BigBull() {

  const features = [
    {
      number: "01",
      title: "Market Mastery",
      desc: "Build strong stock market understanding with structured learning focused on discipline, clarity, and confidence.",
    },
    {
      number: "02",
      title: "Trading Psychology",
      desc: "Learn the importance of emotional balance, patience, and mindset development for better decision-making.",
    },
    {
      number: "03",
      title: "Professional Tools",
      desc: "Understand modern trading platforms, chart analysis, and technical tools used for market observation.",
    },
  ];

  const benefits = [
    "Structured stock market learning",
    "Technical analysis understanding",
    "Professional learning environment",
    "Risk-aware market approach",
    "Confidence-focused education",
    "Long-term growth mindset",
  ];

  return (
    <div className={styles.page}>

      {/* HERO SECTION */}
      <section className={styles.hero}>

        <div className={styles.heroGlow}></div>

        <div className={styles.container}>

          {/* LEFT */}
          <div className={styles.left}>

            <p className={styles.tagline}>
              THE BIG BULL PROGRAM
            </p>

            <h1 className={styles.title}>
              Build Strong Foundations In
              <span> Stock Market Learning</span>
            </h1>

            <p className={styles.subtitle}>
              The Big Bull is designed for individuals who want
              structured stock market education, disciplined
              learning, and strong market understanding through
              a professional and confidence-focused experience.
            </p>

            {/* SEO TAGS */}
            <div className={styles.keywordBox}>

              <span>Market Mastery</span>
              <span>Trading Psychology</span>
              <span>Technical Analysis</span>
              <span>Stock Market Learning</span>
              <span>Risk Management</span>

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

            <div className={styles.imageBox}>

              <img
                src={heroImage}
                alt="The Big Bull Stock Market Education"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section className={styles.aboutSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>ABOUT THE BIG BULL</p>

            <h2>
              A Professional Stock Market Learning Experience
            </h2>

          </div>

          <div className={styles.cardGrid}>

            {features.map((item, index) => (
              <div
                key={index}
                className={styles.card}
              >

                <div className={styles.cardNumber}>
                  {item.number}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE */}
      <section className={styles.experienceSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.experienceWrapper}>

            {/* LEFT */}
            <div className={styles.expLeft}>

              <p className={styles.smallTitle}>
                WHY CHOOSE THE BIG BULL
              </p>

              <h2>
                Designed For Better Market Understanding
              </h2>

              <p>
                The Big Bull focuses on helping individuals
                improve market awareness, analytical thinking,
                and disciplined learning through structured
                stock market education and confidence-building
                guidance.
              </p>

            </div>

            {/* RIGHT */}
            <div className={styles.expRight}>

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className={styles.benefitCard}
                >

                  <div className={styles.tick}>
                    ✔
                  </div>

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

            <p>STOCK MARKET EDUCATION</p>

            <h2>
              Learn Market Concepts With Confidence
            </h2>

          </div>

          <div className={styles.seoContent}>

            <p>
              The Big Bull is designed to help beginners and
              aspiring traders improve their understanding of
              stock market concepts, technical analysis,
              trading psychology, and disciplined decision-making
              through a structured learning approach.
            </p>

            <p>
              This program focuses on building confidence,
              market awareness, financial understanding,
              and long-term growth through professional
              stock market education and strategic learning.
            </p>

          </div>

        </div>

      </section>


      {/* MINDSET SECTION */}
      <section className={styles.mindsetSection}>

        <div className={styles.mindsetBox}>

          <h2>
            Strong Habits Build Long-Term Confidence
          </h2>

          <p>
            Successful market participation begins with
            discipline, patience, emotional control,
            and continuous learning. Build the mindset
            required for better market understanding.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className={styles.ctaSection}>

        <div className={styles.ctaBox}>

          <h2>
            Start Your Stock Market Learning Journey
          </h2>

          <p>
            Build confidence, market understanding,
            and disciplined learning with The Big Bull.
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