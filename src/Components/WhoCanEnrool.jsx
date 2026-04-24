import React from "react";
import styles from "../Styles/WhoCanenrool.module.css";

export default function WhoCanEnroll() {
  const data = [
    {
      icon: "👨‍💼",
      title: "Working Professionals",
      desc: "Ideal for professionals looking to diversify income and build strong financial knowledge alongside their career.",
    },
    {
      icon: "👩‍🏠",
      title: "Housewives",
      desc: "Perfect for homemakers who want financial independence and explore smart investment opportunities from home.",
    },
    {
      icon: "📈",
      title: "Additional Income Seekers",
      desc: "Learn to generate extra income through stock market strategies and informed trading decisions.",
    },
    {
      icon: "👴",
      title: "Retired Individuals",
      desc: "Great for retirees to manage savings wisely and create a steady income stream with confidence.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subTitle}>OUR SERVICES</p>
        <h2>Who Can Enroll in Our Stock Market Courses?</h2>
      </div>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
