import React from "react";
import styles from "../Styles/Footer.module.css";
import whitelogo from "../Assets/logofull.png";
import { Link } from "react-router-dom";

// icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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

        
        </div>

        {/* COURSES */}
        <div className={styles.col}>
          <h3>Courses</h3>
          <Link to="/courses">Master Trader</Link>
          <Link to="/courses">Masterclass</Link>
          <Link to="/courses">Option Hunter</Link>
          <Link to="/courses">The Big Bull</Link>
        </div>

        {/* LINKS */}
        <div className={styles.col}>
          <h3>Quick Links</h3>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/termsandcondition">Terms & Conditions</Link>
            {/* SOCIAL ICONS */}
          <div className={styles.socials}>
            <a href="https://www.facebook.com/people/Master-Traders-Academy/61578116649789/?locale=en_GB#" className={styles.icon}><FaFacebookF /></a>
            <a href="https://www.instagram.com/mastertraders.academy/" className={styles.icon}><FaInstagram /></a>
            <a href="https://in.linkedin.com/in/master-traders-academy" className={styles.icon}><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/channel/UC5xTMSn0D-UB7fDvx5JG88A" className={styles.icon}><FaYoutube /></a>
          </div>
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

      <div className={styles.bottom}>
        <p>© 2025 Master Traders Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
