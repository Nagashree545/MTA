import React from 'react';
import styles from '../Styles/Testimonial.module.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Vikram Reddy',
      role: 'Full-time Trader',
      image: 'V',
      rating: 5,
      quote: 'Master Traders Academy transformed my trading journey. I went from losing money to consistently profitable within 3 months. The structured approach and live trading sessions were game-changers.',
      result: 'Now earning ₹50K+ monthly from trading'
    },
    {
      id: 2,
      name: 'Anjali Gupta',
      role: 'Options Trader',
      image: 'A',
      rating: 5,
      quote: 'The Option Hunter course was exactly what I needed. The strategies taught here work in real market conditions. My portfolio has grown by 200% in the last year.',
      result: '200% portfolio growth in 12 months'
    },
    {
      id: 3,
      name: 'Rohan Sharma',
      role: 'Part-time Trader',
      image: 'R',
      rating: 5,
      quote: 'Outstanding mentorship and support throughout my trading journey. The instructors really care about their students\' success. Highly recommended for anyone serious about trading.',
      result: 'Turned ₹50,000 into ₹2,50,000'
    },
   
  ];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Success Stories from Our Traders</h2>
          <p>Real results from real students of Master Traders Academy</p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>

              <p className={styles.quote}>"{testimonial.quote}"</p>

              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.image}</div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>Result:</span>
                <p>{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
