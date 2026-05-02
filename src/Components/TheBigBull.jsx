import styles from "../Styles/Thebigbull.module.css";

export default function BigBull() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>
            The <span>BigBull</span> Trading Course
          </h1>

          <p>
            Master the stock market with structured learning, real-time practice,
            and expert mentorship.
          </p>

          <button className={styles.ctaBtn}>Enroll Now</button>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className={styles.infoBar}>
        <div>📅 1 Month</div>
        <div>📖 Weekend Classes</div>
        <div>⏰ 11AM – 3PM</div>
        <div>💻 Online & Offline</div>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <h2>About The Course</h2>
        <p>
          A structured trading program designed to make you confident in real market conditions
          with practical strategies.
        </p>
      </section>

      {/* LEARN */}
      <section className={styles.section}>
        <h2>What You Will Learn</h2>

        <div className={styles.bulletBox}>
          <div>✔ Market Structure & Price Action</div>
          <div>✔ Technical Analysis</div>
          <div>✔ Fundamental Analysis</div>
          <div>✔ Risk Management</div>
          <div>✔ Trading Psychology</div>
          <div>✔ Live Trading Practice</div>
        </div>
      </section>

      {/* MODULES */}
      <section className={styles.sectionDark}>
        <h2>Course Modules</h2>

        <div className={styles.grid}>
          <div className={styles.card}>📚 Basics of Stock Market</div>
          <div className={styles.card}>📊 Technical Analysis</div>
          <div className={styles.card}>🌍 Fundamental Analysis</div>
          <div className={styles.card}>📉 Risk Management</div>
          <div className={styles.card}>🧠 Psychology Training</div>
          <div className={styles.card}>⚡ Live Market Sessions</div>
        </div>
      </section>

      {/* WHO */}
      <section className={styles.section}>
        <h2>Who Should Join?</h2>

        <div className={styles.grid}>
          <div className={styles.card}>Beginners</div>
          <div className={styles.card}>Working Professionals</div>
          <div className={styles.card}>Loss Making Traders</div>
          <div className={styles.card}>Market Enthusiasts</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={styles.section}>
        <h2>Benefits</h2>

        <div className={styles.grid}>
          <div className={styles.card}>📊 Live Trading</div>
          <div className={styles.card}>📘 Study Material</div>
          <div className={styles.card}>👨‍🏫 Mentorship</div>
          <div className={styles.card}>📱 App Access</div>
          <div className={styles.card}>📞 Lifetime Support</div>
        </div>
      </section>

      {/* APP */}
      <section className={styles.app}>
        <h2>Download Our App</h2>
        <p>Get updates, materials & live sessions</p>
        <p className={styles.phone}>📞 9663317167</p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start Your Trading Journey Today 🚀</h2>
        <button className={styles.ctaBtn}>Join Now</button>
      </section>

    </div>
  );
}
