import React from "react";
import styles from "../Styles/Footer.module.css";
import whitelogo from "../Assets/logowidth.jpeg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.col}>
          <div className={styles.logo}>
            <img src={whitelogo} alt="logo" />
          </div>

          <p className={styles.desc}>
            Empowering traders with professional market knowledge since 2015.
          </p>

          <div className={styles.socials}>
            <span>f</span>
            <span>𝕏</span>
            <span>in</span>
            <span>📺</span>
          </div>
        </div>

        {/* COURSES */}
        <div className={styles.col}>
          <h3>Courses</h3>
          <a href="/">Master Trader</a>
          <a href="/">Masterclass</a>
          <a href="/">Option Hunter</a>
          <a href="/">Big Bull</a>
        </div>

        {/* LINKS */}
        <div className={styles.col}>
          <h3>Quick Links</h3>
          <a href="/">Why Us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Refund Policy</a>
          <a href="/">Pricing</a>
        </div>

        {/* CONTACT */}
        <div className={styles.col}>
          <h3>Contact</h3>

          <a href="tel:+919663317167" className={styles.contactItem}>
            📞 +91 9663317167
          </a>

          <a
            href="mailto:info@mastertradersacademy.in"
            className={styles.contactItem}
          >
            ✉️ info@mastertradersacademy.in
          </a>

          <p className={styles.contactItem}>📍 Bangalore, India</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        <p>© 2025 Master Traders Academy</p>
        <div className={styles.badges}>
          <span>ISO</span>
          <span>NISM</span>
          <span>Best Academy</span>
        </div>
      </div>
    </footer>
  );
}
