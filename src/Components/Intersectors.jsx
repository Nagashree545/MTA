import React from 'react';
import styles from '../Styles/Intersector.module.css';

export default function InstructorsSection() {
  const instructors = [
    {
      id: 1,
      name: 'Raj Kumar Singh',
      title: 'Chief Trading Officer',
      experience: '15+ years in Stock Market',
      specialty: 'Technical Analysis & Trading Psychology',
      bio: 'Founder of Master Traders Academy with proven track record of guiding 5000+ successful traders.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      title: 'Options Specialist',
      experience: '12+ years in Options Trading',
      specialty: 'Options Strategies & Risk Management',
      bio: 'Expert in options selling strategies with consistent monthly returns and proven methodology.'
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'Market Analyst',
      experience: '10+ years in Market Analysis',
      specialty: 'Fundamental & Technical Analysis',
      bio: 'Provides in-depth market insights and helps traders understand market dynamics effectively.'
    },
    {
      id: 4,
      name: 'Neha Desai',
      title: 'Portfolio Manager',
      experience: '11+ years in Portfolio Management',
      specialty: 'Portfolio Building & Wealth Management',
      bio: 'Specializes in creating diversified portfolios and long-term wealth building strategies.'
    }
  ];

  return (
    <section id="instructors" className={styles.instructorsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Meet Our Expert Instructors</h2>
          <p>Learn from industry veterans with proven success and mentorship expertise</p>
        </div>

        <div className={styles.instructorsGrid}>
          {instructors.map((instructor) => (
            <div key={instructor.id} className={styles.instructorCard}>
              <div className={styles.cardInner}>
                <div className={styles.avatar}>
                  {instructor.name.charAt(0)}
                </div>

                <h3>{instructor.name}</h3>
                <p className={styles.title}>{instructor.title}</p>
                
                <div className={styles.badge}>
                  {instructor.experience}
                </div>

                <p className={styles.specialty}>
                  <span className={styles.label}>Specialty:</span> {instructor.specialty}
                </p>

                <p className={styles.bio}>{instructor.bio}</p>

                <button className={styles.messageBtn}>
                  Get Mentorship
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
