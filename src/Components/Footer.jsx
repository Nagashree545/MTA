import React from 'react';
import styles from '../Styles/Footer.module.css';
import whitelogo from "../Assets/logowhite.jpeg"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <img src={whitelogo} alt="Master Traders Academy" />
              <h3>Master Traders Academy</h3>
            </div>
            <p>Transforming traders into successful market participants since 2015.</p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} onClick={(e) => e.preventDefault()}>
                f
              </a>
              <a href="#" className={styles.social} onClick={(e) => e.preventDefault()}>
                𝕏
              </a>
              <a href="#" className={styles.social} onClick={(e) => e.preventDefault()}>
                in
              </a>
              <a href="#" className={styles.social} onClick={(e) => e.preventDefault()}>
                📺
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Courses</h4>
            <ul>
              <li><a href="#courses">Master Trader</a></li>
              <li><a href="#courses">Masterclass</a></li>
              <li><a href="#courses">Option Hunter</a></li>
              <li><a href="#courses">The Big Bull</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#instructors">Privacy Policy</a></li>
              <li><a href="#blog">Refund Policy</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Contact</h4>
            <p className={styles.contactInfo}>
              <strong>Address:</strong><br />
              Bangalore, India
            </p>
            <p className={styles.contactInfo}>
              <strong>Phone:</strong><br />
              +91 9663317167 
            </p>
            <p className={styles.contactInfo}>
              <strong>Email:</strong><br />
            info@mastertradersacademy.in
            </p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <div className={styles.certifications}>
            <span>ISO Certified</span>
            <span>NISM Certified</span>
            <span>2025 Best Academy Award</span>
          </div>

          <div className={styles.copyright}>
            <p>&copy; 2025 Master Traders Academy. All rights reserved.</p>
         
          </div>
        </div>
      </div>
    </footer>
  );
}
