import React, { useEffect, useState } from "react";
import styles from "../Styles/popupforworshop.module.css";

export default function WorkshopPopup() {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      setTimeout(() => setAnimate(true), 50);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setAnimate(false);
    setTimeout(() => setShow(false), 200);
  };

  if (!show) return null;

  return (
    <div className={styles.overlay} onClick={closePopup}>
      <div
        className={`${styles.popup} ${animate ? styles.show : styles.hide}`}
        onClick={(e) => e.stopPropagation()}
      >

        <button className={styles.closeBtn} onClick={closePopup}>✕</button>

        <div className={styles.badge}>🔥 FREE WORKSHOP</div>

        <h2 className={styles.title}>
          Master Traders <span>Academy</span>
        </h2>

        <p className={styles.subtitle}>
          Learn Smart Trading Like Professionals
        </p>

        <div className={styles.infoBox}>
          <p>📅 Sunday Live Session</p>
          <p>⏰ 10:00 AM – 12:00 PM</p>
          <p>📍 Online / Offline Available</p>
        </div>

        <p className={styles.desc}>
          Join our expert-led workshop and learn powerful trading strategies,
          risk management, and real market psychology.
        </p>

        <div className={styles.actions}>
          <a href="tel:+919663317167">📞 Call</a>
          <a
            href="https://wa.me/919187300181"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
