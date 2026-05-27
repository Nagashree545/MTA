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
      title: "Course Duration & Learning Structure",
      desc: "Structured learning program with 3 days of theory sessions and 2 months of support for better understanding and implementation.",
    },
    {
      icon: "🚀",
      badge: "No Experience Needed",
      title: "Learn From Scratch",
      desc: "No prior stock market knowledge is required to start this course.",
    },
    {
      icon: "📈",
      badge: "Market Reading",
      title: "Price Action & Candle Science",
      desc: "Understand support, resistance, trends, candle science, and swing logic for practical market reading.",
    },
    {
      icon: "💹",
      badge: "Derivatives Basics",
      title: "Futures & Options Basics",
      desc: "Get a beginner-friendly understanding of the derivatives market, futures trading, and options trading.",
    },
    {
      icon: "🎯",
      badge: "Strategic Learning",
      title: "Option Chain & Greeks",
      desc: "Learn important concepts like premium, Greeks, moneyness, CE/PE, and option chain analysis for better decision-making.",
    },
    {
      icon: "🛡️",
      badge: "Capital Protection",
      title: "Hedging & Risk Management",
      desc: "Understand the basics of hedging and methods to manage risk during market fluctuations.",
    },
    {
    icon: "⚡",
    badge: "Execution Skills",
    title: "Trade Execution Logic",
    desc: "Learn entry, exit, averaging, and trade execution methods for better confidence in trading.",
  },
  {
    icon: "🧠",
    badge: "Mindset Building",
    title: "Trading Psychology & Practical Support",
    desc: "Develop trading discipline, emotional control, and confidence while receiving practical support to improve learning outcomes.",
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
              MASTER TRADER COURSE- LEARN FROM SCRATCH
            </p>

            <h1 className={styles.title}>
              Build Strong Foundations In
              <span> Stock Market Trading</span>
            </h1>

            <p className={styles.subtitle}>
              The Master Trader Course by Master Traders Academy is specially designed for beginners who want to start their stock market journey from basic to intermediate level with proper clarity and guidance. This course is ideal for individuals who want to understand the stock market in a simple and practical way before committing to advanced-level learning.
            </p>

            <p className={styles.subtitle}>
              <strong style={{color:"black"}}>It is especially suitable for people who may not be sure about continuing advanced learning in the future due to timing constraints, job commitments, business responsibilities, or capital limitations.</strong> The course helps learners build a strong foundation by covering all major stock market concepts including price action, swing trading, investing, futures & options, hedging, and trading psychology.
            </p>

            <p className={styles.subtitle}>
              Once learners gain confidence, clarity, and practical understanding of the market, they can later upgrade to advanced programs for deeper mastery and specialized strategies. The course is structured to make learning simple, practical and beginner-friendly
            </p>

          

            {/* KEYWORDS */}
            <div className={styles.keywordBox}>

              <span>Technical Analysis</span>
              <span>Risk Management</span>
              <span>Market Knowledge</span>
              <span>Trading Psychology</span>
              <span>Stock Market Learning</span>

            </div>

          </div>

          {/* RIGHT */}
          <div className={styles.right}>

            <div className={styles.rightContent}>

              {/* IMAGE */}
               <div className={styles.modeRibbon}>
                <span className={styles.liveDot}></span>
                Online & Offline Classes Available
              </div>
              <div className={styles.imageCard}>

                <img
                  src={heroImage}
                  alt="Master Trader Stock Market Learning"
                />

              </div>

              {/* PRICE CARD */}
              <div className={styles.inlinePrice}>

                <span className={styles.offerText}>
                  Limited Offer
                </span>

                <div className={styles.priceWrap}>

                  {/* <span className={styles.oldPrice}>
                    ₹5000
                  </span> */}

                  <span className={styles.newPrice}>
                    ₹4999
                  </span>

                </div>

              </div>

              {/* BUTTON */}
              <div className={styles.buttonGroup}>

                <Link
                  to="/contactpage"
                  className={styles.primaryBtn}
                >
                  Join Now
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>







      {/* COURSE HIGHLIGHTS */}
      <section className={styles.highlightSection}>

        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>

            <p>IMPORTANT HIGHLIGHTS</p>

            <h2>
             What You’ll Learn 
              <span> In This Program</span>
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
      <section className={styles.cleanExperienceSection}>

        <div className={styles.sectionContainer}>

          {/* HEADING */}
          <div className={styles.cleanHeading}>

            <p className={styles.cleanTag}>
              WHY MASTER TRADER
            </p>

            <h2>
              Learn The Market With
              <span> Confidence & Clarity</span>
            </h2>

            <p className={styles.cleanText}>
              A beginner-friendly stock market program focused on
              practical learning, discipline, and market understanding.
            </p>

          </div>

          {/* CARDS */}
          <div className={styles.cleanGrid}>

            {benefits.map((item, index) => (

              <div
                key={index}
                className={styles.cleanCard}
              >

                <div className={styles.cleanIcon}>
                  ✔
                </div>

                <h3>
                  {item}
                </h3>

              </div>

            ))}

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

      {/* PRICE SECTION */}
      <section
        id="pricing"
        className={styles.priceSection}
      >

        <section className={styles.masterPriceSection}>

          <div className={styles.masterPriceContainer}>

            <div className={styles.masterPriceCard}>

              {/* LEFT */}
              <div className={styles.masterPriceLeft}>

                <p className={styles.masterPriceTag}>
                  ONLINE & OFFLINE LEARNING
                </p>

                <h2 className={styles.masterPriceTitle}>
                  Join Master Trader Program
                </h2>

                <p className={styles.masterPriceDesc}>
                  Flexible learning options with practical market education,
                  beginner-friendly guidance, and structured mentorship support.
                </p>

              </div>

              {/* RIGHT */}
              <div className={styles.masterPriceRight}>

                {/* <div className={styles.masterOldPrice}>
                  ₹5000
                </div> */}

                <div className={styles.masterNewPrice}>
                  ₹4999
                </div>

                <Link
                  to="/contactpage"
                  className={styles.masterEnrollBtn}
                >
                  Enroll Now
                </Link>

              </div>


            </div>

          </div>

        </section>

      </section>

    </div>
  );
}