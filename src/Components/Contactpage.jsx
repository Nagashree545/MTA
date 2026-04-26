import React from "react";
import styles from "../Styles/ContactPage.module.css";
import ContactSection from "./Contact";

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>

      {/* 🔥 PREMIUM BANNER */}
      <div className={styles.banner}>
        <div className={styles.bannerGlow}></div>
        <div className={styles.bannerParticles}></div>

        <div className={styles.bannerContent}>
          <h1>Contact Us</h1>
          <p>We’re here to guide your trading journey</p>

          <div className={styles.bannerTags}>
            <span>📈 Trading Support</span>
            <span>💡 Mentorship</span>
            <span>🚀 Growth</span>
          </div>
        </div>
      </div>

      <div className={styles.container}>

        {/* 🧾 CONTACT FORM (FIRST) */}
        <div className={styles.formSection}>
          <h2>Send Message</h2>
          <p>We will respond within 24 hours</p>

          <div className={styles.formBox}>
            <ContactSection />
          </div>
        </div>

        {/* 📍 MAP (SECOND) */}
        <div className={styles.mapSection}>
          <div className={styles.mapBox}>
            <iframe
              title="Master Traders Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.963231145696!2d77.62388326213134!3d13.038012441292299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1792cd562a41%3A0x9fa5fb0eef8c11fe!2sMaster%20Traders%20Academy!5e0!3m2!1sen!2sin!4v1777192188495!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
      {/* ⭐ REVIEW SECTION */}
<div className={styles.reviewSection}>
  <div className={styles.reviewCard}>
    
    <div className={styles.reviewStars}>
      ⭐ ⭐ ⭐ ⭐ ⭐
    </div>

    <h2>Love Our Service?</h2>
    <p>If you enjoyed learning with us, please leave a review. Your feedback helps us improve and grow!</p>

    <a
      href="https://www.google.com/search?sca_esv=bd7c1490f69c63ab&rlz=1C1UEAD_en-GBIN1164IN1180&sxsrf=ANbL-n6xQSMML30T27oSo6gCK9LTawvIBg:1777192380342&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOe-EC5QPsmeu0ebi9YEXhOKxmFNws3iT5DV_F_OAB2OA2QaRdUg30MaO-n9nx6oFIbKfg0oCBTi0dlf0riL_EMPciAv934ps5Q3d2WDg3k0g8BoO0g%3D%3D&q=Master+Traders+Academy+Reviews&sa=X&ved=2ahUKEwijmpzEjYuUAxXd1zgGHcdoOE8Q0bkNegQIOBAH&biw=1366&bih=633&dpr=1"
      target="_blank"
      rel="noreferrer"
      className={styles.reviewBtn}
    >
      Leave a Review →
    </a>

  </div>
</div>

    </section>
  );
}
