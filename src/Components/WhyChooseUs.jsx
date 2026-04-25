import React from 'react';
import styles from '../Styles/WhyChooseUs.module.css';

export default function WhyUsSection() {
  const reasons = [
    {
      icon: '📊',
      title: 'Expert Instructors',
      description: 'Learn from seasoned traders with 10+ years of market experience and proven track record.'
    },
    {
      icon: '📈',
      title: 'Live Trading Sessions',
      description: 'Real-time market analysis and live trading calls to accelerate your learning curve.'
    },
    {
      icon: '🛡️',
      title: 'Risk Management Focus',
      description: 'Comprehensive training on capital preservation and risk management strategies.'
    },
    {
      icon: '💡',
      title: 'Proven Strategies',
      description: 'Learn battle-tested trading strategies that work in all market conditions.'
    },
    {
      icon: '🏆',
      title: 'Lifetime Support',
      description: 'Get continuous support and updates even after completing your course.'
    },
    {
      icon: '📚',
      title: 'Complete Curriculum',
      description: 'From basics to advanced, we cover everything you need to become a professional trader.'
    }
  ];

  return (
    <section id="why-us" className={styles.whyUsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose Master Traders Academy?</h2>
          <p>Industry-leading training with proven results</p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.certificationsBar}>
          <div className={styles.certificationItem}>
            <h4>ISO Certified</h4>
            <p>International quality standards</p>
          </div>
          <div className={styles.certificationItem}>
            <h4>NISM Certified</h4>
            <p>National Institute Standards</p>
          </div>
          <div className={styles.certificationItem}>
            <h4>2025  Award Winner</h4>
            <p>Best Stock Market Academy in Bangalore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
