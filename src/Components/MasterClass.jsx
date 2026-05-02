import styles from "../Styles/MasterClass.module.css";

export default function Masterclass() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Become a <span>Confident Trader</span>
          </h1>
          <p>
            Learn how to understand market behavior, think clearly, and build a
            disciplined trading approach with confidence.
          </p>
          <button className={styles.ctaBtn}>Join Masterclass</button>
        </div>
      </section>

      {/* INFO */}
      <section className={styles.info}>
        <div>📅 1 Month Program</div>
        <div>📖 Weekend Classes</div>
        <div>⏰ 11 AM – 3 PM</div>
        <div>💻 Online & Offline</div>
      </section>

      {/* ABOUT */}
    {/* 💎 ABOUT MASTERCLASS (PREMIUM CARD) */}
<section className={styles.aboutSection}>

  <div className={styles.aboutCard}>

    <h2>About the Masterclass</h2>

    <p className={styles.aboutText}>
      This masterclass is designed to simplify trading and remove confusion.
      Instead of overwhelming concepts, it focuses on helping you understand
      market behavior and build a structured approach to decision-making.
    </p>

    <p className={styles.aboutText}>
      Develop clarity, improve discipline, and gain the confidence needed to
      approach trading with consistency and control.
    </p>

    {/* 🔥 HIGHLIGHT POINTS */}
    <div className={styles.aboutPoints}>
      <div>✔ Clear Market Understanding</div>
      <div>✔ Structured Decision-Making</div>
      <div>✔ Confidence Building</div>
      <div>✔ Disciplined Approach</div>
    </div>

  </div>

</section>


      {/* FEATURES */}
      <section className={styles.features}>
        <div className={styles.feature}>
          <h3>Market Understanding</h3>
          <p>Understand price movement and behavior.</p>
        </div>

        <div className={styles.feature}>
          <h3>Strategy Building</h3>
          <p>Create a structured trading approach.</p>
        </div>

        <div className={styles.feature}>
          <h3>Trading Psychology</h3>
          <p>Build discipline and emotional control.</p>
        </div>
      </section>

      {/* PROGRAM */}
      <section className={styles.program}>
        <div className={styles.programBox}>
          <h3>📚 Curriculum Highlights</h3>
          <ul>
            <li>Foundations of Trading</li>
            <li>Technical Analysis</li>
            <li>Fundamental Analysis</li>
            <li>Trading Psychology</li>
            <li>Live Market Practice</li>
          </ul>
        </div>

        <div className={styles.programBox}>
          <h3>🎯 Learning Outcomes</h3>
          <ul>
            <li>Analyze markets with clarity</li>
            <li>Build your own strategy</li>
            <li>Improve risk management</li>
            <li>Trade with confidence</li>
          </ul>
        </div>

        <div className={styles.programBox}>
          <h3>👨‍🏫 Support</h3>
          <p>
            Learn directly from experienced traders with continuous mentorship
            and a supportive learning environment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start Your Trading Journey</h2>
        <p>Take the next step towards becoming a confident trader.</p>
        <button className={styles.ctaBtn}>Enroll Now</button>
      </section>

    </div>
  );
}
