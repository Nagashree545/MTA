import React from "react";
import styles from "../Styles/ResourcesPage.module.css";

const featuredVideos = [
  {
    title: "Golden Gun Strategy in Kannada",
    desc: "Learn the powerful Golden Gun trading strategy and identify strong entry signals.",
    url: "https://www.youtube.com/watch?v=JHn7oEzHr1U",
  },
  {
    title: "MACD Indicator Explained (Kannada)",
    desc: "Understand MACD crossover strategy and how to use it for trend confirmation.",
    url: "https://youtu.be/Ldi0vtBI8dA",
  },
  {
    title: "Adani Group Analysis & Market Impact",
    desc: "Deep analysis of Adani stocks and how major news affects the market.",
    url: "https://youtu.be/jCh0GMQHkYE",
  },
  {
    title: "Vedanta Stock Analysis – 100% Pledge",
    desc: "Understand what promoter pledging means and its impact on stock price.",
    url: "https://youtu.be/Y3aGCQxB2co",
  },
  {
    title: "Market Direction Strategy (Kannada)",
    desc: "Learn how to predict market direction using indicators and price action.",
    url: "https://youtu.be/mv-z71ZXQ2k",
  },
  {
    title: "Nifty Bees Investment Explained",
    desc: "Understand ETF investing and whether Nifty Bees is a good option.",
    url: "https://youtu.be/40eXQ50Inz0",
  },

  {
    title: "Why 90% People fail in Trading ?",
    desc: "Discover the common mistakes traders make and how to avoid them for consistent success.",
    url: "https://youtu.be/UZ43WgbKfJQ",
  },
];

/* extract video ID */
const getVideoId = (url) => {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

export default function Resources() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <div className={styles.hero}>
        <h1>📊 Trading Resources Hub</h1>
        <p>Learn directly from Master Traders Academy YouTube videos</p>
      </div>

      {/* VIDEOS */}
      <section className={styles.section}>
        <h2>🎥 Featured Learning Videos</h2>

        <div className={styles.videoGrid}>
          {featuredVideos.map((video, i) => {
            const videoId = getVideoId(video.url);
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <div key={i} className={styles.card}>

                {/* Thumbnail */}
                <a href={video.url} target="_blank" rel="noreferrer">
                  <div className={styles.thumbWrapper}>
                    <img
                      src={thumbnail}
                      alt={video.title}
                      className={styles.thumbnail}
                    />
                    <div className={styles.playBtn}>▶</div>
                  </div>
                </a>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3>{video.title}</h3>
                  <p>{video.desc}</p>

                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                  >
                    Watch on YouTube
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CHANNEL */}
    <section className={styles.section}>
  <h2>📺 Official Channel</h2>

  <div className={styles.channelCard}>

    {/* LEFT CONTENT */}
    <div className={styles.channelLeft}>
      <h3>Master Traders Academy</h3>
      <p>
        Learn trading with real strategies, live market analysis, and
        step-by-step guidance from experts.
      </p>

      <div className={styles.channelStats}>
        <span>📊 Daily Analysis</span>
        <span>🎯 Strategies</span>
        <span>📈 Live Sessions</span>
      </div>

      <a
        href="https://www.youtube.com/@MASTERTRADERS-ACADEMY"
        target="_blank"
        rel="noreferrer"
        className={styles.channelBtn}
      >
        Visit YouTube Channel →
      </a>
    </div>

    {/* RIGHT SIDE (VISUAL) */}
    <div className={styles.channelRight}>
      <div className={styles.youtubeBox}>
        ▶
      </div>
    </div>

  </div>
</section>
<section className={styles.section}>
  <h2>📸 Follow Us on Instagram</h2>

  <div className={styles.instaCard}>

    {/* LEFT CONTENT */}
    <div className={styles.instaLeft}>
      <h3>Master Traders Academy</h3>
      <p>
        Get daily trading insights, reels, quick tips, and market updates
        directly on Instagram.
      </p>

      <div className={styles.instaStats}>
        <span>📊 Daily Tips</span>
        <span>🎥 Reels</span>
        <span>⚡ Quick Updates</span>
      </div>

      <a
        href="https://www.instagram.com/mastertraders.academy/"
        target="_blank"
        rel="noreferrer"
        className={styles.instaBtn}
      >
        Follow on Instagram →
      </a>
    </div>

    {/* RIGHT VISUAL */}
    <div className={styles.instaRight}>
      <div className={styles.instaBox}>
        📸
      </div>
    </div>

  </div>
</section>

    </div>
  );
}