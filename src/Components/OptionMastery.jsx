import React from "react";
import styles from "../Styles/MasterTrading.module.css";
import { Link } from "react-router-dom";

import heroImage from "../Assets/optionmystrydetail.png";

export default function MasterTrader() {

  const features = [
    {
      icon: "📈",
      title: "Options Fundamentals",
      desc: "Understand the core concepts of options trading, strike prices, premiums, expiry, and market movement analysis.",
    },
    {
      icon: "💡",
      title: "Strategic Thinking",
      desc: "Build structured decision-making skills through disciplined market observation and logical trading approaches"
    },
    {
      icon: "🛡️",
      title: "Risk Awareness",
      desc: "Learn the importance of risk control, capital management, and emotional discipline in trading.",
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

  const highlights = [
    {
      icon: "🎓",
      badge: "Advanced Mentorship",
      title: "Advanced Options Trading Mentorship",
      desc: "Designed for traders who already understand the basics and want to master advanced-level trading concepts."
    },
    {
      icon: "🏦",
      badge: "Smart Money Concepts",
      title: "Learn How Big Players Trade",
      desc: "Understand Smart Money Concepts (SMC) and how institutional participants operate in the market.",
    },
    {
      icon: "📊",
      badge: "Professional Strategies",
      title: "Professional Buy / Sell / Hedge Strategies",
      desc: "Learn professional-level option buying, option selling, and hedging techniques used in real-market conditions.",
    },
    {
      icon: "⚡",
      badge: "Gamma Concepts",
      title: "Gamma Blast Logic",
      desc: "Understand advanced gamma-based market movement concepts and high-probability trading logic.",
    },
    {
      icon: "💡",
      badge: "Advanced Concepts",
      title: "Exclusive Trading Concepts",
      desc: "Learn unique market approaches and advanced strategies that very few retail traders know."
    },
    {
      icon: "🧠",
      badge: "Trader Psychology",
      title: "Market Psychology & Trader Mindset",
      desc: "Develop discipline, emotional control, patience, and execution confidence required for high-level trading.",
    },
    {
      icon: "🛡️",
      badge: "Elite Trading Mindset",
      title: "Top 5% Trader Mindset",
      desc: "The program is structured to help traders improve decision-making and move towards elite-level market understanding.",
    },
    {
      icon: "🤝",
      badge: "Mentorship Program",
      title: "Mentorship-Based Learning",
      desc: "This is not just a recorded course — it includes active mentorship, guidance, and practical learning support.",
    },
    {
      icon: "📅",
      badge: "Structured Learning",
      title: "3 Days Theory + 3 Months Mentorship",
      desc: "Intensive learning sessions combined with long-term mentorship for practical implementation and clarity.",
    },
    {
      icon: "🔥",
      badge: "Dedicated Traders",
      title: "3 Days Theory + 3 Months Mentorship",
      desc: "Created specifically for individuals who genuinely want to level up their trading journey and master advanced trading skills.",
    }
  ];
  return (
    <div className={styles.page}>
      <Helmet>

        <title>
          Option Mastery Program | Advanced Options Trading Mentorship
        </title>

        <meta
          name="description"
          content="Join the Option Mastery Mentorship Program to learn advanced options trading, smart money concepts, professional strategies, risk management, and trading psychology with expert mentorship."
        />

        <meta
          name="keywords"
          content="Option Mastery, options trading course, advanced options trading, stock market mentorship, smart money concepts, trading psychology, option buying and selling, risk management, stock market course India"
        />

        <meta
          property="og:title"
          content="Option Mastery | Advanced Options Trading Mentorship"
        />

        <meta
          property="og:description"
          content="Master advanced options trading concepts with mentorship, smart money strategies, and professional trading techniques."
        />

        <meta
          property="og:type"
          content="website"
        />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Option Mastery Mentorship Program",
            "description": "Advanced options trading mentorship program with smart money concepts, risk management, and trading psychology.",
            "provider": {
              "@type": "Organization",
              "name": "Master Traders Academy"
            }
          }
          `}
        </script>

      </Helmet>

      {/* HERO SECTION */}
      <section className={styles.hero}>

        <div className={styles.overlay}></div>

        <div className={styles.container}>

          {/* LEFT */}
          <div className={styles.left}>

            <p className={styles.tagline}>
              OPTION MASTERY – MENTORSHIP PROGRAM OVERVIEW</p>

            <h1 className={styles.title}>
              Build Confidence In              <span>Every Options Trade </span>
            </h1>
            <p className={styles.subtitle}>The Option Mastery Mentorship Program by Master Traders Academy is specially designed for traders who already have basic stock market knowledge and want to level up their understanding with advanced market concepts and professional trading logic. This program focuses on helping traders understand how experienced and institutional-level participants operate in the market.</p>
            <p className={styles.subtitle}>
              Unlike basic trading courses, this is a high-level mentorship program created for individuals who are serious about mastering options trading, market psychology, smart money concepts, and advanced execution strategies. The program includes powerful concepts and trading approaches that very few retail traders are aware of, helping learners build the mindset and skills required to become part of the top-performing traders in the market.</p>
            <p className={styles.subtitle}>
              <strong style={{ color: "black" }}>This is not just a course — it is a mentorship-driven learning experience that includes 3 Days of Intensive Theory Sessions along with 3 Months of Continuous Mentorship and Guidance to help traders practically apply concepts with confidence and discipline.</strong>
            </p>

            {/* KEYWORDS */}
            <div className={styles.keywordBox}>

              <span>Options Basics</span>
              <span>Strategies</span>
              <span>Risk Control</span>
              <span>Market Psychology</span>

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
                  alt="Option Mastery Advanced Options Trading Mentorship Program"
                />

              </div>

              {/* PRICE CARD */}
              <div className={styles.inlinePrice}>

                <span className={styles.offerText}>
                  Limited Offer
                </span>

                <div className={styles.priceWrap}>

                  <span className={styles.newPrice}>
                    ₹29999
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
              WHY OPTION MASTERY
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

            <p>ABOUT OPTION MASTERY</p>

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
                  Join OPTION MASTERY Program
                </h2>

                <p className={styles.masterPriceDesc}>
                  Flexible learning options with practical market education,
                  beginner-friendly guidance, and structured mentorship support.
                </p>

              </div>

              {/* RIGHT */}
              <div className={styles.masterPriceRight}>

                <div className={styles.masterNewPrice}>
                  ₹29999
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