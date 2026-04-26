import React from "react";
import styles from "../Styles/CoursesSection.module.css";
import mastertrader from "../Assets/mastertraderforcourse.png"
import masterclass from "../Assets/masterclassforcourse.jpg";
import optionhunter from "../Assets/optionhunterforcourses.jpg";
import bigbull from "../Assets/bigbullcourses.png"

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Master Trader",
      image:
mastertrader,
      description:
        "Build strong foundations in stock market trading with real market understanding.",
      highlights: ["Technical Analysis", "Risk Management", "Live Practice"],
    },
    {
      id: 2,
      title: "Masterclass",
      image:
masterclass,
      description:
        "Advanced strategies for professional trading execution.",
      highlights: ["Advanced Strategies", "Portfolio Building", "Mentorship"],
    },
    {
      id: 3,
      title: "Option Hunter",
      image:
optionhunter,      description:
        "Specialized options trading system for consistent income.",
      highlights: ["Options Basics", "Selling Strategies", "Risk Control"],
    },
    {
      id: 4,
      title: "The Big Bull",
      image:
bigbull,      description:
        "Complete trading mastery program with lifetime mentorship support.",
      highlights: ["Full Market Mastery", "Live Room", "Pro Tools"],
    },
  ];

  return (
    <section className={styles.wrapper}>

      {/* ================= HERO (same as yours) ================= */}
      <div className={styles.hero}>
        <div className={styles.heroBg}></div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>Premium Trading Academy</span>

          <h1>
            Learn Trading Like<br />
            A Professional Market Expert
          </h1>

          <div className={styles.stats}>
            <div>📊 Live Market Room</div>
            <div>🎯 Strategy Learning</div>
            <div>💡 Expert Mentorship</div>
          </div>
        </div>

        <div className={styles.floatCard1}>📈 NIFTY +1.2%</div>
        <div className={styles.floatCard2}>📉 BANKNIFTY -0.8%</div>
      </div>

      {/* ================= NEW COURSES GRID ================= */}
      <div className={styles.courseGrid}>

        {courses.map((course) => (
          <div key={course.id} className={styles.courseTile}>

            <div className={styles.imageWrap}>
              <img src={course.image} alt={course.title} />
            </div>

            <div className={styles.content}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>

              <div className={styles.tagRow}>
                {course.highlights.map((h, i) => (
                  <span key={i}>{h}</span>
                ))}
              </div>

              <button className={styles.readMoreBtn}>
                Read More
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
