import React from 'react';
import styles from '../Styles/About.module.css';
import learningtrading from "../Assets/trading.jpg";
import ourmission from "../Assets/ourMission.png";
import ourvission from "../Assets/ourvission.png";
import anandsir from "../Assets/AnandSir.JPG";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
    <section className={styles.heroSection}>
  <div className={styles.overlay}></div>

  <div className={styles.container}>
    <div className={styles.heroGrid}>

      {/* LEFT CONTENT */}
      <div className={styles.heroContent}>
        <span className={styles.badge}>📈 Trading Academy</span>

        <h1 className={styles.mainTitle}>
          About <span>Master Traders Academy</span>
        </h1>

        <p className={styles.subtitle}>
          Empowering traders with knowledge, discipline, and real market experience.
        </p>

        <button className={styles.heroBtn}>Explore Courses</button>
      </div>

      {/* RIGHT SIDE DECOR */}
      <div className={styles.heroCard}>
        <div className={styles.cardBox}>
          <h3>5000+</h3>
          <p>Students Trained</p>
        </div>
        <div className={styles.cardBox}>
          <h3>10+</h3>
          <p>Years Experience</p>
        </div>
      </div>

    </div>
  </div>
</section>

{/*About Sir*/}
<section className={styles.sirAboutSection}>
      <div className={styles.sirContainer}>

        {/* LEFT CONTENT */}
        <div className={styles.sirContent}>

          <p className={styles.sirTagline}>Founder & Lead Mentor</p>

          <h2 className={styles.sirTitle}>
            Anand Sir – <span>Master Traders Academy</span>
          </h2>

          <p className={styles.sirDesc}>
            Anand Sir is a seasoned market professional with deep expertise in
            technical analysis, price action trading, and risk management.
            With years of practical experience in the financial markets, he has
            dedicated his career to simplifying trading education for aspiring traders.
          </p>

          <p className={styles.sirDesc}>
            His teaching approach focuses on <b>real market understanding</b> rather than
            theory. He believes that successful trading comes from discipline,
            patience, and structured learning rather than shortcuts or speculation.
          </p>

          <ul className={styles.sirPoints}>
            <li>✔ Practical Market Experience</li>
            <li>✔ Simplified Trading Strategies</li>
            <li>✔ Risk Management Expertise</li>
            <li>✔ Mentored Hundreds of Students</li>
          </ul>

          <p className={styles.sirHighlight}>
            “My goal is to make every student confident enough to understand the
            market independently and trade with discipline.”
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.sirImageBox}>
          <img src={anandsir} alt="Anand Sir" />
        </div>

      </div>
    </section>
      {/* Welcome Section */}
    <section className={styles.welcomeWhiteSection}>
  <div className={styles.container}>
    <div className={styles.welcomeWhiteGrid}>

      {/* LEFT IMAGE */}
      <div className={styles.welcomeWhiteImage}>
        <img src={learningtrading} alt="Trading Learning" />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.welcomeWhiteContent}>
        <h2 className={styles.welcomeWhiteTitle}>
          Where Learning Meets Confidence
        </h2>

        <p>
          At Master Traders Academy, we transform beginners into confident
          traders with practical knowledge and real market exposure.
        </p>

        <p>
          Our structured programs cover swing trading, long-term investing,
          and active trading strategies with a strong focus on discipline
          and risk management.
        </p>

        {/* ICON FEATURES */}
        <div className={styles.welcomeWhitePoints}>
          <div>
            <span>📊</span>
            <p>Real Market Training</p>
          </div>
          <div>
            <span>🎯</span>
            <p>Focused Strategies</p>
          </div>
          <div>
            <span>💡</span>
            <p>Smart Learning</p>
          </div>
       
        </div>

      </div>

    </div>
  </div>
</section>



      {/* What Sets Us Apart */}
      <section className={styles.whatSetsApart}>
      <div className={styles.container}>

        <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>

        <div className={styles.featureGrid}>

          {/* 1 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👨‍🏫</div>
            <h3>Expert Mentors</h3>
            <p>
              Our team of experienced mentors bring years of real-market expertise and teaching excellence. Their personalized guidance helps you navigate market complexities with confidence and clarity.
            </p>
          </div>

          {/* 2 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📚</div>
            <h3>Comprehensive Curriculum</h3>
            <p>
              Master multiple trading strategies from swing trading to long-term investing with our structured and practical learning approach.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>Practical Learning</h3>
            <p>
              Learn by doing. Our hands-on approach ensures you gain real-world trading experience and market confidence.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Risk Management</h3>
            <p>
              Master the art of protecting your capital while maximizing returns through proven risk management strategies.
            </p>
          </div>

          {/* 5 - NEW */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Live Market Training</h3>
            <p>
              Experience real-time trading sessions where you learn how professionals analyze and execute trades directly in live market conditions.
            </p>
          </div>

          {/* 6 - NEW */}
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤝</div>
            <h3>Strong Trading Community</h3>
            <p>
              Join a supportive network of traders where you can share insights, discuss strategies, and grow together with continuous mentorship.
            </p>
          </div>

        </div>
      </div>
    </section>

      {/* Our Mission */}
  <section className={styles.missionWhiteSection}>
  <div className={styles.container}>
    <h2 className={styles.missionWhiteTitle}>Our Mission</h2>

    <div className={styles.missionWhiteWrapper}>

      {/* IMAGE */}
      <div className={styles.missionWhiteImage}>
        <img src={ourmission} alt="Mission - Stock market growth" />
      </div>

      {/* CONTENT */}
      <div className={styles.missionWhiteContent}>
        <p>
          Master Traders Academy is committed to democratizing stock market education 
          and making high-quality trading knowledge accessible to everyone.
        </p>

        <p>
          Our mission is to empower individuals with the skills, knowledge, and confidence 
          needed to make informed trading decisions and achieve consistent success in the market.
        </p>

        {/* HIGHLIGHT POINTS */}
        <div className={styles.missionPoints}>
          <div>✔ Practical Learning</div>
          <div>✔ Real Market Exposure</div>
          <div>✔ Expert Mentorship</div>
          <div>✔ Capital Growth Mindset</div>
        </div>

      </div>

    </div>
  </div>
</section>


      {/* Our Vision */}
      <section className={styles.visionSection}>
  <div className={styles.container}>
    <h2 className={styles.vissionsectionTitle}>Our Vision</h2>

    <div className={styles.visionWrapper}>
      <div className={styles.visionContent}>
        <p>
          To be the premier stock market training academy, recognized for excellence in transforming ordinary individuals into extraordinary traders. We envision a community of confident investors who understand market dynamics, manage risks effectively, and achieve their financial goals through informed decision-making.
        </p>

        <ul className={styles.points}>
          <li>Build confident traders</li>
          <li>Strong risk management mindset</li>
          <li>Practical market understanding</li>
        </ul>
      </div>

      <div className={styles.visionImage}>
        <img src={ourvission} alt="Vision" />
        <div className={styles.imageGlow}></div>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose Master Traders Academy?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Expert-Led Training</h4>
                <p>Learn from industry professionals with proven trading experience</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Comprehensive Strategies</h4>
                <p>Master swing trading, long-term investing, and active trading techniques</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Practical Support</h4>
                <p>Ongoing mentorship and live trading sessions for real-world application</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Flexible Learning</h4>
                <p>Choose online, offline, or blended learning options that fit your schedule</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Risk Management Focus</h4>
                <p>Learn to protect your capital while maximizing profitable opportunities</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.checkmark}>✓</span>
              <div className={styles.benefitText}>
                <h4>Community Support</h4>
                <p>Join a community of traders committed to continuous learning and growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
    <section className={styles.tradeCtaSection}>
  <div className={styles.tradeCtaOverlay}></div>

  <div className={styles.tradeCtaContainer}>
    <h2>Master the Markets with Confidence</h2>

    <p>
      Join a community of traders who learn real strategies, risk control, and smart investing techniques.
    </p>

    <button className={styles.tradeCtaButton}>
      Start Learning Now
    </button>
  </div>
</section>

    </div>
  );
}
