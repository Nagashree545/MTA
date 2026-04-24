import React from 'react';
import styles from '../Styles/StatsSction.module.css';
import { FaUsers, FaChartLine, FaStar, FaHeadset } from 'react-icons/fa';

export default function StatsSection() {
  const stats = [
    {
      icon: <FaUsers />,
      value: '5000+',
      label: 'Students Trained',
    },
    {
      icon: <FaChartLine />,
      value: '10+',
      label: 'Years Experience',
    },
    {
      icon: <FaStar />,
      value: '95%',
      label: 'Success Rate',
    },
    {
      icon: <FaHeadset />,
      value: '24/7',
      label: 'Support',
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.overlay}></div>

      <div className={styles.statsContainer}>
        {stats.map((item, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
