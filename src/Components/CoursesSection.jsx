import React from 'react';
import styles from '../Styles/CoursesSection.module.css';

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: 'Master Trader',
      description: 'Comprehensive foundation course covering all basics of stock market trading, technical analysis, and risk management.',
      level: 'Beginner to Intermediate',
      duration: '8 Weeks',
      price: '₹15,999',
      highlights: ['Technical Analysis', 'Risk Management', 'Trading Psychology', 'Live Market Sessions']
    },
    {
      id: 2,
      title: 'Masterclass',
      description: 'Advanced trading strategies and in-depth market analysis techniques for experienced traders.',
      level: 'Advanced',
      duration: '12 Weeks',
      price: '₹24,999',
      highlights: ['Advanced Strategies', 'Portfolio Management', 'Market Analysis', 'One-on-One Mentoring']
    },
    {
      id: 3,
      title: 'Option Hunter',
      description: 'Specialized course focused on options trading, strategies, and profitable option selling techniques.',
      level: 'Intermediate',
      duration: '10 Weeks',
      price: '₹19,999',
      highlights: ['Options Greeks', 'Selling Strategies', 'Iron Condor Setup', 'Live Trading Calls']
    },
    {
      id: 4,
      title: 'The Big Bull',
      description: 'Premium comprehensive program combining all trading aspects with lifetime mentorship support.',
      level: 'All Levels',
      duration: '16 Weeks',
      price: '₹49,999',
      highlights: ['Complete Training', 'Lifetime Access', 'Premium Support', 'Trading Tools', 'Lifetime Updates']
    }
  ];

  return (
    <section id="courses" className={styles.coursesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Our Premium Courses</h2>
          <p>Master the art of profitable trading with our carefully designed curriculum</p>
        </div>

        <div className={styles.coursesGrid}>
          {courses.map((course, index) => (
            <div 
              key={course.id} 
              className={`${styles.courseCard} ${index % 2 === 0 ? styles.cardLight : styles.cardDark}`}
            >
              <div className={styles.cardHeader}>
                <h3>{course.title}</h3>
                <span className={styles.level}>{course.level}</span>
              </div>

              <p className={styles.description}>{course.description}</p>

              <div className={styles.courseDetails}>
                <div className={styles.detail}>
                  <span className={styles.label}>Duration:</span>
                  <span>{course.duration}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.label}>Price:</span>
                  <span className={styles.price}>{course.price}</span>
                </div>
              </div>

              <div className={styles.highlights}>
                <h4>What You'll Learn:</h4>
                <ul>
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <span className={styles.checkmark}>✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="btn btn-primary">Enroll Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
