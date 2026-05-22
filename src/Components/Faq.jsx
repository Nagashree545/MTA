// FAQ.jsx

import styles from "../Styles/Faq.module.css";
import { useState } from "react";

const faqData = [
  {
    question: "Who can join the trading courses?",
    answer:
      "Our trading courses are designed for beginners, working professionals, college students, and experienced traders who want to improve their market knowledge and trading strategies.",
  },
  
  {
    question: "What topics are covered in the course?",
    answer:
      "The course covers technical analysis, candlestick patterns, options trading, risk management, intraday trading, swing trading and trading psychology.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Absolutely. Our training starts from the basics and gradually moves to advanced concepts, making it beginner-friendly.",
  },
  {
    question: "Will I get mentorship support?",
    answer:
      "Yes, students receive mentorship support, doubt-clearing sessions, and practical market guidance throughout the course.",
  },
  {
    question: "How long is the trading course?",
    answer:
      "Course duration varies depending on the program, but most courses include multiple weeks of structured learning.",
  },
  {
    question: "Can I learn options trading in this academy?",
    answer:
      "Yes, our academy provides dedicated options trading strategies including option buying, option selling, hedging, and risk management techniques.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Get answers to common questions about our stock market trading
            courses and mentorship programs.
          </p>
        </div>

        <div className={styles.faqWrapper}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`${styles.answerWrapper} ${
                  activeIndex === index ? styles.show : ""
                }`}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}