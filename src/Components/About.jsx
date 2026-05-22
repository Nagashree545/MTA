import React from 'react';
import { Helmet } from "react-helmet-async";
import styles from '../Styles/About.module.css';
import learningtrading from "../Assets/trading.jpg";
import ourmission from "../Assets/ourMission.png";
import ourvission from "../Assets/ourvission.png";
import anandsir from "../Assets/AnandSir.JPG";
import { Link } from 'react-router-dom';
import FAQ from './Faq';

const reviews = [
  {
    name: "Vijay Vijju", rating: 5,
    text: "Awesome learning experience with a highly experienced teacher. Learned trading and the stock market smoothly with clear explanations, practical examples, and real-time market insights. The sessions were well-structured and beginner-friendly, which built confidence step by step."
  },
  { name: "ಯಶಸ್ ಗೌಡ Yashas Gowda", rating: 5, text: "The only academy which teaches and provides the real knowledge about trading and investing without any unwanted or unneeded promotions They talk and teach only the real facts I have been observing for past 5 months and then joined the training program They are the best in Bangalore" },
  {
    name: "Ravi B Mali", rating: 5,
    text: "Recently, attended the Big Bull course and completed successfully. Anand Patil sir explained the concepts easily and made us understand it with simple real life examples. Understood how to short lost stocks that gives 10x returns, risk management and more. Thanks for your guidance and support."
  },
  {
    name: "Venky VC", rating: 5,
    text: "If you really want to learn stock market trading properly, this is the best place in Bangalore. The live market sessions helped me a lot to build confidence. Thank you, Anand sir!"
  },
  { name: "riya sen", rating: 5, text: "The training session on trading was absolutely phenomenal, delivering an engaging and insightful experience that left participants buzzing with excitement and newfound knowledge." },
  { name: "Navya raj", rating: 5, text: "Thank you so much for this support and learning skills it was beautiful knowledge this master traders academy is very good than others academy." },
  { name: "Uday Holkar", rating: 5, text: "Joined Master Traders Academy and honestly it’s the best decision! Anand sir makes the subject very easy to understand even for beginners like me." },
  { name: "Naushad", rating: 5, text: "It's an excellent academy to gain knowledge about stock market. Friendly environment and the way of teaching is excellent." },
  { name: "Ambika V", rating: 5, text: "The best academy with personalized attention, strong concept building, and positive environments that boost confidence." },
  { name: "yallappa bhujangi", rating: 5, text: "One of best realistic and psychological stock market academy I ever seen in Bangalore." },
  { name: "Anish Z", rating: 5, text: "Thank you Anand sir for your support and learning in technical analysis." },
  { name: "VINAY BHARATH", rating: 5, text: "I had a wonderful experience with the training. Anand Sir is very patient and helpful." }
];

export default function About() {
  return (
    <>
      <Helmet>

        <title>
          About Master Traders Academy | Stock Market Training Institute in Bangalore
        </title>

        <meta
          name="description"
          content="Master Traders Academy is a trusted stock market training institute in Bangalore offering technical analysis, options trading, swing trading, intraday trading, and live market mentorship."
        />

        <meta
          name="keywords"
          content="stock market training Bangalore, trading academy Bangalore, options trading course, technical analysis training, intraday trading classes"
        />

        <meta
          name="author"
          content="Master Traders Academy"
        />

        <link
          rel="canonical"
          href="https://mastertradersacademy.in/about"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Master Traders Academy - Trading Institute in Bangalore"
        />

        <meta
          property="og:description"
          content="Professional stock market trading courses and live market mentorship in Bangalore."
        />

        <meta
          property="og:url"
          content="https://mastertradersacademy.in/about"
        />

        <meta
          property="og:type"
          content="website"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Master Traders Academy",
            "url": "https://mastertradersacademy.in/",
            "description": "Professional stock market trading academy in Bangalore providing technical analysis and live market mentorship."
          }
          `}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Do you provide live market sessions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide live market mentorship and practical trading sessions."
                }
              },
              {
                "@type": "Question",
                "name": "Who can join Master Traders Academy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beginners, students, investors, and experienced traders can join our courses."
                }
              }
            ]
          }
          `}
        </script>

      </Helmet>

      <main className={styles.aboutPage}>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.overlay}></div>

          <div className={styles.container}>
            <div className={styles.heroGrid}>

              {/* LEFT CONTENT */}
              <div className={styles.heroContent}>
                <span className={styles.badge}>📈 Trading Academy</span>

                <h1 className={styles.mainTitle}>
                  About <span>Master Traders Academy</span> – Stock Market Training Institute in Bangalore
                </h1>

                <p className={styles.subtitle}>
                  Empowering traders with knowledge, discipline, and real market experience.
                </p>

                <Link to="/courses" className={styles.heroBtn}>
                  Explore Courses
                </Link>
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

              <p className={styles.sirTagline}>
                Founder & Lead Mentor
              </p>

              <h2 className={styles.sirTitle}>
                Anand Patil – <span>Master Traders Academy</span>
              </h2>

              <p className={styles.sirDesc}>
                <strong>Trader Trainer & Stock Market Psychologist</strong>, Anand Patil is a seasoned market professional with deep expertise in technical analysis, price action trading, and risk management.
              </p>

              <p className={styles.sirDesc}>
                His teaching approach focuses on <b>real market understanding</b> rather than theory.
              </p>

              <ul className={styles.sirPoints}>
                <li>✔ Practical Market Experience</li>
                <li>✔ Simplified Trading Strategies</li>
                <li>✔ Risk Management Expertise</li>
                <li>✔ Mentored Hundreds of Students</li>
              </ul>

              <p className={styles.sirHighlight}>
                “My goal is to make every student confident enough to understand the market independently and trade with discipline.”
              </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.sirImageBox}>
              <img
                src={anandsir}
                alt="Anand Patil Stock Market Trainer Bangalore"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        {/* Welcome Section */}
        <section className={styles.welcomeWhiteSection}>
          <div className={styles.container}>
            <div className={styles.welcomeWhiteGrid}>

              {/* LEFT IMAGE */}
              <div className={styles.welcomeWhiteImage}>
                <img
                  src={learningtrading}
                  alt="Stock Market Trading Classes Bangalore"
                  loading="lazy"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className={styles.welcomeWhiteContent}>
                <h2 className={styles.welcomeWhiteTitle}>
                  Where Learning Meets Confidence
                </h2>

                <p>
                  At Master Traders Academy, we transform beginners into confident traders through structured learning and expert mentorship.

                </p>

                <p>
                  Our structured programs cover swing trading, long-term investing, and active trading strategies with a strong focus on discipline and risk management.
                </p>

                {/* ICON FEATURES */}
                <div className={styles.welcomeWhitePoints}>
                  <div>
                    <span>💡</span>
                    <p>Smart Trading Education</p>
                  </div>

                  <div>
                    <span>🎯</span>
                    <p>Focused Strategies</p>
                  </div>

                  <div>
                    <span>📚</span>
                    <p>Structured Learning</p>
                  </div>

                  <div>
                    <span>
                      🛡️</span>
                    <p>Risk Management Focus</p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.missionWhiteSection}>
          <div className={styles.container}>
            <h2 className={styles.missionWhiteTitle}>
              Our Mission
            </h2>

            <div className={styles.missionWhiteWrapper}>

              <div className={styles.missionWhiteImage}>
                <img
                  src={ourmission}
                  alt="Stock Market Trading Mission"
                  loading="lazy"
                />
              </div>

              <div className={styles.missionWhiteContent}>
                <p>
                  At Master Traders Academy, At Master Traders Academy, our mission is to empower individuals with the knowledge, confidence, and disciplined mindset needed to grow as successful traders. Through structured learning and expert guidance,  to inspire smarter decision-making, continuous improvement, and long-term success in the trading journey.

                </p>

                <p>
                  We aim to simplify complex concepts and provide the right guidance so that anyone can start their trading journey with a strong foundation.
                </p>
                <div className={styles.missionPoints}>
                  <div>✔ Concept-Based Learning</div>
                  <div>✔ Structured Trading Education</div>
                  <div>✔ Expert Mentorship</div>
                  <div>✔ Growth-Oriented Mindset</div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Vision */}
        <section className={styles.visionSection}>
          <div className={styles.container}>
            <h2 className={styles.vissionsectionTitle}>
              Our Vision
            </h2>

            <div className={styles.visionWrapper}>

              <div className={styles.visionContent}>
                <p>
                  At Master Traders Academy, our vision is to create a community of confident and knowledgeable traders who approach the markets with discipline, clarity, and a growth mindset. We aspire to inspire continuous learning, smarter decision-making, and long-term success through quality education and strategic guidance.
                </p>

                <p>
                  We aim to shape a new generation of traders with the right mindset and strategies.
                </p>

              
                 <div className={styles.missionPoints}>
                  <div>✔ Build confident traders</div>
                  <div>✔ Strong risk management mindset</div>
                  <div>✔ Practical market understanding</div>
                </div>
            </div>

              <div className={styles.visionImage}>
                <img
                  src={ourvission}
                  alt="Stock Market Training Vision"
                  loading="lazy"
                />

                <div className={styles.imageGlow}></div>
              </div>

            </div>
          </div>
        </section>

        {/* Google reviews*/}
        <section className={styles.reviewSection}>

          <div className={styles.header}>
            <h2>⭐ 4.9 Google Rating by Students</h2>
            <p>Trusted by thousands of learners</p>
          </div>

          <div className={styles.grid}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.card}>

                <div className={styles.top}>
                  <div className={styles.avatar}>
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h4>{review.name}</h4>

                    <div className={styles.stars}>
                      {"⭐".repeat(review.rating)}
                    </div>
                  </div>
                </div>

                <p className={styles.text}>
                  "{review.text}"
                </p>

              </div>
            ))}
          </div>

          <a
            href="https://www.google.com/search?q=Master+Traders+Academy+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMore}
          >
            View More Reviews →
          </a>

        </section>
        <FAQ />

        {/* Call to Action */}
        <section className={styles.tradeCtaSection}>
          <div className={styles.tradeCtaContainer}>

            <h2>Start Your Trading Journey Today</h2>

            <p>
              Learn proven strategies, risk management, and real market execution with expert-led courses designed for beginners and professionals.
            </p>

            <Link to="/courses" className={styles.tradeCtaButton}>
              Explore Courses
            </Link>

          </div>
        </section>

      </main>
    </>
  );
}