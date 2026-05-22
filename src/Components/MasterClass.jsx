import React from "react";
import styles from "../Styles/MasterClass.module.css";

import heroImage from "../Assets/masterclassdetail.png";
import { Link } from "react-router-dom";

export default function MasterClass() {

  const philosophy = [
    {
      number: "01",
      title: "Discipline & Consistency",
      desc: "Develop emotional control, structured habits, and disciplined thinking for better market understanding.",
    },
    {
      number: "02",
      title: "Smart Market Analysis",
      desc: "Understand market behavior, chart patterns, and trading psychology through structured learning.",
    },
    {
      number: "03",
      title: "Strategic Thinking",
      desc: "Build clarity in market participation with confidence, patience, and long-term awareness.",
    },
    {
      number: "04",
      title: "Growth-Focused Learning",
      desc: "Improve continuously with consistent learning, financial awareness, and strong decision-making habits.",
    },
  ];

  const benefits = [
    "Professional stock market education",
    "Structured trading knowledge",
    "Confidence-focused learning",
    "Mentorship-driven guidance",
    "Market psychology understanding",
    "Long-term growth approach",
  ];

  return (
    <div className={styles.page}>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.hero}>

        <div className={styles.heroGlow}></div>

        <div className={styles.container}>

          {/* LEFT CONTENT */}
          <div className={styles.left}>

            <p className={styles.tagline}>
              MASTERCLASS STOCK MARKET EDUCATION
            </p>

            <h1 className={styles.title}>
              Masterclass For <span>Stock Market Learning</span>
            </h1>

            <p className={styles.subtitle}>
              Learn stock market concepts, trading psychology,
              market analysis, and disciplined decision-making
              through a structured educational experience designed
              for beginners and aspiring traders.
            </p>

            {/* KEYWORDS */}
            <div className={styles.keywordBox}>

              <span>Stock Market Learning</span>
              <span>Trading Education</span>
              <span>Market Analysis</span>
              <span>Trading Psychology</span>
              <span>Technical Learning</span>

            </div>

            {/* BUTTONS */}
            <div className={styles.buttonGroup}>

              <Link
                to="/contactpage"
                className={styles.primaryBtn}
              >
                Enroll Now
              </Link>

              <Link
                to="/courses"
                className={styles.secondaryBtn}
              >
                Explore Courses
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className={styles.right}>

            <div className={styles.imageBox}>

              <img
                src={heroImage}
                alt="Masterclass Stock Market Education"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className={styles.aboutSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>ABOUT MASTERCLASS</p>

            <h2>
              A Professional Stock Market Learning Experience
            </h2>

          </div>

          <div className={styles.aboutGrid}>

            <div className={styles.aboutCard}>
              <h3>Structured Learning</h3>

              <p>
                Learn market concepts through a professional
                educational approach focused on clarity,
                discipline, and long-term understanding.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <h3>Trading Psychology</h3>

              <p>
                Build emotional balance, confidence,
                and disciplined thinking for stronger
                decision-making in changing markets.
              </p>
            </div>

            <div className={styles.aboutCard}>
              <h3>Market Awareness</h3>

              <p>
                Develop deeper understanding of trends,
                chart behavior, and financial thinking
                through guided educational content.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}
      <section className={styles.philosophySection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>OUR LEARNING APPROACH</p>

            <h2>
              Principles Behind Strong Trading Habits
            </h2>

          </div>

          <div className={styles.philosophyGrid}>

            {philosophy.map((item, index) => (
              <div
                key={index}
                className={styles.philosophyCard}
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


      {/* ================= WHY CHOOSE ================= */}
      <section className={styles.whySection}>

        <div className={styles.sectionContainer}>

          <div className={styles.whyWrapper}>

            <div className={styles.whyLeft}>

              <p className={styles.smallTitle}>
                WHY CHOOSE MASTERCLASS
              </p>

              <h2>
                Designed For Better Market Understanding
              </h2>

              <p>
                Masterclass combines structured stock market
                education, disciplined learning, and confidence-focused
                guidance to help individuals improve financial
                awareness and market understanding.
              </p>

            </div>

            <div className={styles.whyRight}>

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


      {/* ================= MINDSET SECTION ================= */}
      <section className={styles.mindsetSection}>

        <div className={styles.mindsetBox}>

          <h2>
            Strong Trading Habits Build Long-Term Confidence
          </h2>

          <p>
            Successful market participation begins with discipline,
            patience, emotional balance, and continuous learning.
            Build a mindset focused on consistency and growth.
          </p>

        </div>

      </section>


      {/* ================= SEO CONTENT ================= */}
      <section className={styles.seoSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>STOCK MARKET EDUCATION</p>

            <h2>
              Learn Stock Market Concepts With Confidence
            </h2>

          </div>

          <div className={styles.seoContent}>

            <p>
              Masterclass is designed to help individuals improve
              their understanding of stock market concepts,
              market psychology, technical analysis, and disciplined
              decision-making through a structured educational approach.
            </p>

            <p>
              Whether you are a beginner exploring trading education
              or someone looking to strengthen market awareness,
              Masterclass focuses on confidence-building,
              financial understanding, and long-term learning.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className={styles.ctaSection}>

        <div className={styles.ctaBox}>

          <h2>
            Start Your Stock Market Learning Journey Today
          </h2>

          <p>
            Join a professional learning environment focused on
            discipline, market understanding, and confidence-driven
            stock market education.
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