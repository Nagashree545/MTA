import React from 'react';
import styles from '../Styles/Pricing.module.css';

export default function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      name: 'Master Trader',
      price: '15,999',
      duration: '8 Weeks',
      color: 'standard',
      features: [
        'Stock Market Basics',
        'Technical Analysis Mastery',
        'Risk Management Fundamentals',
        '8 Live Trading Sessions',
        'Course Materials & Videos',
        'Access for 1 Year',
        'Email Support',
        'Trading Psychology Module'
      ]
    },
    {
      id: 2,
      name: 'Option Hunter',
      price: '19,999',
      duration: '10 Weeks',
      color: 'featured',
      badge: 'POPULAR',
      features: [
        'All Master Trader Features',
        'Options Trading Fundamentals',
        'Greeks Deep Dive',
        'Selling Strategies Module',
        'Iron Condor & Spreads',
        '10 Live Options Sessions',
        'WhatsApp Group Support',
        'Trading Tools Access',
        'Monthly Webinars'
      ]
    },
    {
      id: 3,
      name: 'Masterclass',
      price: '24,999',
      duration: '12 Weeks',
      color: 'standard',
      features: [
        'Advanced Trading Strategies',
        'Portfolio Management',
        'Swing & Intraday Trading',
        'Advanced Chart Patterns',
        '12 Live Sessions',
        'Personalized Guidance',
        'Priority Email Support',
        'Trading Journal Access',
        'Strategy Backtesting Workshop'
      ]
    },
    {
      id: 4,
      name: 'The Big Bull',
      price: '49,999',
      duration: '16 Weeks',
      color: 'premium',
      badge: 'VIP',
      features: [
        'Complete Trading Education',
        'All Previous Courses',
        'One-on-One Mentorship',
        'Lifetime Access & Updates',
        'Premium Trader Tools',
        'Private Trading Room',
        'Priority WhatsApp Support',
        '24/7 Mentor Support',
        'Trading Bot Integration',
        'Lifetime Community Access'
      ]
    }
  ];

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Course Pricing & Enrollment</h2>
          <p>Choose the perfect course for your trading journey</p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`${styles.pricingCard} ${styles[plan.color]}`}
            >
              {plan.badge && (
                <div className={styles.badge}>{plan.badge}</div>
              )}

              <h3>{plan.name}</h3>
              
              <div className={styles.priceBlock}>
                <span className={styles.currency}>₹</span>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.duration}>/{plan.duration}</span>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${styles.enrollBtn} ${styles[`btn_${plan.color}`]}`}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        <div className={styles.faqSection}>
          <h3>Frequently Asked Questions</h3>
          <div className={styles.faqItems}>
            <div className={styles.faqItem}>
              <h4>Can I upgrade my course later?</h4>
              <p>Yes! You can upgrade from any course to a higher tier and we&apos;ll credit your previous payment.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>What if I want a refund?</h4>
              <p>We offer a 7-day money-back guarantee if you&apos;re not satisfied with the course quality.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do you offer payment plans?</h4>
              <p>Yes! We offer flexible 3-month payment plans for courses above ₹20,000.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Is there a discount for bulk enrollment?</h4>
              <p>Absolutely! Contact our sales team for corporate or group enrollment discounts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
