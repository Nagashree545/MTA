import React from "react";
import styles from "../Styles/PopularCourses.module.css";

export default function PopularCourses() {
  const courses = [
    {
      title: "Master Trader",
      desc: "Become a professional trader with advanced strategies and risk management.",
    },
    {
      title: "Masterclass",
      desc: "Deep dive into market concepts and technical analysis for consistent profits.",
    },
    {
      title: "Option Hunter",
      desc: "Learn powerful options trading strategies to maximize returns.",
    },
    {
      title: "The Big Bull",
      desc: "Master long-term investing and wealth creation strategies.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subTitle}>OUR COURSES</p>
        <h2>Popular Courses</h2>
      </div>

      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.number}>0{index + 1}</div>
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button className={styles.btn}>Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}
