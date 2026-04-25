import React from "react";
import styles from "../Styles/Footer.module.css";
import whitelogo from "../Assets/logowidth.jpeg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow}></div>

      <div className={styles.container}>

        {/* BRAND */}
        <div className={styles.col}>
          <div className={styles.logo}>
            <img src={whitelogo} alt="Master Traders Academy Logo" />
          </div>

          <p className={styles.desc}>
            Empowering traders with professional market knowledge since 2015.
          </p>

          <div className={styles.socials}>
            <button type="button">f</button>
            <button type="button">𝕏</button>
            <button type="button">in</button>
            <button type="button">📺</button>
          </div>
        </div>

        {/* COURSES */}
        <div className={styles.col}>
          <h3>Courses</h3>

          <Link to="/courses">Master Trader</Link>
          <Link to="/courses">Masterclass</Link>
          <Link to="/courses">Option Hunter</Link>
          <Link to="/courses">Big Bull</Link>
        </div>

        {/* LINKS */}
        <div className={styles.col}>
          <h3>Quick Links</h3>

          <Link to="/why-us">Why Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/pricing">Pricing</Link>
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
