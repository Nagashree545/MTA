import React from 'react';
import styles from '../Styles/About.module.css';
import learningtrading from "../Assets/trading.jpg";
import ourmission from "../Assets/ourMission.png";
import ourvission from "../Assets/ourvission.png";
import anandsir from "../Assets/AnandSir.JPG";
import { Link } from 'react-router-dom';

const reviews = [
  { name: "Vijay Vijju", rating: 5,
     text: "Awesome learning experience with a highly experienced teacher. Learned trading and the stock market smoothly with clear explanations, practical examples, and real-time market insights. The sessions were well-structured and beginner-friendly, which built confidence step by step." },
  { name: "ಯಶಸ್ ಗೌಡ Yashas Gowda", rating: 5, text: "The only academy which teaches and provides the real knowledge about trading and investing without any unwanted or unneeded promotions They talk and teach only the real facts I have been observing for past 5 months and then joined the training program They are the best in Bangalore" },
  { name: "Ravi B Mali", rating: 5, 
    text: "Recently, attended the Big Bull course and completed successfully. Anand Patil sir explained the concepts easily and made us understand it with simple real life examples. Understood how to short lost stocks that gives 10x returns, risk management and more. Thanks for your guidance and support." },
  { name: "Venky VC", rating: 5, 
    text: "If you really want to learn stock market trading properly, this is the best place in Bangalore. The live market sessions helped me a lot to build confidence. Thank you, Anand sir!"},
  { name: "riya sen", rating: 5, text: "The training session on trading was absolutely phenomenal, delivering an engaging and insightful experience that left participants buzzing with excitement and newfound knowledge. The instructors, clearly experts in their field, taught an impressive array of valuable concepts and practical strategies that catered to both novice and seasoned traders." },
  { name: "Navya raj", rating: 5, text: "Thank you so much for this support and learning skills it was beautiful knowledge this master traders academy is very good tn others academy I am happy from this learning process and both sir thought very good tqsm 😊" },
  { name: "Uday Holkar", rating: 5, text: "joined Master Traders Academy and honestly it’s the best decision! Anand sir makes the subject very easy to understand even for beginners like me. Now I do small trades confidently." },
  { name: "Naushad", rating: 5, text: "It's a accelant academy to gain knowledge about stock market. Friendly environment. Offline and online option available. The way of teaching is excellent. I am learning from the beginning. Thanks to Anand Patil sir." },
  { name: "Ambika V", rating: 5, text: "The best academy personalized attention, strong concept building, and positive environments that boost confidence and skill development, leading to successful career outcomes for students." },
  { name: "yallappa bhujangi", rating: 5, text: "One of best Realistic and psychological stock market academy i ever seen in bangalore, Anand sir is a genuine and humble person to teach students who have learn very much interested in stock market, totally he have a best realistic and hidden statergys... always he want to Heartly well wisher to the student future.... every one try to learn with him once...." },
  { name: "Anish Z", rating: 5, text: "Thank you Anand sir for your support and learning in technical analysis. I visited many academy before but no one was providing real knowledge for a beginner like me. since I have life time support I will be visiting academy quite frequently." }
  ,{ name: "VINAY BHARATH", rating: 5, text: "I had a wonderful experience with the training. Anand Sir does not mind extending the class hours to clear doubts if we have. Very patient and helpful"}

];


   
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
            Anand Patil – <span>Master Traders Academy</span>
          </h2>

          <p className={styles.sirDesc}>
            Anand Patil is a seasoned market professional with deep expertise in
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
      <div className={styles.whatsetContainer}>

        <h2 className={styles.whatsetSectionTitle}>
          What Sets Us Apart
        </h2>

        <div className={styles.whatsetFeatureGrid}>

          {/* 1 */}
          <div className={styles.whatsetFeatureCard}>
            <div className={styles.whatsetFeatureIcon}>👨‍🏫</div>
            <h3>Expert Mentors</h3>
            <p>
              Our team of experienced mentors bring years of real-market expertise and teaching excellence. Their personalized guidance helps you navigate market complexities with confidence and clarity.
            </p>
          </div>

          {/* 2 */}
          <div className={styles.whatsetFeatureCard}>
            <div className={styles.whatsetFeatureIcon}>📚</div>
            <h3>Comprehensive Curriculum</h3>
            <p>
              Master multiple trading strategies from swing trading to long-term investing with our structured and practical learning approach.
            </p>
          </div>

          {/* 3 */}
          <div className={styles.whatsetFeatureCard}>
            <div className={styles.whatsetFeatureIcon}>🎯</div>
            <h3>Practical Learning</h3>
            <p>
              Learn by doing. Our hands-on approach ensures you gain real-world trading experience and market confidence.
            </p>
          </div>

          {/* 4 */}
          <div className={styles.whatsetFeatureCard}>
            <div className={styles.whatsetFeatureIcon}>🔒</div>
            <h3>Risk Management</h3>
            <p>
              Master the art of protecting your capital while maximizing returns through proven risk management strategies.
            </p>
          </div>

          {/* 5 */}
          <div className={styles.whatsetFeatureCard}>
            <div className={styles.whatsetFeatureIcon}>📊</div>
            <h3>Live Market Training</h3>
            <p>
              Experience real-time trading sessions where you learn how professionals analyze and execute trades directly in live market conditions.
            </p>
          </div>

          {/* 6 */}
          <div className={styles.whatsetFeatureCard}>
            <div className={styles.whatsetFeatureIcon}>🤝</div>
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

      {/* Google reviews*/}
 <section className={styles.reviewSection}>

      <div className={styles.header}>
        <h2>⭐ 4.9 Student Reviews</h2>
        <p>Trusted by hundreds of learners</p>
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
        href="https://www.google.com/search?sca_esv=b5576d60e09f6916&rlz=1C1UEAD_en-GBIN1164IN1180&sxsrf=ANbL-n43CU2YrpNcr9hn2UGstyxz7hu9Rw:1777396519444&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOe-EC5QPsmeu0ebi9YEXhOKxmFNws3iT5DV_F_OAB2OA2QaRdUg30MaO-n9nx6oFIbKfg0oCBTi0dlf0riL_EMPciAv934ps5Q3d2WDg3k0g8BoO0g%3D%3D&q=Master+Traders+Academy+Reviews&sa=X&ved=2ahUKEwjClqqBhpGUAxUsSGwGHQ_ZMtgQ0bkNegQILhAI"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewMore}
      >
        View More Reviews →
      </a>

    </section>
      {/* Google Reviews */}



      {/* Call to Action */}

<section className={styles.tradeCtaSection}>
  <div className={styles.tradeCtaContainer}>

    <h2>Start Your Trading Journey Today</h2>

    <p>
      Learn proven strategies, risk management, and real market execution 
      with expert-led courses designed for beginners and professionals.
    </p>

    <Link to="/courses" className={styles.tradeCtaButton}>
      Explore Courses
    </Link>

  </div>
</section>

    </div>
  );
}
