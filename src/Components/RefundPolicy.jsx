import React from "react";
import styles from "../Styles/PrivacyPolicy.module.css";

export default function RefundPolicy() {
  return (
    <section className={styles.policyPage}>

      {/* 🔥 BANNER */}
      <div className={styles.banner}>
        <div className={styles.overlay}></div>

        <div className={styles.bannerContent}>
          <h1>Refund Policy</h1>
          <p>Course rules, access & refund guidelines</p>
        </div>
      </div>

      {/* 📄 CONTENT */}
      <div className={styles.container}>

        {/* INTRO */}
        <div className={styles.card}>
          <h2>Educational Disclaimer</h2>
          <p>
            All our stock market courses are created solely for educational purposes.
            We do not offer financial, investment, or trading advice, nor do we assure profits or guaranteed results.
            Stock market trading carries inherent risk, and by enrolling, you agree that Master Traders Academy will not be responsible
            for any financial loss or trading outcomes arising from your personal decisions.
            Master Traders Academy is not SEBI registered.
            All information and materials shared through our courses are strictly for educational purposes only.
            Students are advised to conduct their own research and analysis before making any investment or trading decisions.
          </p>
        </div>

        {/* COURSE ACCESS */}
        <div className={styles.card}>
          <h2>Course Access</h2>
          <p>
            Once your enrollment and payment are successfully completed, you’ll receive access to the learning materials if any,
            as per the schedule mentioned for your course.
            Please make sure to utilize your access within the allocated duration,
            as extensions or reactivations are not available beyond the specified time frame.
          </p>
        </div>

        {/* TRANSFER */}
        <div className={styles.card}>
          <h2>Transfer of Enrollment</h2>
          <p>
            Your course registration is non-transferable.
            The access granted is for your personal use only and cannot be shared, transferred, or assigned to another person under any circumstance.
          </p>
        </div>

        {/* CANCELLATION */}
        <div className={styles.card}>
          <h2>Cancellations</h2>
          <p>
            We may, at our discretion, revise or reschedule course content, structure, or delivery methods to maintain quality and relevance.
            In the rare event of a course cancellation or major modification, enrolled participants will be informed and offered suitable alternatives.
            Such changes, however, do not qualify for a refund.
          </p>
        </div>

        {/* REFUND */}
        <div className={styles.card}>
          <h2>Refund Policy</h2>
          <p>
            All course purchases are final. Once payment has been made and access has been granted,
            no refund or cancellation will be processed for any reason, including non-attendance, technical issues, or change of mind.
          </p>
        </div>

        {/* SUPPORT */}
        <div className={styles.card}>
          <h2>Technical Support</h2>
          <p>
            Should you face any technical difficulties while accessing your course, please contact our support team immediately.
            We will do our best to resolve your issue promptly.
            Please note that technical interruptions or internet-related issues are not valid grounds for a refund or course extension.
          </p>
        </div>

        {/* ACKNOWLEDGMENT */}
        <div className={styles.card}>
          <h2>Acknowledgment</h2>
          <p>
            By enrolling in any of our courses and completing your payment, you confirm that you have read, understood,
            and agreed to this Refund & Course Policy in full.
          </p>
        </div>

        {/* HELP */}
        <div className={styles.card}>
          <h2>Need Help?</h2>
          <p>
            For any clarification or assistance, please reach out to our customer support team — we’re here to help you every step of the way.
          </p>
        </div>

      </div>
    </section>
  );
}
