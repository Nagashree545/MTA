import React from "react";
import styles from "../Styles/MasterTrading.module.css";
import { Link } from "react-router-dom";

import heroImage from "../Assets/mastertraderdetail.png";

export default function MasterTrader() {

  const features = [
    {
      icon: "📈",
      title: "Technical Analysis",
      desc: "Understand charts, trends, price action, and market structure with a disciplined learning approach.",
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      desc: "Learn the importance of protecting capital through controlled and structured market participation.",
    },
    {
      icon: "💡",
      title: "Market Knowledge",
      desc: "Build strong awareness of market behavior, psychology, and long-term financial understanding.",
    },
  ];

  const benefits = [
    "Professional learning environment",
    "Structured market understanding",
    "Confidence-focused education",
    "Disciplined trading mindset",
    "Long-term growth approach",
    "Strategic market observation",
  ];

  const highlights = [
    {
      icon: "📚",
      badge: "Beginner Friendly",
      title: "Course Duration & Structure",
      desc: "Structured learning program with 3 days of theory sessions and 2 months of support for implementation and market understanding.",
    },
    {
      icon: "🚀",
      badge: "No Experience Needed",
      title: "Learn From Scratch",
      desc: "No prior stock market knowledge is required. This course is specially designed for beginners.",
    },
    {
      icon: "📈",
      badge: "Market Reading",
      title: "Price Action & Candle Science",
      desc: "Learn support, resistance, trend reading, candle science, and swing trading concepts practically.",
    },
    {
      icon: "💹",
      badge: "Derivatives Basics",
      title: "Futures & Options Basics",
      desc: "Understand futures trading, options trading, and derivatives market basics in a simple way.",
    },
    {
      icon: "🎯",
      badge: "Strategic Learning",
      title: "Option Chain & Greeks",
      desc: "Learn premium, Greeks, moneyness, CE/PE concepts, and option chain analysis clearly.",
    },
    {
      icon: "🛡️",
      badge: "Capital Protection",
      title: "Hedging & Risk Management",
      desc: "Build understanding of hedging strategies and disciplined risk management techniques.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* HERO SECTION */}
      <section className={styles.hero}>

        <div className={styles.overlay}></div>

        <div className={styles.container}>

          {/* LEFT */}
          <div className={styles.left}>

            <p className={styles.tagline}>
              MASTER TRADER PROGRAM
            </p>

            <h1 className={styles.title}>
              Build Strong Foundations In
              <span> Stock Market Trading</span>
            </h1>

            <p className={styles.subtitle}>
              Master Trader is designed for individuals who want
              structured stock market education, disciplined learning,
              and strong market understanding through a professional
              and confidence-focused environment.
            </p>

            <div className={styles.keywordBox}>

              <span>Technical Analysis</span>
              <span>Risk Management</span>
              <span>Market Knowledge</span>
              <span>Trading Psychology</span>
              <span>Stock Market Learning</span>

            </div>
<div className={styles.buttonGroup}>

  <Link
    to="/contactpage"
    className={styles.primaryBtn}
  >
    Join Now
  </Link>

  <div className={styles.inlinePrice}>

    <span className={styles.offerText}>
      Limited Offer
    </span>

    <div className={styles.priceWrap}>

      <span className={styles.oldPrice}>
        ₹5000
      </span>

      <span className={styles.newPrice}>
        ₹2999
      </span>

    </div>

  </div>

</div>

          </div>

          {/* RIGHT */}
          <div className={styles.right}>

            <div className={styles.imageCard}>

              <img
                src={heroImage}
                alt="Master Trader Stock Market Learning"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>ABOUT MASTER TRADER</p>

            <h2>
              Learn Stock Market Concepts With Confidence
            </h2>

          </div>

          <div className={styles.aboutGrid}>

            {features.map((item, index) => (
              <div
                key={index}
                className={styles.aboutCard}
              >

                <div className={styles.aboutIcon}>
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* COURSE OVERVIEW */}
      <section className={styles.courseOverviewSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>MASTER TRADER COURSE OVERVIEW</p>

            <h2>
              Beginner To Intermediate Level
              <span> Stock Market Learning Program</span>
            </h2>

          </div>

          <div className={styles.overviewCard}>

            <p>
              The Master Trader Course by Master Traders Academy is specially
              designed for beginners who want to start their stock market
              journey from basic to intermediate level with proper clarity
              and guidance.
            </p>

            <p>
              This course is ideal for individuals who want to understand
              the stock market in a simple and practical way before moving
              toward advanced-level learning and market participation.
            </p>

            <p>
              It is especially suitable for people who may not be sure about
              continuing advanced learning in the future due to timing
              constraints, job commitments, business responsibilities,
              or capital limitations.
            </p>

            <p>
              The course helps learners build a strong foundation by covering
              all major stock market concepts including price action,
              swing trading, investing, futures & options, hedging,
              and trading psychology.
            </p>

          </div>

        </div>

      </section>


      {/* COURSE HIGHLIGHTS */}
      <section className={styles.highlightSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>IMPORTANT HIGHLIGHTS</p>

            <h2>
              What You Will Learn
              <span> Inside The Program</span>
            </h2>

          </div>

          <div className={styles.highlightGrid}>

            {highlights.map((item, index) => (

              <div
                key={index}
                className={styles.highlightCard}
              >

                <div className={styles.highlightTop}>

                  <div className={styles.highlightIcon}>
                    {item.icon}
                  </div>

                  <div className={styles.highlightBadge}>
                    {item.badge}
                  </div>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* EXPERIENCE SECTION */}
      <section className={styles.experienceSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.experienceWrapper}>

            <div className={styles.expLeft}>

              <p className={styles.smallTitle}>
                WHY MASTER TRADER
              </p>

              <h2>
                Designed For Better Market Understanding
              </h2>

              <p>
                Master Trader focuses on helping individuals build
                discipline, market awareness, confidence, and
                structured decision-making through professional
                stock market education.
              </p>

            </div>

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


      {/* PRICE SECTION */}
      <section
        id="pricing"
        className={styles.priceSection}
      >

        <div className={styles.sectionContainer}>

          <div className={styles.priceCard}>

            <div className={styles.priceLeft}>

              <p className={styles.priceTag}>
                ONLINE & OFFLINE LEARNING
              </p>

              <h2>
                Join Master Trader Program
              </h2>

              <p>
                Flexible learning options with practical market education,
                beginner-friendly guidance, and structured mentorship support.
              </p>

            </div>

            <div className={styles.priceRight}>

              <div className={styles.oldPrice}>
                ₹5000
              </div>

              <div className={styles.newPrice}>
                ₹2999
              </div>

              <Link
                to="/contactpage"
                className={styles.enrollBtn}
              >
                Enroll Now
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}