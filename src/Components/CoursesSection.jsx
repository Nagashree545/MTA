import React from "react";
import styles from "../Styles/CoursesSection.module.css";
import { useNavigate } from "react-router-dom";

import mastertrader from "../Assets/mastertraderforcourse.png";
import masterclass from "../Assets/masterclassforcourse.jpg";
import optionhunter from "../Assets/optionhunterforcourses.jpg";
import bigbull from "../Assets/bigbullcourses.png";

export default function CoursesSection() {

  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Master Trader",
      image: mastertrader,
      page: "/mastertrader",
      description:
        "Build strong foundations in stock market trading with strong market understanding.",
      highlights: ["Technical Analysis", "Risk Management", "Market Knowledge"],
    },
    {
      id: 2,
      title: "Masterclass",
      image: masterclass,
      page: "/masterclass",
      description:
        "Advanced strategies for professional market understanding.",
      highlights: ["Advanced Strategies", "Portfolio Building", "Mentorship"],
    },
    {
      id: 3,
      title: "Option Mastery",
      image: optionhunter,
      page: "/optionmastery",
      description:
        "Specialized options learning system for disciplined trading.",
      highlights: ["Options Basics", "Strategies", "Risk Control"],
    },
    {
      id: 4,
      title: "The Big Bull",
      image: bigbull,
      page: "/thebigbull",
      description:
        "Complete trading mastery experience with premium mentorship guidance.",
      highlights: ["Market Mastery", "Trading Psychology", "Pro Tools"],
    },
  ];

  return (
    <section className={styles.wrapper}>

      {/* HERO */}
      <div className={styles.hero}>

        <div className={styles.heroBg}></div>

        <div className={styles.heroContent}>

          <span className={styles.badge}>
            Premium Trading Academy
          </span>

          <h1>
            Learn Trading Like
            <br />
            A Professional Market Expert
          </h1>

          <div className={styles.stats}>
            <div>📊 Market Learning</div>
            <div>🎯 Strategy Building</div>
            <div>💡 Expert Mentorship</div>
          </div>

        </div>

        <div className={styles.floatCard1}>
          📈 NIFTY +1.2%
        </div>

        <div className={styles.floatCard2}>
          📉 BANKNIFTY -0.8%
        </div>

      </div>


      {/* BEGINNER & INTERMEDIATE COURSES */}
      <div className={styles.sectionBlock}>

        <div className={styles.sectionHeading}>

          <h1>
            Perfect Learning Path for Beginner & Intermediate Level Students
          </h1>

          <p>
            Build strong market foundations with structured trading education,
            practical strategies, and expert mentorship guidance.
          </p>

        </div>

        <div className={styles.courseGrid}>

          {courses.slice(0, 2).map((course) => (

            <div
              key={course.id}
              className={styles.courseTile}
            >

              <div className={styles.imageWrap}>
                <img
                  src={course.image}
                  alt={course.title}
                />
              </div>

              <div className={styles.content}>

                <h2>{course.title}</h2>

                <p>{course.description}</p>

                <div className={styles.tagRow}>

                  {course.highlights.map((h, i) => (
                    <span key={i}>{h}</span>
                  ))}

                </div>

                <button
                  className={styles.readMoreBtn}
                  onClick={() => navigate(course.page)}
                >
                  Read More
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* EXPERIENCED TRADERS COURSES */}
      <div className={styles.sectionBlock}>

        <div className={styles.sectionHeading}>

          <h1>
            Designed for Experienced Traders
          </h1>

          <p>
            Advance your trading journey with professional strategies,
            advanced market analysis, and premium mentorship support.
          </p>

        </div>

        <div className={styles.courseGrid}>

          {courses.slice(2, 4).map((course) => (

            <div
              key={course.id}
              className={styles.courseTile}
            >

              <div className={styles.imageWrap}>
                <img
                  src={course.image}
                  alt={course.title}
                />
              </div>

              <div className={styles.content}>

                <h2>{course.title}</h2>

                <p>{course.description}</p>

                <div className={styles.tagRow}>

                  {course.highlights.map((h, i) => (
                    <span key={i}>{h}</span>
                  ))}

                </div>

                <button
                  className={styles.readMoreBtn}
                  onClick={() => navigate(course.page)}
                >
                  Read More
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}