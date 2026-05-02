import styles from "../Styles/MasterTrading.module.css";

export default function MasterTrading() {
  return (
    <div className={styles.page}>

      {/* 🔥 HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Master Trading Course</span>

          <h1>
            Build <span>Confidence</span> in Trading
          </h1>

          <p>
            A structured trading course designed to help you understand market
            behavior, improve decision-making, and develop a disciplined approach
            to trading in real market conditions.
          </p>

          <button className={styles.ctaBtn}>Enroll Now</button>
        </div>
      </section>

      {/* 📊 COURSE SNAPSHOT */}
      <section className={styles.section}>
        <h2>Course Snapshot</h2>

        <div className={styles.grid4}>
          <div className={styles.card}>
            <h4>Duration</h4>
            <p>1 Month Intensive</p>
          </div>

          <div className={styles.card}>
            <h4>Schedule</h4>
            <p>Friday – Sunday</p>
          </div>

          <div className={styles.card}>
            <h4>Timings</h4>
            <p>11:00 AM – 3:00 PM</p>
          </div>

          <div className={styles.card}>
            <h4>Mode</h4>
            <p>Online & Offline</p>
          </div>
        </div>

        <p className={styles.note}>
          Includes live market sessions to ensure real-time exposure and application.
        </p>
      </section>

      {/* 💡 ABOUT */}
      <section className={styles.lightSection}>
        <h2>About the Course</h2>

        <p className={styles.centerText}>
          This Master Trading Course is designed to simplify the learning process
          and help you build a clear understanding of how financial markets work.
          Instead of focusing only on theory, the course emphasizes structured
          thinking, discipline, and real-world application.
        </p>

        <p className={styles.centerText}>
          The goal is to help you move from confusion to clarity and develop the
          confidence needed to take independent trading decisions.
        </p>
      </section>

      {/* 📚 CURRICULUM */}
      <section className={styles.section}>
        <h2>Curriculum Highlights</h2>

        <div className={styles.curriculumGrid}>
          <div className={styles.curriculumCard}>
            <h4>Foundations of Trading</h4>
            <p>Market basics, instruments, and risk awareness.</p>
          </div>

          <div className={styles.curriculumCard}>
            <h4>Technical Analysis</h4>
            <p>Charts, indicators, trends, and price behavior.</p>
          </div>

          <div className={styles.curriculumCard}>
            <h4>Fundamental Analysis</h4>
            <p>Economic data, company insights, and global factors.</p>
          </div>

          <div className={styles.curriculumCard}>
            <h4>Trading Psychology</h4>
            <p>Discipline, mindset, and emotional control.</p>
          </div>

          <div className={styles.curriculumCard}>
            <h4>Live Market Practice</h4>
            <p>Real-time trading with guided mentorship.</p>
          </div>
        </div>
      </section>

      {/* 🎯 OUTCOMES */}
      <section className={styles.lightSection}>
        <h2>What You Will Achieve</h2>

        <div className={styles.outcomes}>
          <span>✔ Strong market understanding</span>
          <span>✔ Personal trading strategy</span>
          <span>✔ Better risk management</span>
          <span>✔ Confident decision-making</span>
        </div>
      </section>

      {/* 👨‍🏫 SUPPORT */}
      <section className={styles.section}>
        <h2>Mentorship & Support</h2>

        <p className={styles.centerText}>
          Learn directly from experienced traders with continuous mentorship,
          live guidance, and a supportive learning environment that helps you
          grow consistently.
        </p>
      </section>

      {/* 🚀 CTA */}
      <section className={styles.cta}>
        <h2>Start Your Trading Journey Today</h2>
        <p>Take the next step towards becoming a confident trader.</p>
        <button className={styles.ctaBtn}>Join Master Trading Course</button>
      </section>

    </div>
  );
}
