import React from 'react';
import styles from '../Styles/BlogSection.module.css';

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: '5 Common Trading Mistakes Beginners Make',
      date: 'April 15, 2025',
      category: 'Trading Tips',
      excerpt: 'Learn about the most common mistakes that cost beginner traders thousands of rupees and how to avoid them.',
      image: '📚'
    },
    {
      id: 2,
      title: 'Understanding Market Cycles and Trends',
      date: 'April 10, 2025',
      category: 'Market Analysis',
      excerpt: 'Deep dive into market cycles, identifying trends, and using them to make profitable trading decisions.',
      image: '📈'
    },
    {
      id: 3,
      title: 'Risk Management: The Key to Long-term Success',
      date: 'April 5, 2025',
      category: 'Risk Management',
      excerpt: 'Why risk management is more important than profit-making and how to implement it in your trading.',
      image: '🛡️'
    },
    {
      id: 4,
      title: 'Options Trading Basics: Greeks Explained',
      date: 'March 28, 2025',
      category: 'Options',
      excerpt: 'Understand delta, gamma, theta, and vega - the Greeks that control option pricing and strategies.',
      image: '⚙️'
    },
    {
      id: 5,
      title: 'Technical Analysis Patterns You Must Know',
      date: 'March 20, 2025',
      category: 'Technical Analysis',
      excerpt: 'Master chart patterns like head and shoulders, triangles, and double tops for better trade setups.',
      image: '📊'
    },
    {
      id: 6,
      title: 'Psychology of Successful Traders',
      date: 'March 15, 2025',
      category: 'Trading Psychology',
      excerpt: 'How the best traders think, manage emotions, and maintain discipline in the face of market volatility.',
      image: '🧠'
    }
  ];

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Trading Insights & Market Updates</h2>
          <p>Stay informed with the latest trading knowledge and market analysis</p>
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
                <p className={styles.excerpt}>{post.excerpt}</p>

                <a href="/blog" className={styles.readMore} onClick={(e) => e.preventDefault()}>
                  Read Article →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <button className="btn btn-primary">View All Articles</button>
        </div>
      </div>
    </section>
  );
}
