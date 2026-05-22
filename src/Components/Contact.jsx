import React, { useState } from "react";
import styles from "../Styles/Contact.module.css";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      message: formData.message,
    };

    emailjs
      .send(
        "service_jo6y31s",     // replace
        "template_igmt0uq",    // replace
        templateParams,
        "sV9tqma_clnL7GzYk"      // replace
      )
      .then(() => {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Something went wrong!");
      });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            Get in <span>Touch</span>
          </h2>

          <p className={styles.subtitle}>
            Start your trading journey with expert guidance
          </p>

          <div className={styles.cards}>

            <a href="tel:+919663317167" className={styles.card}>
              📞
              <div>
                <h4>Call Us</h4>
                <p>+91 9663317167</p>
              </div>
            </a>

            <a href="mailto:info@mastertradersacademy.in" className={styles.card}>
              ✉️
              <div>
                <h4>Email</h4>
                <p>info@mastertradersacademy.in</p>
              </div>
            </a>

            <div className={styles.card}>
              📍
              <div>
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>

          {submitted && (
            <div className={styles.success}>
              🚀 Message sent successfully!
            </div>
          )}

          <input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
          <input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required />

          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option>Master Trader</option>
            <option>Masterclass</option>
            <option>Option Hunter</option>
            <option>Big Bull</option>
          </select>

          <textarea name="message" placeholder="Your Message..." rows="4" value={formData.message} onChange={handleChange} />

          <button type="submit">Send Message 🚀</button>

        </form>

      </div>
    </section>
  );
}
