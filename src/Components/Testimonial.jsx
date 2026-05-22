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
quote: 'Master Traders Academy transformed my trading journey. I went from struggling with market understanding to becoming more confident and disciplined in my trading decisions within just a few months.',    },
    {
      id: 2,
      name: 'Anjali Gupta',
      role: 'Options Trader',
      image: 'A',
      rating: 5,
quote: 'The Option Hunter course gave me a much clearer understanding of options trading. The concepts were easy to follow, and the structured guidance helped me improve my confidence and trading approach significantly.',    },
    {
      id: 3,
      name: 'Rohan Sharma',
      role: 'Part-time Trader',
      image: 'R',
      rating: 5,
      quote: 'Outstanding mentorship and support throughout my trading journey. The instructors really care about their students\' success. Highly recommended for anyone serious about trading.',
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

        
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
