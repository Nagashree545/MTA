import React, { useEffect, useRef, useState } from 'react';
import styles from '../Styles/StatsSction.module.css';
import { FaUsers, FaChartLine, FaStar } from 'react-icons/fa';


/* 🔥 COUNTER COMPONENT */
const Counter = ({ end, suffix, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, start]);

  return (
    <h3>
      {count}
      {suffix}
    </h3>
  );
};


/* 🔥 MAIN COMPONENT */
export default function StatsSection() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const stats = [
    {
      icon: <FaUsers />,
      value: 5000,
      suffix: '+',
      label: 'Students Trained',
    },
    {
      icon: <FaChartLine />,
      value: 10,
      suffix: '+',
      label: 'Years Experience',
    },
    {
      icon: <FaStar />,
      value: 95,
      suffix: '%',
      label: 'Success Rate',
    },
  ];

  /* 🔥 TRIGGER ON SCROLL */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.overlay}></div>

      <div className={styles.statsContainer}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.icon}>{item.icon}</div>

            {/* ✅ NOW WORKS */}
            <Counter
              end={item.value}
              suffix={item.suffix}
              start={startCount}
            />

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
