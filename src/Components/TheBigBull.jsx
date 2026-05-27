import React from "react";
import styles from "../Styles/MasterTrading.module.css";
import { Link } from "react-router-dom";

import heroImage from "../Assets/thebigbulldetail.png"

export default function TheBigBull() {

  const features = [
    {
      icon: "📈",
      title: "Market Mastery",
      desc: "Build strong stock market understanding with structured learning focused on discipline, clarity, and confidence.",
    },
    {
      icon: "🛡️",
      title: "Trading Psychology",
      desc: "Learn the importance of emotional balance, patience, and mindset development for better decision-making.",
    },
    {
      icon: "💡",
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

 const highlights = [
  {
    icon: "📘",
    badge: "Equity & Swing Trading",
    title: "Specialized in Equity & Swing Trading",
    desc: "Designed specifically for individuals who want to grow in Equity Investing and Swing Trading."
  },
  {
    icon: "🎓",
    badge: "Long-Term Mentorship",
    title: "3 Days Theory + 1 Year Mentorship",
    desc: "Intensive theory sessions followed by long-term mentorship and continuous practical guidance.",
  },
  {
    icon: "📈",
    badge: "Proven Trading Strategy",
    title: "One Powerful Proven Strategy",
    desc: "Focuses on mastering one high-quality strategy instead of learning multiple confusing methods.",
  },
  {
    icon: "🧠",
    badge: "10+ Years Experience",
    title: "10+ Years Tried & Tested Logic",
    desc: "The strategy has been practically used and refined for over 10 years by Anand Patil.",
  },
  {
    icon: "💎",
    badge: "Focused Learning Approach",
    title: "Quality Over Quantity Approach",
    desc: "The program believes repeated practice of one proven setup is more effective than learning many strategies.",
  },
  {
    icon: "🎯",
    badge: "Practical Market Learning",
    title: "6. Practical Market Understanding",
    desc: "Learn how to identify quality entries, exits, trends, and strong swing trading opportunities.",
  },
  {
    icon: "🛡️",
    badge: "Disciplined Learning",
    title: "Structured & Focused Learning",
    desc: "A niche mentorship program designed for focused learning and disciplined execution.",
  },
  {
    icon: "⚡",
    badge: "Trader Mindset",
    title: "Confidence & Discipline Building",
    desc: "Helps traders and investors develop patience, discipline, and long-term market confidence.",
  },
  {
    icon: "🤝",
    badge: "Personal Guidance",
    title: "1:1 Demo Session Available",
    desc: "Interested learners can connect with the team to book a personalized 1:1 demo and understand the program better.",
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
              THE BIG BULL - TRADE WITH CONFIDENCE           </p>

            <h1 className={styles.title}>
              Professional Market Learning
              <span> Made Simple</span>
            </h1>
            <p className={styles.subtitle}>The Big Bull Course by Master Traders Academy is a
              niche and premium mentorship program specially designed for
              individuals who want to master Equity Investing and Swing
              Trading with clarity, confidence, and discipline.
              Unlike most courses in the market that teach multiple
              confusing strategies, this program focuses on only <strong style={{ color: "black" }}>completely from scratch </strong>and can be easily understood even by people who have <strong style={{ color: "black" }}>one powerful tried-and-tested strategy </strong>that has been used and refined for over 10 years by Anand Patil.</p>
            <p className={styles.subtitle}>
              The philosophy behind this course is simple — mastering one proven strategy through repeated practice is far more effective than learning multiple strategies without clarity. The Big Bull Program focuses on helping learners deeply understand market behavior, identify strong swing trading opportunities, and spot potential multibagger stocks with a structured and practical approach.</p>
            <p className={styles.subtitle}>
              The program includes <strong style={{ color: "black" }}>3 Days of Intensive Theory Sessions</strong> followed by <strong style={{ color: "black" }}>1 Year of Mentorship and Guidance</strong> to help learners practically implement the strategy with confidence and discipline in real market conditions.</p>

            <p className={styles.subtitle}>This course is ideal for serious learners who want to build long-term confidence in Equity and Swing Trading through focused mentorship and practical implementation. Interested learners can connect with the team to book a <strong style={{ color: "black" }}>1:1 Demo Session </strong> for better understanding and guidance.</p>
            {/* KEYWORDS */}
            <div className={styles.keywordBox}>

            <span>Market Mastery</span>
              <span>Trading Psychology</span>
              <span>Technical Analysis</span>
              <span>Stock Market Learning</span>
              <span>Risk Management</span>

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
                Only Offline Classes Available
              </div>

              {/* IMAGE */}
              <div className={styles.imageCard}>

                <img
                  src={heroImage}
                  alt="THE BIG BULL Stock Market Learning"
                />

              </div>

              {/* PRICE CARD */}
              <div className={styles.inlinePrice}>

                <span className={styles.offerText}>
                  Limited Offer
                </span>

                <div className={styles.priceWrap}>

                  <span className={styles.newPrice}>
                    ₹99999
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
              WHY THE BIG BULL
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

            <p>ABOUT THE BIG BULL</p>

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
                  ONLY OFFLINE LEARNING
                </p>

                <h2 className={styles.masterPriceTitle}>
                  Join THE BIG BULL  Program
                </h2>

                <p className={styles.masterPriceDesc}>
                  Flexible learning options with practical market education,
                  beginner-friendly guidance, and structured mentorship support.
                </p>

              </div>

              {/* RIGHT */}
              <div className={styles.masterPriceRight}>

                <div className={styles.masterNewPrice}>
                  ₹99999
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