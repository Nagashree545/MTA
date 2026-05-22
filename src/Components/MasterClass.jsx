import React from "react";
import styles from "../Styles/MasterClass.module.css";
import heroImage from "../Assets/masterclassdetail.png";
import { Link } from "react-router-dom";

export default function MasterClass() {

  const philosophy = [
    {
      title: "Discipline & Consistency",
      desc: "Develop emotional control, structured habits, and disciplined thinking for better market understanding.",
    },
    {
      title: "Smart Market Analysis",
      desc: "Understand market behavior, chart patterns, and trading psychology through structured learning.",
    },
    {
      title: "Strategic Thinking",
      desc: "Build clarity in market participation with confidence, patience, and long-term awareness.",
    },
    {
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

  const highlights = [
    {
      title: "Lifetime Support & Mentorship",
      desc: "Continuous guidance and learning support even after course completion to help students grow confidently in the market."
    },
    {
      title: "Learn From Scratch",
      desc: "The course is beginner-friendly and designed for people with absolutely zero stock market knowledge."
    },
    {
      title: "Serious Stock Market Learning",
      desc: "Designed for individuals who are willing to take their stock market journey seriously and build long-term skills."
    },
    {
      title: "Price Action & Market Structure",
      desc: "Learn support, resistance, trend analysis, candle science, and market behavior with better clarity."
    },
    {
      title: "Futures & Options Learning",
      desc: "Understand important concepts of futures, options, option chain, and derivatives trading."
    },
    {
      title: "Swing Trading & Concepts",
      desc: "Learn how to identify opportunities in swing trading and long-term investing with confidence."
    },
    {
      title: "Hedging & Risk Management",
      desc: "Understand capital protection, hedging techniques, and proper risk management methods."
    },
    {
      title: "Trading Psychology & Discipline",
      desc: "Develop emotional control, discipline, patience, and confidence required for consistent market participation."
    },
    {
      title: "Trade Execution & Strategy Building",
      desc: "Learn entry, exit, averaging, and execution techniques for better trading decisions."
    }
  ];

  return (
    <div className={styles.page}>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div className={styles.container}>

          <div className={styles.left}>
            <p className={styles.tagline}>
              MASTERCLASS STOCK MARKET EDUCATION
            </p>

            <h1 className={styles.title}>
              Masterclass For <span>Stock Market Learning</span>
            </h1>

            <p className={styles.subtitle}>
              Learn stock market concepts, trading psychology,
              market analysis, and disciplined decision-making.
            </p>

            <div className={styles.keywordBox}>
              <span>Stock Market Learning</span>
              <span>Trading Education</span>
              <span>Market Analysis</span>
              <span>Trading Psychology</span>
              <span>Technical Learning</span>
            </div>
<div className={styles.heroCtaWrap}>

  <div className={styles.priceBadge}>
    <span className={styles.old}>₹15,000</span>
    <span className={styles.new}>₹9,999</span>
    <span className={styles.discount}>Save 33%</span>
  </div>

  <Link to="/contactpage" className={styles.primaryBtn}>
    Enroll Now
  </Link>

  <p className={styles.note}>
    Lifetime Access • Beginner Friendly • Mentorship Included
  </p>

</div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageBox}>
              <img src={heroImage} alt="Masterclass" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= MASTER INTRO ================= */}
      <section className={styles.masterIntroSection}>
        <div className={styles.sectionContainer}>

          <div className={styles.masterIntroBox}>
            <h2>
              MASTERCLASS – <span>BECOME AN INDEPENDENT TRADER</span>
            </h2>

            <p>
              The Masterclass Course by Master Traders Academy is specially designed for individuals who are serious about building a long-term journey in the stock market and want to develop strong practical understanding with proper mentorship and guidance. This course focuses on creating confident and disciplined traders by covering important market concepts in a structured and practical way.            </p>

            <p>
              This course is designed completely from scratch and can be easily understood even by people who have zero knowledge about the stock market . The learning structure is simple, beginner-friendly, and practical, helping learners gradually build confidence from basic concepts to advanced market understanding.            </p>

            <p>
              One of the biggest advantages of this course is the Lifetime Support and Guidance , ensuring that learning never stops. Students continue receiving mentorship, market understanding, and practical guidance even after course completion, helping them grow with confidence over the long term.            </p>

            <p>
              Includes <b>Lifetime Support & Guidance</b> for continuous growth.
            </p>
          </div>

        </div>
      </section>
      {/* ================= HIGHLIGHTS ================= */}
    <section className={styles.highlightsSection}>
  <div className={styles.sectionContainer}>

    <div className={styles.sectionHeading}>
      <p>COURSE HIGHLIGHTS</p>
      <h2>Important Highlights of the Masterclass</h2>
    </div>

    <div className={styles.highlightsGrid}>
      {highlights.map((item, i) => (
        <div key={i} className={styles.highlightCard}>

          <div className={styles.iconBox}>
            {i + 1}
          </div>

          <div className={styles.content}>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* ================= PHILOSOPHY ================= */}
      <section className={styles.philosophySection}>
        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>
            <p>OUR LEARNING APPROACH</p>
            <h2>Principles Behind Strong Trading Habits</h2>
          </div>

          <div className={styles.philosophyGrid}>
            {philosophy.map((item, index) => (
              <div key={index} className={styles.philosophyCard}>

                {/* <div className={styles.cardNumber}>
                  {index + 1}
                </div> */}

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
              <p className={styles.smallTitle}>WHY CHOOSE MASTERCLASS</p>

              <h2>Designed For Better Market Understanding</h2>

              <p>
                Structured education, disciplined learning, and confidence-focused guidance.
              </p>
            </div>

            <div className={styles.whyRight}>
              {benefits.map((item, index) => (
                <div key={index} className={styles.benefitItem}>
                  <span>✔</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className={styles.pricingSection}>
        <div className={styles.sectionContainer}>

          <div className={styles.pricingBox}>

            <h2>Start Your Trading Journey Today</h2>

            <div className={styles.priceRow}>
              <div className={styles.oldPrice}>
        <span>₹15,000</span>
              </div>

              <div className={styles.newPrice}>
             <span>₹9,999</span>
              </div>
            </div>

            <Link to="/contactpage" className={styles.ctaBtn}>
              Enroll Now
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}