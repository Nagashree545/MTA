import React from "react";
import styles from "../Styles/BlogSection.module.css";

export default function BlogSection() {
  const blogPosts = [
    { id: 1, title: "5 Trading Mistakes Beginners Make", date: "Apr 15, 2025", category: "Trading Tips", image: "📚" },
    { id: 2, title: "Market Cycles Explained Simply", date: "Apr 10, 2025", category: "Market", image: "📈" },
    { id: 3, title: "Risk Management Strategy", date: "Apr 05, 2025", category: "Risk", image: "🛡️" },
    { id: 4, title: "Options Trading Basics", date: "Mar 28, 2025", category: "Options", image: "⚙️" },
    { id: 5, title: "Technical Analysis Patterns", date: "Mar 20, 2025", category: "TA", image: "📊" },
    { id: 6, title: "Trader Psychology Mastery", date: "Mar 15, 2025", category: "Mindset", image: "🧠" },
    { id: 7, title: "Support & Resistance Zones", date: "Mar 10, 2025", category: "Strategy", image: "📍" },
    { id: 8, title: "Intraday Trading Setup", date: "Mar 05, 2025", category: "Intraday", image: "⚡" },
    { id: 9, title: "Candlestick Reading Guide", date: "Feb 28, 2025", category: "TA", image: "🕯️" },
    { id: 10, title: "Best Indicators for Trading", date: "Feb 20, 2025", category: "Indicators", image: "📉" },
    { id: 11, title: "How Professionals Handle Losses", date: "Feb 15, 2025", category: "Mindset", image: "📊" },
    { id: 12, title: "Complete Trading Plan Guide", date: "Feb 10, 2025", category: "Planning", image: "📝" },
    { id: 13, title: "Breakout Trading Strategy", date: "Jan 30, 2025", category: "Strategy", image: "🚀" },
    { id: 14, title: "Smart Money Concept Basics", date: "Jan 20, 2025", category: "Advanced", image: "💰" },
    { id: 15, title: "Volume Analysis Explained", date: "Jan 10, 2025", category: "TA", image: "📊" },
  ];

  return (
    <section className={styles.blogSection}>

      {/* 🔥 DARK PREMIUM BANNER */}
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>
          <h1>Blog Page</h1>
          <p>Insights • Strategies • Market Intelligence</p>
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.header}>
          <h2>Trading Insights & Market Updates</h2>
          <p>Learn proven strategies used by professional traders</p>
        </div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogCard}>

              <div className={styles.imageArea}>
                <span className={styles.emoji}>{post.image}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>

                <h3>{post.title}</h3>
                <p className={styles.excerpt}>
                  Learn actionable trading knowledge and improve consistency.
                </p>

                <a href="/" className={styles.readMore}>
                  Read Article →
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
