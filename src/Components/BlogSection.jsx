import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import styles from "../Styles/BlogDetails.module.css";

export default function MarketcyclesBlog() {

  const blogPosts = [

    {
      id: 1,
      slug: "5tradingmistake",
      title: "5 Trading Mistakes Beginners Make",
      date: "Apr 15, 2025",
      category: "Trading Tips",
      image: "📚",
      excerpt:
        "Learn the most common trading mistakes beginners make in the stock market and discover how disciplined risk management and emotional control can improve long-term trading consistency.",
    },

    {
      id: 2,
      slug: "marketcycleblog",
      title: "Market Cycles Explained Simply",
      date: "Apr 10, 2025",
      category: "Market",
      image: "📈",
      excerpt:
        "Understand different market cycles including accumulation, uptrend, distribution, and downtrend phases to improve your stock market decision-making skills.",
    },

    {
      id: 3,
      slug: "risk-management-strategy",
      title: "Risk Management Strategy",
      date: "Apr 05, 2025",
      category: "Risk",
      image: "🛡️",
      excerpt:
        "Discover powerful risk management techniques used by professional traders to protect trading capital and reduce emotional decision-making in volatile markets.",
    },

    {
      id: 4,
      slug: "options-trading-basics",
      title: "Options Trading Basics",
      date: "Mar 28, 2025",
      category: "Options",
      image: "⚙️",
      excerpt:
        "Learn the basics of options trading including call options, put options, strike price, premium, and simple strategies for beginners entering derivatives markets.",
    },

    {
      id: 5,
      slug: "technical-analysis-patterns",
      title: "Technical Analysis Patterns",
      date: "Mar 20, 2025",
      category: "TA",
      image: "📊",
      excerpt:
        "Explore important technical analysis chart patterns like head and shoulders, double top, triangles, and breakout formations used in stock market trading.",
    },

    {
      id: 6,
      slug: "trader-psychology-mastery",
      title: "Trader Psychology Mastery",
      date: "Mar 15, 2025",
      category: "Mindset",
      image: "🧠",
      excerpt:
        "Master trading psychology by learning emotional discipline, patience, confidence, and decision-making strategies used by successful traders.",
    },

    {
      id: 7,
      slug: "support-and-resistance-zones",
      title: "Support & Resistance Zones",
      date: "Mar 10, 2025",
      category: "Strategy",
      image: "📍",
      excerpt:
        "Learn how support and resistance zones help traders identify high-probability market entry and exit points using price action analysis.",
    },

    {
      id: 8,
      slug: "intraday-trading-setup",
      title: "Intraday Trading Setup",
      date: "Mar 05, 2025",
      category: "Intraday",
      image: "⚡",
      excerpt:
        "Understand beginner-friendly intraday trading setups, market timing techniques, and risk control methods for day trading in the stock market.",
    },

    {
      id: 9,
      slug: "candlestick-reading-guide",
      title: "Candlestick Reading Guide",
      date: "Feb 28, 2025",
      category: "TA",
      image: "🕯️",
      excerpt:
        "Learn candlestick patterns like doji, hammer, engulfing, and pin bar formations to improve technical analysis and market trend identification.",
    },

  ];

  return (

    <>
    
      <Helmet>

        <title>
          Trading Blog | Stock Market Learning Articles
        </title>

        <meta
          name="description"
          content="Read stock market blogs, trading strategies, technical analysis guides, risk management tips, and futures & options learning articles from Master Traders Academy."
        />

        <meta
          name="keywords"
          content="Trading Blog, Stock Market Articles, Technical Analysis Blog, Trading Strategies, Futures and Options, Swing Trading, Intraday Trading"
        />

        <link
          rel="canonical"
          href="https://mastertradersacademy.in/blog"
        />

      </Helmet>


      <section className={styles.blogSection}>

        {/* BANNER */}

        <div className={styles.banner}>

          <div className={styles.bannerOverlay}></div>

          <div className={styles.bannerContent}>

            <h1>
              Stock Market Trading Blog
            </h1>

            <p>
              Trading Insights • Technical Analysis • Market Learning
            </p>

          </div>

        </div>


        <div className={styles.container}>


          {/* HEADING */}

          <div className={styles.header}>

            <h2>
              Latest Trading Articles & Market Insights
            </h2>

            <p>
              Learn stock market concepts, trading psychology,
              technical analysis, risk management, futures & options,
              and professional trading strategies for beginners.
            </p>

          </div>


          {/* BLOG GRID */}

          <div className={styles.blogGrid}>

            {blogPosts.map((post) => (

              <article
                key={post.id}
                className={styles.blogCard}
              >

                {/* IMAGE */}

                <div
                  className={styles.imageArea}
                  aria-label={post.title}
                >

                  <span className={styles.emoji}>
                    {post.image}
                  </span>

                </div>


                {/* CONTENT */}

                <div className={styles.content}>

                  <div className={styles.meta}>

                    <span className={styles.category}>
                      {post.category}
                    </span>

                    <span className={styles.date}>
                      {post.date}
                    </span>

                  </div>

                  <h3>
                    {post.title}
                  </h3>

                  <p className={styles.excerpt}>
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className={styles.readMore}
                  >
                    Read Full Article →
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </>

  );
}