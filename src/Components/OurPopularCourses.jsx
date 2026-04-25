import React from "react";
import styles from "../Styles/PopularCourses.module.css";

import masterclassImg from "../Assets/masterclassimg.png";
import bigbullImg from "../Assets/bigbullimage.png";

export default function PopularCourses() {
  const courses = [
    {
      title: "Masterclass",
      desc: "A complete professional trading program designed to help you understand market structure, technical analysis, and price action strategies for consistent performance.",
      tag: "Best Seller",
      image: masterclassImg,
      points: [
        "Technical & Price Action Mastery",
        "Live Market Case Studies",
      ],
    },
    {
      title: "The Big Bull",
      desc: "Focused on swing trading and equity investing, this course helps you identify strong trends, manage risk, and build long-term wealth with confidence.",
      tag: "Swing Trading & Equity",
      image: bigbullImg,
      points: [
        "Swing Trading Strategies",
        "Long-Term Investment Planning",
      ],
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

            {/* IMAGE */}
            <div className={styles.imageBox}>
              <img src={course.image} alt={course.title} />
              <span className={styles.tag}>{course.tag}</span>
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <div className={styles.number}>0{index + 1}</div>

              <h3>{course.title}</h3>

              <p className={styles.desc}>{course.desc}</p>

              {/* FEATURES */}
              <ul className={styles.points}>
                {course.points.map((point, i) => (
                  <li key={i}>✔ {point}</li>
                ))}
              </ul>

              <button className={styles.btn}>Explore Course →</button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
