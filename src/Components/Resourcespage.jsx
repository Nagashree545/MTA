import React from "react";
import styles from "../Styles/ResourcesPage.module.css";

const featuredVideos = [
  {
    title: "Stock Market Basics for Beginners",
    desc: "Learn how trading works from scratch",
    url: "https://www.youtube.com/@MASTERTRADERS-ACADEMY/videos",
  },
  {
    title: "Price Action Strategy Explained",
    desc: "Understand smart money concepts",
    url: "https://www.youtube.com/@MASTERTRADERS-ACADEMY/videos",
  },
  {
    title: "Options Trading Full Guide",
    desc: "CE / PE explained with strategy",
    url: "https://www.youtube.com/@MASTERTRADERS-ACADEMY/videos",
  },
  {
    title: "Live Market Analysis Session",
    desc: "Daily market breakdown & setups",
    url: "https://www.youtube.com/@MASTERTRADERS-ACADEMY/videos",
  },
];

export default function Resources() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <div className={styles.hero}>
        <h1>📊 Trading Resources Hub</h1>
        <p>Learn directly from Master Traders Academy YouTube videos</p>
      </div>

      {/* FEATURED VIDEOS */}
      <section className={styles.section}>
        <h2>🎥 Featured Learning Videos</h2>

        <div className={styles.videoGrid}>

          {featuredVideos.map((video, i) => (
            <div key={i} className={styles.card}>

              {/* YouTube embed (channel based latest videos) */}
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=MASTERTRADERS-ACADEMY"
                title={video.title}
                allowFullScreen
              />

              <div className={styles.cardContent}>
                <h3>{video.title}</h3>
                <p>{video.desc}</p>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Watch on YouTube ▶
                </a>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CHANNEL SECTION */}
      <section className={styles.section}>
        <h2>📺 Official Channel</h2>

        <div className={styles.channelBox}>

          <iframe
            className={styles.mainVideo}
            src="https://www.youtube.com/embed?listType=user_uploads&list=MASTERTRADERS-ACADEMY"
            allowFullScreen
          />

          <div className={styles.channelInfo}>
            <h3>Master Traders Academy</h3>
            <p>
              Watch daily trading videos, strategies, and market breakdowns.
            </p>

            <a
              href="https://www.youtube.com/@MASTERTRADERS-ACADEMY"
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
            >
              Visit Channel
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
