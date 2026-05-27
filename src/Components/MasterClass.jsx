import React from "react";
import styles from "../Styles/MasterTrading.module.css";
import { Link } from "react-router-dom";

import heroImage from "../Assets/masterclassdetail.png";

export default function MasterTrader() {

  const features = [
    {
      icon: "📈",
      title: "Discipline & Consistency",
      desc: "Develop emotional control, structured habits, and disciplined thinking for better market understanding.",
    },
    {
      icon: "🛡️",
      title: "Smart Market Analysis",
      desc: "Learn the importance of protecting capital through controlled and structured market participation.",
    },
    {
      icon: "💡",
      title: "Strategic Thinking",
      desc: "Build clarity in market participation with confidence, patience, and long-term awareness.",
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
      icon: "🎓",
      badge: "Mentorship Support",
      title: "Lifetime Support & Mentorship",
      desc: "Includes 3 Days of Theory Sessions followed by Lifetime Support and Mentorship, because continuous guidance and practical learning are most important in the stock market journey." },{
      icon: "🚀",
      badge: "Beginner Friendly",
      title: "Learn From Scratch",
      desc: "The course is beginner-friendly and designed for people with absolutely zero stock market knowledge.",
    },
    {
      icon: "📈",
      badge: "Market Understanding",
      title: "Serious Stock Market Learning",
      desc: "Designed for individuals who are willing to take their stock market journey seriously and build long-term skills.",
    },
    {
      icon: "🕯️",
      badge: "Price Action",
      title: "Price Action & Market Structure",
      desc: "Learn support, resistance, trend analysis, candle science, and market behavior with better clarity.",
    },
    {
      icon: "💹",
      badge: "Derivatives Learning",
      title: "Futures & Options Learning",
      desc: "Understand important concepts of futures, options, option chain, and derivatives trading.",
    },
    {
      icon: "🎯",
      badge: "Swing Trading",
      title: "Swing Trading & Concepts",
      desc: "Learn how to identify opportunities in swing trading and long-term investing with confidence.",
    },
    {
      icon: "🛡️",
      badge: "Risk Control",
      title: "Hedging & Risk Management",
      desc: "Understand capital protection, hedging techniques, and proper risk management methods.",
    },
    {
      icon: "⚡",
      badge: "Trading Psychology",
      title: "Trade Execution Logic",
      desc: "Develop emotional control, discipline, patience, and confidence required for consistent market participation.",
    },
    {
      icon: "🧩",
      badge: "Execution Skills",
      title: "Trade Execution & Strategy Building",
      desc: "Learn entry, exit, averaging, and execution techniques for better trading decisions.",
    }

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
              MASTERCLASS - BECOME AN INDEPENDENT TRADER            </p>

            <h1 className={styles.title}>
              Master The Art Of
              <span> Smart Stock Market Learning</span>
            </h1>
            <p className={styles.subtitle}>The Masterclass Course by Master Traders Academy is specially designed for individuals who are serious about building a long-term journey in the stock market and want to develop strong practical understanding with proper mentorship and guidance. This course focuses on creating confident and disciplined traders by covering important market concepts in a structured and practical way.</p>
            <p className={styles.subtitle}>
              This course is designed <strong style={{ color: "black" }}>completely from scratch </strong>and can be easily understood even by people who have <strong style={{ color: "black" }}>zero knowledge about the stock market .</strong> The learning structure is simple, beginner-friendly, and practical, helping learners gradually build confidence from basic concepts to advanced market understanding.</p>

            <p className={styles.subtitle}>
              One of the biggest advantages of this course is the <strong style={{ color: "black" }}>Lifetime Support and Guidance ,</strong>  ensuring that learning never stops. Students continue receiving mentorship, market understanding, and practical guidance even after course completion, helping them grow with confidence over the long term.              </p>



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
              {/* <div className={styles.imageCard}>

                <img
                  src={heroImage}
                  alt="Master Trader Stock Market Learning"
                />

              </div> */}
              <div className={styles.modeRibbon}>
                <span className={styles.liveDot}></span>
                Online & Offline Classes Available
              </div>

              {/* IMAGE */}
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

                  <span className={styles.newPrice}>
                    ₹14999
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
                  Join Master Class Program
                </h2>

                <p className={styles.masterPriceDesc}>
                  Flexible learning options with practical market education,
                  beginner-friendly guidance, and structured mentorship support.
                </p>

              </div>

              {/* RIGHT */}
              <div className={styles.masterPriceRight}>

                <div className={styles.masterNewPrice}>
                  ₹14999
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