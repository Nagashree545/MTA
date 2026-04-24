import React, { useState } from 'react';
import styles from '../Styles/Contact.module.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Get In Touch</h2>
          <p>Have questions? Reach out to us and we&apos;ll be happy to help</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.icon}>📍</div>
              <h3>Location</h3>
              <p>Bangalore, India</p>
              <p className={styles.subtext}>Office in the heart of tech city</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>📞</div>
              <h3>Phone</h3>
              <p>+91 87928 93421</p>
              <p className={styles.subtext}>Available 9 AM - 6 PM IST</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>✉️</div>
              <h3>Email</h3>
              <p>info@mastertraders.com</p>
              <p className={styles.subtext}>Response within 24 hours</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.icon}>⏰</div>
              <h3>Timing</h3>
              <p>Mon - Fri: 9 AM - 6 PM</p>
              <p className={styles.subtext}>Sat - Sun: 10 AM - 4 PM</p>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMessage}>
                Thank you! Your inquiry has been received. We&apos;ll contact you soon.
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="course">Interested Course *</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select a course</option>
                <option value="master-trader">Master Trader</option>
                <option value="masterclass">Masterclass</option>
                <option value="option-hunter">Option Hunter</option>
                <option value="big-bull">The Big Bull</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your trading goals..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
