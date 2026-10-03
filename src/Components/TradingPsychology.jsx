import React from "react";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";

import styles from "../Styles/TradingPsychology.module.css";

const psychologyPoints = [
  {
    number: "01",
    icon: <FaBrain />,
    title: "Control Your Emotions",
    content:
      "Fear, greed and excitement can influence trading decisions. A trader may enter because of excitement, exit too early because of fear, or hold a position longer than planned because of greed. The goal is not to eliminate emotions completely, but to avoid allowing emotions to dictate trading decisions.",
  },
  {
    number: "02",
    icon: <FaChartLine />,
    title: "Follow Your Trading Plan",
    content:
      "A trading plan provides a framework for making decisions before entering a trade. It should define the setup, entry conditions, exit conditions and risk parameters. Following a predefined process can make trading decisions more structured and easier to review.",
  },
  {
    number: "03",
    icon: <FaBalanceScale />,
    title: "Accept Losses",
    content:
      "Losses are a normal part of trading. Trying to avoid every possible loss can lead to hesitation or emotional decision-making. Instead, traders should focus on managing risk and evaluating performance across a series of trades.",
  },
  {
    number: "04",
    icon: <FaBrain />,
    title: "Avoid Revenge Trading",
    content:
      "After a losing trade, a trader may feel an urge to immediately recover the loss. This can lead to taking another trade without a valid setup or taking excessive risk. A better approach is to step back, review what happened and wait for the next valid setup.",
  },
  {
    number: "05",
    icon: <FaChartLine />,
    title: "Control Greed",
    content:
      "Greed can cause traders to stay in a position longer than their strategy requires. A predefined exit can help create structure instead of allowing the desire for a larger return to dictate the decision.",
  },
  {
    number: "06",
    icon: <FaBrain />,
    title: "Manage Fear",
    content:
      "Fear can cause traders to hesitate, exit too early or avoid valid opportunities. Understanding how you react to uncertainty is an important part of developing trading discipline.",
  },
  {
    number: "07",
    icon: <FaShieldAlt />,
    title: "Use Proper Risk Management",
    content:
      "Before entering a trade, traders should understand how much they are willing to risk and where their stop-loss or invalidation level applies to their strategy. Risk management should be considered before entering the position, not after the market starts moving.",
  },
  {
    number: "08",
    icon: <FaChartLine />,
    title: "Avoid Overtrading",
    content:
      "More trades do not necessarily mean better results. Trading when there is no valid setup can lead to unnecessary decisions and emotional fatigue. Sometimes the most disciplined decision is to wait.",
  },
  {
    number: "09",
    icon: <FaClock />,
    title: "Be Patient and Disciplined",
    content:
      "Markets can move quickly, but not every movement represents a trading opportunity. Waiting for a proper setup requires patience and confidence in the strategy being followed.",
  },
  {
    number: "10",
    icon: <FaBalanceScale />,
    title: "Think in Probabilities",
    content:
      "One individual trade does not define a trader's overall performance. Evaluate a strategy over a larger sample of trades and use a trading journal to identify recurring patterns in decision-making and execution.",
  },
];

const TradingPsychology = () => {
  return (
    <main className={styles.blogPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroPattern}></div>

        <div className={styles.heroContent}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/courses/blog">Blog</Link>
            <span>/</span>
            <span>Trading Psychology</span>
          </div>

          <div className={styles.category}>TRADING PSYCHOLOGY</div>

          <h1>
            Trading Psychology:{" "}
            <span>10 Important Key Points</span> Every Trader Should
            Understand
          </h1>

          <p className={styles.heroDescription}>
            Understanding emotions, discipline, risk management and decision-
            making can help traders build a more structured approach to the
            markets.
          </p>

          <div className={styles.heroMeta}>
            <span>Master Traders Academy</span>
            <span className={styles.dot}></span>
            <span>Trading Education</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.articleWrapper}>
        <article className={styles.article}>
          <div className={styles.introCard}>
            <div className={styles.introIcon}>
              <FaBrain />
            </div>

            <p>
              <strong>Trading psychology is one of the most important aspects
              of trading.</strong>{" "}
              A trading strategy can provide entry and exit signals, but how a
              trader reacts to fear, greed, losses and uncertainty can strongly
              influence how consistently that strategy is followed.
            </p>
          </div>

          <div className={styles.imagePlaceholder}>
            <div className={styles.imageOverlay}>
              <span>TRADING PSYCHOLOGY</span>
              <h2>Mindset • Discipline • Decision Making</h2>
            </div>
          </div>

          <p>
            Many traders focus heavily on technical analysis, indicators,
            charts and market patterns while giving less attention to their own
            behaviour. Developing better trading discipline means understanding
            your emotions, following a defined plan, managing risk and
            evaluating your decisions over a series of trades.
          </p>

          {/* KEY POINTS */}
          <div className={styles.sectionHeader}>
            <span>10 KEY PRINCIPLES</span>
            <h2>Important Trading Psychology Points</h2>
          </div>

          <div className={styles.pointsGrid}>
            {psychologyPoints.map((point) => (
              <section className={styles.pointCard} key={point.number}>
                <div className={styles.pointTop}>
                  <div className={styles.number}>{point.number}</div>
                  <div className={styles.pointIcon}>{point.icon}</div>
                </div>

                <h3>{point.title}</h3>
                <p>{point.content}</p>
              </section>
            ))}
          </div>

          {/* ROLE OF PSYCHOLOGY */}
          <section className={styles.roleSection}>
            <div className={styles.roleContent}>
              <span className={styles.eyebrow}>UNDERSTANDING THE MINDSET</span>

              <h2>The Role of Psychology in Trading</h2>

              <p>
                Technical analysis can help identify potential market setups,
                but psychology influences how the trader executes those
                setups. Fear after a loss, greed after a winning trade, revenge
                trading, overtrading and ignoring risk controls can all affect
                execution.
              </p>
            </div>

            <div className={styles.roleStats}>
              <div>
                <FaBrain />
                <span>Mindset</span>
              </div>

              <div>
                <FaShieldAlt />
                <span>Risk Control</span>
              </div>

              <div>
                <FaChartLine />
                <span>Process</span>
              </div>
            </div>
          </section>

          {/* FINAL THOUGHTS */}
          <section className={styles.finalSection}>
            <span className={styles.eyebrow}>FINAL THOUGHTS</span>

            <h2>Build Discipline Before Chasing Results</h2>

            <p>
              <strong>
                Trading psychology is not about removing emotions from
                trading.
              </strong>{" "}
              It is about learning how to make structured decisions despite
              those emotions. A disciplined trader focuses on following a
              defined process, managing risk, accepting individual trade
              outcomes and evaluating performance over a series of trades.
            </p>
          </section>

          {/* QUOTE */}
          <section className={styles.quoteSection}>
            <div className={styles.quoteMark}>“</div>

            <blockquote>
              A good strategy gives you the setup — good psychology helps you
              follow it.
            </blockquote>

            <span>— Trading Psychology Principle</span>
          </section>

          {/* CTA */}
          <section className={styles.cta}>
            <div>
              <span className={styles.eyebrow}>MASTER TRADERS ACADEMY</span>

              <h2>
                Learn. Practice. Develop a Structured Trading Approach.
              </h2>

              <p>
                Explore our educational programs designed to help learners
                understand market concepts, trading strategies and disciplined
                decision-making.
              </p>
            </div>

            <Link to="/courses" className={styles.ctaButton}>
              Explore Courses
              <FaArrowRight />
            </Link>
          </section>

          {/* DISCLAIMER */}
          <div className={styles.disclaimer}>
            <strong>Educational Disclaimer</strong>
            <p>
              This article is provided for educational and informational
              purposes only. It is not investment advice, a recommendation to
              buy or sell any security, or a guarantee of future results.
              Trading involves risk, and individuals should make decisions
              based on their own circumstances and understanding.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default TradingPsychology;