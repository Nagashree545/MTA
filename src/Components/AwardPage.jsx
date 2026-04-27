import React from "react";
import styles from "../Styles/Award.module.css";
import awardImg from "../Assets/busineessiconicaward.jpg";

export default function AwardSection() {
  return (
    <section className={styles.awardSection}>

      <div className={styles.heading}>
        <h2>🏆 Our Achievements</h2>
        <p>Recognition that builds trust</p>
      </div>

      <div className={styles.card}>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <img src={awardImg} alt="Award" />
          <div className={styles.floatingBadge}>🏆 2025 Winner</div>
        </div>

        {/* CONTENT */}
        <div className={styles.content}>
          <span className={styles.badge}>Business Iconic Awards 2025</span>

          <h3 className={styles.title}>
            Best Stock Market Institute in Bangalore
          </h3>

          <p>
           Recognized for excellence in stock market education, strong mentorship,
  and a practical approach to real-world trading.
          </p>

          <div className={styles.stats}>
            <div>
              <h4>5000+</h4>
              <span>Traders Trained</span>
            </div>
            <div>
              <h4>4.9⭐</h4>
              <span>Student Rating</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
